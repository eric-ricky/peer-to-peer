import React from "react";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import { Container, Button, Box, Stack, Typography } from "@mui/material";

import HeroImg from "../../assets/hero.png";

////////////////////////////////
const RootStyle = styled("section")({
  paddingTop: "10rem",
  paddingBottom: "5rem",
  background: "#f5f6f9",
  minHeight: "50vh",
  display: "grid",
  placeItems: "center",
});

const Hero = () => {
  const router = useRouter();
  return (
    <RootStyle id="home">
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              md: "row",
              xs: "column",
            },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: { md: "50%" } }}>
            <Typography
              component="h5"
              sx={{
                color: "#1b2145",
                fontSize: "45px",
                lineHeight: "50px",
                fontStyle: "normal",
                fontWeight: 700,
                textAlign: "left",
              }}
              gutterBottom
            >
              Having touble understanding a concept or a topic?
            </Typography>
            <Typography
              sx={{
                maxWidth: { md: "360px" },
                color: "#75798f",
                fontSize: "16px",
                lineHeight: "28px",
                fontStyle: "normal",
                fontWeight: 400,
              }}
            >
              Just ask and get clear and precise explanation from your peers.
            </Typography>

            <Stack direction="row" sx={{ mt: 5 }}>
              <Button
                sx={{
                  color: "#fff",
                  padding: "10px 24px",
                  background: "blue",
                  textTransform: "inherit",
                  fontSize: "15px",
                  lineHeight: "24px",
                  fontWeight: 600,
                  "&:hover": {
                    background: "blue",
                    opacity: 0.8,
                  },
                }}
                onClick={() => router.push("/user/ask")}
              >
                Ask a question
              </Button>
              <Button
                sx={{
                  ml: 2,
                  textTransform: "inherit",
                  fontSize: "15px",
                  lineHeight: "24px",
                  fontWeight: 600,
                  "&:hover": {
                    color: "#123456",
                  },
                }}
              >
                How it works
              </Button>
              <Box sx={{ flexGrow: 1 }} />
            </Stack>

            <Stack direction="row" sx={{ mt: 2 }}>
              <Typography
                sx={{
                  color: "#75798f",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "22px",
                  textAlign: "left",
                }}
              >
                100% free to ask questions
              </Typography>
            </Stack>
          </Box>

          <Box
            direction="row"
            sx={{
              width: { md: "60%", xs: "100%" },
              mt: { md: "-195px", xs: "2rem" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={HeroImg?.src}
              alt="hero"
              width="100%"
              style={{ alignSelf: "center" }}
            />
          </Box>
        </Box>
      </Container>
    </RootStyle>
  );
};

export default Hero;
