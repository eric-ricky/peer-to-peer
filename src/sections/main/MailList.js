import React from "react";
import { Container, Card, CardContent, Typography, Grid } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

const news = [
  {
    id: 1,
    imgUrl:
      "https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Real time one-on-one whiteboard collaboration. All remotely using your device.",
    time: "2 months",
  },
  {
    id: 2,
    imgUrl:
      "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Make money by selling study guides and lectures notes online to their classmates",
    time: "4 weeks",
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
});

const CardMediaStyle = styled("div")({
  position: "relative",
  paddingTop: "calc(100% * 3 / 4)",
});

const CoverImgStyle = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

const MailList = () => {
  return (
    <RootStyle id="contact">
      <Container maxWidth="lg">
        <HeadingStyle
          variant="h1"
          sx={{ width: { md: "35%", xs: "70%" }, mx: "auto" }}
          gutterBottom
        >
          Amazing stuff coming soon
        </HeadingStyle>

        <Grid mt={10} container gap={0}>
          {news?.map((el) => (
            <Grid
              item
              xs={12}
              md={6}
              key={el.id}
              sx={{
                mb: { xs: 5, md: 0 },
              }}
            >
              <Card
                sx={{
                  position: "relative",
                  borderRadius: "1.5rem",
                  m: 2,
                }}
              >
                <CardMediaStyle
                  sx={{
                    pt: "calc(100% * 4 / 3)",
                    "&:after": {
                      top: 0,
                      content: "''",
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
                    },

                    pt: {
                      xs: "calc(100% * 4 / 3)",
                      sm: "calc(100% * 3 / 4.66)",
                    },
                  }}
                >
                  <CoverImgStyle alt="blog post" src={el.imgUrl} />
                </CardMediaStyle>

                <CardContent
                  sx={{
                    px: 4,
                    bottom: 10,
                    width: "100%",
                    position: "absolute",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="caption"
                    sx={{ color: "#ccf", display: "block" }}
                  >
                    {el.time}
                  </Typography>

                  <Typography
                    color="inherit"
                    variant="subtitle2"
                    underline="hover"
                    sx={{
                      color: "common.white",
                      cursor: "pointer",
                      fontSize: { xs: "22px", lg: "28px" },
                      fontWeight: 700,
                    }}
                  >
                    {el.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
};

export default MailList;
