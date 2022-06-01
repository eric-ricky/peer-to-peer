import React, { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import * as Yup from "yup";
import { Form, FormikProvider, useFormik } from "formik";

import {
  TextField,
  InputAdornment,
  IconButton,
  Stack,
  FormControl,
  Input,
  Box,
  Typography,
  Avatar,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import { useRouter } from "next/router";
import { AuthContext } from "../../../context/authContext";

import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../firebase/config";

const SignupForm = () => {
  const router = useRouter();
  const { onLogin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadError, setUploadError] = useState(null);
  const [imgAsset, setImgAsset] = useState(undefined);

  const fileTypes = ["image/png", "image/jpeg"];

  const uploadImage = (e) => {
    setLoading(true);
    setUploadError(null);
    setProgress(0);

    const imgFile = e.target.files[0];
    console.log(imgFile.type);

    if (!fileTypes.includes(imgFile.type)) {
      setLoading(false);
      setUploadError("Please select an image file (png or jpeg)");
      return;
    }

    const storageRef = ref(
      storage,
      `Images/Users/${Date.now()}-${imgFile.name}`
    );

    const uploadTask = uploadBytesResumable(storageRef, imgFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress = Math.floor(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(uploadProgress);
      },
      (err) => {
        console.log(err);
        setUploadError("Something went wrong. Please try again later.");
        setLoading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          setImgAsset(url);
          setLoading(false);
          setUploadError(null);
        });
      }
    );
  };

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("First name required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Last name required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async () => {
      console.log("signing up...");

      try {
        const username = `${values.firstName} ${values.lastName}`;
        const payload = {
          username,
          avatar: imgAsset,
          email: values.email,
          password: values.password,
        };

        const { data } = await axios.post(
          "http://localhost:5000/api/v1/auth/signup",
          payload
        );

        onLogin(data.user);
        const returnUrl = router.query.returnTo || "/user";

        router.push(returnUrl);
      } catch (error) {
        console.log(error);
      }
    },
  });

  const { errors, touched, handleSubmit, values, isSubmitting, getFieldProps } =
    formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              //   fullWidth
              label="First name"
              {...getFieldProps("firstName")}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <TextField
              //   fullWidth
              label="Last name"
              {...getFieldProps("lastName")}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>

          <TextField
            // fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps("email")}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            // fullWidth
            autoComplete="current-password"
            type={showPassword ? "text" : "password"}
            label="Password"
            {...getFieldProps("password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    <Icon
                      icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

          <Box
            sx={{
              mt: 3,
              position: "relative",
              background: "#f3f3fc",
              display: "grid",
              placeItems: "center",
            }}
          >
            {loading ? (
              <p>Loading...{progress}%</p>
            ) : (
              <>
                {uploadError && <p>{uploadError}</p>}
                {!uploadError && imgAsset && (
                  <Stack
                    alignItems="center"
                    justifyContent="space-between"
                    direction="row"
                    width="100%"
                    sx={{
                      px: 2.5,
                      py: 1,
                    }}
                  >
                    <Avatar
                      sx={{ cursor: "pointer" }}
                      src={`${imgAsset ? imgAsset : "#"}`}
                      alt="Remy"
                    />

                    <IconButton
                      // sx={{
                      //   position: "absolute",
                      //   top: 0,
                      //   right: 10,
                      // }}
                      onClick={() => setImgAsset(null)}
                    >
                      <Icon icon="ant-design:delete-filled" color="red" />
                    </IconButton>
                  </Stack>
                )}
                {!imgAsset && (
                  <FormControl
                    variant="standard"
                    component="label"
                    htmlFor="contained-button-file"
                    sx={{
                      p: 2.5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Input
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      type="file"
                      onChange={uploadImage}
                      sx={{ display: "none" }}
                    />
                    <Typography
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Icon icon="entypo:attachment" />
                      Upload profile photo
                    </Typography>
                  </FormControl>
                )}
              </>
            )}
          </Box>

          <LoadingButton
            // fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Register
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default SignupForm;
