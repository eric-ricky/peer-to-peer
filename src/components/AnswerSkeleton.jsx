import React, { useState } from "react";
import { Icon } from "@iconify/react";
import {
  Box,
  Stack,
  Typography,
  Avatar,
  Button,
  IconButton,
  InputBase,
  Skeleton,
} from "@mui/material";

const AnswerSkeleton = () => {
  return (
    <>
      <Box sx={{ mt: 5, pb: 2.5, borderBottom: "1px solid #ccc" }}>
        <Stack direction="row" alignItems="center" gap={1.4} mb={1.2}>
          <Skeleton variant="circular">
            <Avatar />
          </Skeleton>
          <Skeleton width="45%">
            <Typography>.</Typography>
          </Skeleton>
        </Stack>

        <Skeleton width="65%" sx={{ mb: 2, ml: 2 }}>
          <Typography sx={{ py: 1 }}>.</Typography>
        </Skeleton>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ p: 0 }}
        >
          <Stack direction="row" gap={2}>
            <Skeleton variant="rectangle" sx={{ ml: 2 }}>
              <Box sx={{ px: 2.5, py: 1 }} />
            </Skeleton>

            <Skeleton variant="rectangle">
              <Box sx={{ px: 2.5, py: 1 }} />
            </Skeleton>
          </Stack>

          <Skeleton variant="rectangle">
            <Box sx={{ px: 2.5, py: 1 }} />
          </Skeleton>
        </Stack>
      </Box>
    </>
  );
};

export default AnswerSkeleton;
