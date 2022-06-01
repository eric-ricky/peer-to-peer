import React from "react";
import { Container, Box, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import FooterWidget from "../../components/FooterWidget";

const menuItems = [
  {
    id: 1,
    title: "Company",
    items: [
      {
        path: "#!",
        label: "About",
      },
      {
        path: "#!",
        label: "Affiliate",
      },
      {
        path: "#!",
        label: "Careers & Culture    ",
      },
      {
        path: "#!",
        label: "Blog",
      },
      {
        path: "#!",
        label: "Press",
      },
    ],
  },
  {
    id: 2,
    title: "About Us",
    items: [
      {
        path: "#!",
        label: "Support Center",
      },
      {
        path: "#!",
        label: "Customer Support",
      },
      {
        path: "#!",
        label: "About Us",
      },
      {
        path: "#!",
        label: "Copyright",
      },
      {
        path: "#!",
        label: "Popular Campaign",
      },
    ],
  },
  {
    id: 3,
    title: "Our Information",
    items: [
      {
        path: "#!",
        label: "Return Policy ",
      },
      {
        path: "#!",
        label: "Privacy Policy",
      },
      {
        path: "#!",
        label: "Terms & Conditions",
      },
      {
        path: "#!",
        label: "Site Map",
      },
      {
        path: "#!",
        label: "Store Hours",
      },
    ],
  },
  {
    id: 4,
    title: "My Account",
    items: [
      {
        path: "#!",
        label: "Press inquiries",
      },
      {
        path: "#!",
        label: "Social media ",
      },
      {
        path: "#!",
        label: "directories",
      },
      {
        path: "#!",
        label: "Images & B-roll",
      },
      {
        path: "#!",
        label: "Permissions",
      },
    ],
  },
  {
    id: 5,
    title: "Policy",
    items: [
      {
        path: "#!",
        label: "Application security",
      },
      {
        path: "#!",
        label: "Software principles",
      },
      {
        path: "#!",
        label: "Unwanted software policy",
      },
      {
        path: "#!",
        label: "Responsible supply chain",
      },
    ],
  },
];

///////////////////////////////////////////////////
const RootStyle = styled("footer")(({ theme }) => ({
  background: "#1b2145",
  minHeight: "50vh",
  paddingTop: "5rem",
  paddingBottom: "5rem",
  [theme.breakpoints.down("md")]: {
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem",
  },
}));

const Footer = () => {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              md: "row",
              xs: "column",
            },
            justifyContent: "space-between",
          }}
        >
          {menuItems.map(({ id, title, items }) => (
            <FooterWidget key={id} title={title} items={items} />
          ))}
        </Box>
        <Box
          sx={{
            borderTop: "0.1rem solid #fff0f07b",
            marginTop: "4rem",
            paddingTop: "1.25rem",
          }}
        >
          <Stack direction="row" justifyContent="space-between">
            <Typography>
              &copy; Copyright helpa.ltd. {new Date().getFullYear()}
            </Typography>
            <Typography
              sx={{
                "& span": {
                  cursor: "pointer",
                  "&:hover": {
                    color: "#fff",
                  },
                },
              }}
            >
              <span>FAQ</span>
            </Typography>
          </Stack>
        </Box>
      </Container>
    </RootStyle>
  );
};

export default Footer;
