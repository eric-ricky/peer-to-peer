import React from "react";
import { styled } from "@mui/material/styles";
import { Container, Box, Stack, Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";

////////////////////////////////
const RootStyle = styled("section")({
  paddingTop: "5rem",
  paddingBottom: "10rem",
  background: "#f5f6f9",
  minHeight: "50vh",
  display: "grid",
  placeItems: "center",
});

const reasons = [
  {
    id: 1,
    title: "Better understanding",
    desc: "boost your understading of a material",
  },
  {
    id: 2,
    title: "Better academic achievement",
    desc: "achieve A plus in your academics",
  },
  {
    id: 3,
    title: "Higher retention rate",
    desc: "retain the material more",
  },
];

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
              Why peer to peer?
            </Typography>

            <Stack>
              <Timeline
                sx={{
                  "& .css-ha3bif-MuiTimelineItem-root:before": {
                    flex: 0,
                    webkitFlex: 0,
                    padding: "0",
                  },
                }}
              >
                {reasons?.map((el, i) => (
                  <TimelineItem key={i}>
                    <TimelineSeparator>
                      <TimelineDot
                        color={
                          (el.id === 1 && "primary") ||
                          (el.id === 2 && "success") ||
                          (el.id === 3 && "warning") ||
                          "error"
                        }
                      />
                      {el.id === 3 ? null : <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: "#75798f",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: 600,
                        }}
                      >
                        {el.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "text.secondary" }}
                      >
                        {el.desc}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
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
      </Container>
    </RootStyle>
  );
};

export default Features;
