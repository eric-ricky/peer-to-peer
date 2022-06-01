import React, { useState } from "react";
import { Icon } from "@iconify/react";
import axios from "axios";
import {
  Card,
  Typography,
  Button,
  Stack,
  Box,
  Avatar,
  IconButton,
  Input,
  InputBase,
  Paper,
  Skeleton,
} from "@mui/material";
import Answers from "./Answers";
import AnswerPopup from "./AnswerPopup";

const QuestionSkeleton = () => {
  return (
    <>
      <Card
        sx={{
          p: 2.5,
          mt: 5,
          display: "flex",
        }}
      >
        <Box sx={{ pr: 2 }}>
          <Skeleton variant="circular">
            <Avatar />
          </Skeleton>
        </Box>

        <Box
          sx={{
            flex: 1,
          }}
        >
          <Stack>
            <Skeleton width="45%">
              <Typography>.</Typography>
            </Skeleton>

            <Skeleton width="55%" sx={{ mb: 2 }}>
              <Typography>.</Typography>
            </Skeleton>

            <Skeleton variant="rectangular" width="100%">
              <Box sx={{ py: 10 }} />
            </Skeleton>
          </Stack>

          {/* Answers section */}
          <Box
            sx={{
              mt: 4,
              width: "100%",
            }}
          >
            <Skeleton variant="rectangular" width="100%">
              <Box sx={{ py: 2 }} />
            </Skeleton>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default QuestionSkeleton;
