import React from "react";
import { styled } from "@mui/material/styles";
import { Container, Button, Box, Stack, Typography } from "@mui/material";

import HeroImg from "../../assets/hero.png";

////////////////////////////////
const RootStyle = styled("section")({
  paddingTop: "5rem",
  paddingBottom: "10rem",
  background: "#f5f6f9",
  minHeight: "50vh",
  display: "grid",
  placeItems: "center",
});

const Features = () => {
  return (
    <RootStyle id="peer">
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
          <Box sx={{ flex: 1, p: 5 }}>
            <Typography
              component="h5"
              sx={{
                color: "#1b2145",
                fontSize: "28px",
                lineHeight: "32px",
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
                maxWidth: { md: "560px" },
                color: "#75798f",
                fontSize: "16px",
                lineHeight: "28px",
                fontStyle: "normal",
                fontWeight: 400,
              }}
            >
              Just ask and get a specific answer to your question. No more
              general answers from google or heavy accent from old youtube
              videos.
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
              >
                Ask a question
              </Button>
              <Button
                sx={{
                  // color: "#fff",
                  // padding: "10px 24px",
                  // background: "blue",
                  ml: 2,
                  textTransform: "inherit",
                  fontSize: "15px",
                  lineHeight: "24px",
                  fontWeight: 600,
                  "&:hover": {
                    background: "blue",
                    opacity: 0.8,
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
              flex: 1,
              p: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://uploads-ssl.webflow.com/5af01da5c360516703cb6b8d/5f158f6e7c92eb284aa75539_How%20to%20-%20Compare.png"
              alt="hero"
              width="100%"
              style={{ alignSelf: "center" }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            mt: 15,
            pt: 10,
            display: "flex",
            flexDirection: {
              md: "row",
              xs: "column",
            },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            direction="row"
            sx={{
              flex: 1,
              p: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://uploads-ssl.webflow.com/5af01da5c360516703cb6b8d/5f158f6e7c92eb284aa75539_How%20to%20-%20Compare.png"
              alt="hero"
              width="100%"
              style={{ alignSelf: "center" }}
            />
          </Box>

          <Box sx={{ flex: 1, p: 5 }}>
            <Typography
              component="h5"
              sx={{
                color: "#1b2145",
                fontSize: "28px",
                lineHeight: "32px",
                fontStyle: "normal",
                fontWeight: 600,
                textAlign: "left",
                // width: { md: "85%" },
              }}
              gutterBottom
            >
              Having touble understanding a concept or a topic?
            </Typography>
            <Typography
              sx={{
                maxWidth: { md: "560px" },
                color: "#75798f",
                fontSize: "16px",
                lineHeight: "28px",
                fontStyle: "normal",
                fontWeight: 400,
              }}
            >
              Just ask and get a specific answer to your question. No more
              general answers from google or heavy accent from old youtube
              videos.
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
                    background: "blue",
                    opacity: 0.8,
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
        </Box>
      </Container>
    </RootStyle>
  );
};

export default Features;
