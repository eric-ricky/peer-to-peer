import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import Link from "next/link";

const FooterWidget = ({ title, items }) => {
  return (
    <Box
      sx={{
        mb: {
          md: 0,
          xs: "2.5rem",
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "#f7f7f7",
          fontSize: "18px",
          lineHeight: "24px",
          fontWeight: 600,
        }}
        gutterBottom
      >
        {title}
      </Typography>
      <Stack
        spacing={1}
        sx={{
          mt: 2,
          "& a": {
            color: "#c6c8d6",
            "&:hover": {
              color: "#fff",
            },
          },
        }}
      >
        {items?.map(({ path, label }, i) => (
          <Link href={path}>{label}</Link>
        ))}
      </Stack>
    </Box>
  );
};

export default FooterWidget;
