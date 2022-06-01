import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import Community from "../../assets/community.svg";
import Chat from "../../assets/chat.svg";

const data = [
  {
    id: 1,
    imgUrl: Community,
    title: "Post a question",
    text: "Simply ask your question from any topic or concept you don't understand.",
  },
  {
    id: 2,
    imgUrl: Chat,
    title: "Recieve specific answers",
    text: "Get timely and accurate answers with indepth and clear explanation.",
  },
  {
    id: 3,
    imgUrl: Community,
    title: "Ask follow up questions",
    text: "Get more explanations until its clear. Don't forget to be polite and thankful.",
  },
];
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
  borderBottom: "solid 5px blue",
  position: "relative",

  //   "& span": {
  //     background: "blue",
  //     width: "95px",
  //     height: "4.5px",
  //     content: "' '",
  //     display: "inline-block",
  //     marginRight: "0.625rem",

  //     position: "absolute",
  //     bottom: "0px",
  //     left: "45%",
  //   },
});

const HowItWorks = () => {
  return (
    <RootStyle id="howitworks">
      <Container maxWidth="lg">
        <HeadingStyle
          sx={{ width: { md: "20%", xs: "70%" }, mx: "auto" }}
          gutterBottom
        >
          <span></span>How it works
        </HeadingStyle>

        <Box sx={{ mt: 10 }}>
          <Grid container sx={{ mt: 5 }}>
            {data.map((item) => (
              <Grid
                key={item.id}
                item
                sm={12}
                md={6}
                lg={4}
                sx={{
                  textAlign: "center",
                  //   display: "flex",
                  //   flexDirection: "column",
                  //   alignItems: "center",
                  //   background: "#123456",
                  p: 4,
                }}
              >
                <Box sx={{ pb: 4 }}>
                  <img src={item.imgUrl.src} alt={item.title} />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: "#75798f",
                      fontSize: "16px",
                      lineHeight: "28px",
                      fontStyle: "normal",
                      fontWeight: 600,
                    }}
                    gutterBottom
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#75798f",
                      fontSize: "16px",
                      lineHeight: "25px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      mx: "auto",
                      mt: 1,
                      width: { md: "65%", xs: "90%" },
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </RootStyle>
  );
};

export default HowItWorks;
