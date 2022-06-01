import React from "react";
import { Icon } from "@iconify/react";
import { Box, Typography, Stack, Avatar, Button } from "@mui/material";

const Comments = () => {
  return (
    <Box sx={{ pl: 4, mt: 2.5 }}>
      <Stack direction="row" alignItems="center" gap={1.4} mb={1.2}>
        <Avatar
          sx={{
            cursor: "pointer",
            width: "28px",
            height: "28px",
          }}
          src="https://mui.com/static/images/avatar/3.jpg"
          alt="Remy"
        />
        <span style={{ fontSize: "14px" }}>James Kyalo</span>
      </Stack>

      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: 300,
          pl: 1,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus explicabo
        ut animi nesciunt dolorem, aspernatur rerum nam,repellendus. Quo, ad
        aliquam eius laborum aperiam nisi recusandae temporibus doloremque
        debitis esse fugit perspiciatis ab molestias nobis?
      </Typography>

      <Button
        startIcon={<Icon icon="ant-design:like-outlined" />}
        sx={{
          textTransform: "inherit",
          clolor: "#fff",
          fontSize: {
            md: "14px",
            xs: "12px",
          },
        }}
      >
        5
      </Button>
    </Box>
  );
};

export default Comments;
