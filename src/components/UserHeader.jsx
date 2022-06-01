import React from "react";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import { Stack, Typography, Button } from "@mui/material";

const UserHeader = ({ title, url }) => {
  const router = useRouter();
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      mb={5}
      py={1.5}
    >
      <Typography
        component="h4"
        sx={{
          fontSize: {
            md: "22px",
            xs: "18px",
          },
          fontWeight: 600,
        }}
      >
        {title}
      </Typography>
      <Button
        variant="contained"
        startIcon={<Icon icon="akar-icons:chat-question" />}
        sx={{
          textTransform: "inherit",
          fontSize: {
            md: "14px",
            xs: "12px",
          },
        }}
        onClick={() => router.push("/user/ask")}
      >
        Ask a Question
      </Button>
    </Stack>
  );
};

export default UserHeader;
