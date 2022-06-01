import React from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

//////////////////////////////////
const RootStyle = styled("section")({
  paddingTop: "9rem",
  paddingBottom: "7rem",
  display: "grid",
  placeItems: "center",
});

const HeadingStyle = styled(Typography)({
  textAlign: "center",
  color: "#123456",
  fontSize: "28px",
  lineHeight: "24px",
  fontWeight: 900,
});

const MailList = () => {
  return (
    <RootStyle id="contact">
      <Container maxWidth="lg">
        <HeadingStyle
          variant="h1"
          sx={{ width: { md: "20%", xs: "70%" }, mx: "auto" }}
          gutterBottom
        >
          <span></span>Get the latest news
        </HeadingStyle>

        <Box sx={{ display: "grid", placeItems: "center", mt: 10 }}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
              width: "100%",
              display: "flex",
              alingItems: "center",
              justifyContent: "center",
              flexDirection: { md: "row", xs: "column" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              fullWidth
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <Button
              sx={{
                borderRadius: "45px",
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
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </RootStyle>
  );
};

export default MailList;
