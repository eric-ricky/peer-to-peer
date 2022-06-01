import React, { useContext } from "react";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import { Typography, Box, Card, Divider } from "@mui/material";

import SEO from "../../../components/seo";
import Logo from "../../../components/Logo";
import SignupForm from "../../../sections/@user/auth/signupForm";

import LoginImg from "../../../assets/illustration_login.png";
import { useRouter } from "next/router";
import { AuthContext } from "../../../context/authContext";

//////////////////////////////////
const RootStyle = styled(Box)({
  display: "grid",
  placeItems: "center",
  minHeight: "100vh",
  background: "#ccf",
});

const ContentStyle = styled(Card)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "100%",
  },
}));

export default function Signup() {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  if (user !== null) {
    console.log("user is found!!");
    const redirectUrl = "/user";
    router.push(redirectUrl);
  }
  return (
    <>
      <SEO
        title="Signup to Lopa"
        description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
      />

      <RootStyle>
        <ContentStyle>
          <Box
            sx={{
              background: "#123456",
              color: "#fff",
              flex: 1,
              display: { md: "flex", xs: "none" },
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "658px",
              pb: 4,
              px: 4,
            }}
          >
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome Back
            </Typography>
            <img src={LoginImg.src} alt="login" width="100%" height="100%" />

            <Box sx={{ flexGrow: 1 }} />

            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Already have an account?{" "}
              <Link href="/user/auth/login">Login</Link>
            </Typography>
          </Box>

          <Box sx={{ flex: 1, px: 5, py: 4 }}>
            <Logo />

            <Typography sx={{ mt: 4 }} variant="h4" gutterBottom>
              Sign up
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 5 }}>
              Enter your details below.
            </Typography>

            <SignupForm />

            <Typography
              variant="body2"
              align="center"
              sx={{ mt: 3, display: { md: "none", xs: "block" } }}
            >
              Already have an account?{" "}
              <Link href="/user/auth/login">Login</Link>
            </Typography>
          </Box>
        </ContentStyle>
      </RootStyle>
    </>
  );
}
