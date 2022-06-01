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
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { AuthContext } from "../../../context/authContext";

const LoginForm = () => {
  const router = useRouter();
  const { onLogin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

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

      try {
        const payload = { email: values.email, password: values.password };

        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_BASEURL}/auth/login`,
          payload
        );

        console.log(data?.user);
        onLogin(data?.user);

        const returnUrl = router.query.returnTo || "/user";
        router.push(returnUrl);
      } catch (error) {
        console.log(error);
      }
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            // fullwidth
            type="email"
            label="Email address"
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
            {...getFieldProps("email")}
          />

          <TextField
            // fullWidth
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
          />

          <Link href="/user/auth/forget-password">Forgot password?</Link>
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
