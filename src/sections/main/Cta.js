import React from "react";
import { Container, Box, Typography, Stack, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

//////////////////////////////////
const RootStyle = styled("section")(({ theme }) => ({
  background: "#1b2145",
  paddingTop: "5rem",
  paddingBottom: "5rem",

  [theme.breakpoints.down("md")]: {
    paddingTop: "5rem",
    paddingBottom: "5rem",
  },
}));

const HeadingStyle = styled(Typography)({
  color: "#123456",
  fontSize: "18px",
  lineHeight: "24px",
  fontWeight: 600,
  "& span": {
    // border: "1px solid orange",
    background: "orange",
    width: "95px",
    height: "2.5px",
    content: "' '",
    display: "inline-block",
    marginRight: "0.625rem",
  },
});

const Cta = () => {
  return (
    <RootStyle id="contact">
      <Container maxWidth="lg">
        <Box
          sx={{
            p: { md: 7, xs: 2 },
            borderRadius: "15px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          <Stack sx={{ width: { md: "85%", xs: "100%" } }}>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "32px",
                lineHeight: "48px",
                fontWeight: 600,
              }}
              gutterBottom
            >
              Gain deeper understanding
            </Typography>
            <Typography
              sx={{
                color: "#c7cbe5",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 400,
                width: { md: "65%", xs: "100%" },
              }}
            >
              Studies show that students who explain a topic or a concept to
              another student deepens their understanding and fosters a positive
              attitude toward the subject matter.
            </Typography>
          </Stack>

          <Stack
            sx={{ pl: { md: 5, xs: 0 }, width: { md: "40%", xs: "100%" } }}
          >
            <Button
              sx={{
                color: "#fff",
                padding: "12px 24px",
                background: "blue",
                textTransform: "inherit",
                fontSize: { md: "15px", xs: "12px" },
                lineHeight: "24px",
                fontWeight: 600,
                mt: { md: 0, xs: 5 },
                "&:hover": {
                  background: "#f5f6f9",
                },
              }}
            >
              Answer a quesion now
            </Button>
          </Stack>
        </Box>
      </Container>
    </RootStyle>
  );
};

export default Cta;
