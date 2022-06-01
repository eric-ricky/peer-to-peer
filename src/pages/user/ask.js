import React from "react";
import { Icon } from "@iconify/react";
import { Link, useRouter } from "next/router";
import {
  Container,
  Typography,
  Button,
  Stack,
  Select,
  MenuItem,
  InputLabel,
  Box,
  FormControl,
} from "@mui/material";
import UserLayout from "../../layouts/user";
import SEO from "../../components/seo";
import AskForm from "../../sections/@user/askForm";

const Ask = () => {
  const router = useRouter();
  return (
    <>
      <SEO
        title="Ask A Questions"
        description="Just ask and get clear and precise explanation from your peers."
      />

      <Container sx={{ paddingTop: 5 }}>
        <Box
          sx={{
            fontWeight: 500,
            fontSize: "18px",
            cursor: "pointer",
            display: "inline-flex",
            direction: "row",
            alignItems: "center",
            gap: 1,
          }}
          onClick={() => router.push("/user")}
        >
          <Icon icon="eva:arrow-back-fill" width="30" height="30" />
          <span>Back</span>
        </Box>

        <Typography
          component="h4"
          sx={{
            py: 5,
            fontSize: {
              md: "22px",
              xs: "18px",
            },
            fontWeight: 600,
          }}
        >
          Type your question
        </Typography>

        <Box>
          <AskForm />
        </Box>
      </Container>
    </>
  );
};

export default Ask;
