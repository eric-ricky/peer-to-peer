import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import * as Yup from "yup";
import axios from "axios";
import { Icon } from "@iconify/react";
import { Form, FormikProvider, useFormik } from "formik";
import {
  InputAdornment,
  Stack,
  TextField,
  IconButton,
  Checkbox,
  FormControlLabel,
  Button,
  FormControl,
  Input,
  Box,
  Typography,
  Avatar,
  Alert,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { AuthContext } from "../../../context/authContext";

const LoginForm = () => {
  const router = useRouter();
  const { onLogin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [formAlert, setAlert] = useState(undefined);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: async () => {
      console.log("loging in...");
      setAlert(undefined);

      try {
        const payload = { email: values.email, password: values.password };

        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_BASEURL}/auth/login`,
          payload
        );

        setAlert({
          message: "Login successfully",
          severity: "success",
        });

        console.log(data?.user);

        onLogin(data?.user);
        const returnUrl = router.query.returnTo || "/user";
        router.push(returnUrl);
      } catch (error) {
        console.log(error);

        setAlert({
          message: `${error?.response?.data?.message}`,
          severity: "error",
        });

        setTimeout(() => {
          setAlert(undefined);
        }, 4000);
      }
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        {formAlert && (
          <Alert
            sx={{ mb: 2.8 }}
            severity={`${formAlert?.severity}`}
            onClose={() => setAlert(null)}
          >
            {formAlert?.message}
          </Alert>
        )}
        <Stack spacing={3}>
          <TextField
            type="email"
            label="Email address"
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
            {...getFieldProps("email")}
          />

          <TextField
            type={showPassword ? "text" : "password"}
            label="Password"
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
            {...getFieldProps("password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                    <Icon
                      icon={`${
                        showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                      }`}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          <FormControlLabel
            control={
              <Checkbox
                {...getFieldProps("remember")}
                checked={values.remember}
              />
            }
            label="Remember me"
            sx={{
              "& .css-ahj2mt-MuiTypography-root": {
                fontSize: { md: "1rem", xs: "10px" },
                lineHeight: "12px",
              },
            }}
          />

          <Typography
            sx={{
              cursor: "pointer",
              fontSize: { md: "1rem", xs: "10px" },
            }}
            onClick={() => router.push("/user/auth/forget-password")}
          >
            Forgot password?
          </Typography>
        </Stack>

        <Button
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          sx={{
            opacity: isSubmitting ? 0.7 : 1,
          }}
        >
          {isSubmitting ? "Logging..." : "Login"}
        </Button>
      </Form>
    </FormikProvider>
  );
};

export default LoginForm;
