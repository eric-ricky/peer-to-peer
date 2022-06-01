import React from "react";
import Link from "next/link";
import { Typography } from "@mui/material";

const Logo = () => {
  return (
    <Link href="/">
      <Typography
        sx={{
          cursor: "pointer",
          color: "#1b2145",
          fontSize: "32px",
          lineHeight: "40px",
          fontStyle: "normal",
          fontWeight: 700,
          textAlign: "left",
          "& span": {
            color: "#0070f3",
          },
        }}
      >
        Io<span>pa</span>
      </Typography>
    </Link>
  );
};

export default Logo;
