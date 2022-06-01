import React from "react";
import { Icon } from "@iconify/react";
import { Stack, Button, Typography } from "@mui/material";

const AuthSocial = () => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button
          startIcon={
            <Icon
              icon="eva:google-fill"
              width={22}
              height={22}
              style={{ marginRight: "5px" }}
            />
          }
          fullWidth
          size="large"
          color="inherit"
          variant="outlined"
          sx={{
            alignItems: "center",
            background: "#db3236",
            color: "#fff",
          }}
        >
          Google
        </Button>

        <Button
          startIcon={
            <Icon
              icon="eva:facebook-fill"
              width={22}
              height={22}
              style={{ marginRight: "5px" }}
            />
          }
          fullWidth
          size="large"
          color="inherit"
          variant="outlined"
          sx={{
            alignItems: "center",
            background: "#1877F2",
            color: "#fff",
          }}
        >
          Facebook
        </Button>
      </Stack>
    </>
  );
};

export default AuthSocial;
