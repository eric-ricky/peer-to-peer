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
} from "@mui/material";
import Comments from "./Comments";

import axios from "axios";

const Answers = ({ item }) => {
  const [showComments, setShowComments] = useState(false);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchComments = async () => {
    if (showComments === true) {
      setShowComments(false);
      return;
    }
    console.log("fetching comments...");

    setShowComments(true);

    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(
        `http://localhost:5000/api/v1/comments/${item._id}`
      );
      console.log(res.data.comments);
      setData(res.data.comments);
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setLoading(false);
  };

  return (
    <>
      <Box sx={{ mt: 5, pb: 2.5, borderBottom: "1px solid #ccc" }}>
        <Stack direction="row" alignItems="center" gap={1.4} mb={1.2}>
          <Avatar
            sx={{ cursor: "pointer" }}
            src={`${
              item?.user?.avatar
                ? item?.user?.avatar
                : "https://mui.com/static/images/avatar/3.jpg"
            }`}
            alt="Remy"
          />
          <span>{item?.user?.username}</span>
        </Stack>

        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 300,
            pl: 2,
          }}
        >
          {item?.body}
        </Typography>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ p: 0 }}
        >
          <Stack direction="row">
            <Button
              startIcon={<Icon icon="ei:comment" />}
              sx={{
                textTransform: "inherit",
                clolor: "#fff",
                fontSize: {
                  md: "14px",
                  xs: "12px",
                },
              }}
              onClick={fetchComments}
            >
              {item?.comments?.length}
            </Button>
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
              {item.likes}
            </Button>
          </Stack>

          <IconButton
            sx={{
              textTransform: "inherit",
              clolor: "#fff",
              background: "#ccf",
              display: "flex",
              justifyContens: "flex-end",
              fontSize: {
                md: "14px",
                xs: "12px",
              },
            }}
          >
            <Icon icon="akar-icons:more-vertical" />
          </IconButton>
        </Stack>

        {/* comments section */}
        {showComments && (
          <>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mt={4}
              gap={2}
            >
              <Avatar
                sx={{ cursor: "pointer" }}
                src="https://images.unsplash.com/photo-1645378999496-33c8c2afe38d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870"
                alt="Remy"
              />

              <Box
                component="form"
                onSubmit={(e) => e.preventDefault()}
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  background: "#f3f3fc",
                  flex: 1,
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Add a comment"
                  inputProps={{ "aria-label": "add a comment" }}
                />
              </Box>

              <Button
                variant="contained"
                sx={{
                  textTransform: "inherit",
                  color: "#fff",
                  p: "4px 8px",
                  fontSize: {
                    md: "14px",
                    xs: "12px",
                  },
                  display: {
                    md: "flex",
                    xs: "none",
                  },
                }}
              >
                Comment
              </Button>
            </Stack>

            {loading && <h1>Loading...</h1>}
            {data && data?.length < 1 && <h1>No comments yet</h1>}

            {data && data.length > 0 && (
              <>
                {data?.map((el) => (
                  <Comments key={el} item={el} />
                ))}
              </>
            )}
          </>
        )}
      </Box>

      {/* {answering && (
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            background: "rgba(18, 52, 86, 0.2)",
            top: 0,
            left: 0,
            px: 4,
            display: "grid",
            placeItems: "center",
          }}
        >
          <Box
            sx={{
              background: "#fff",
              borderRadius: "12px",
              color: "#123456",
              p: 2.5,
            }}
          >
            <Stack direction="row" justifyContent="space-between" gap={4}>
              <Typography>hello</Typography>
              <Typography>close</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" gap={1.4} mb={1.2}>
              <Avatar
                sx={{ cursor: "pointer" }}
                src="https://mui.com/static/images/avatar/3.jpg"
                alt="Remy"
              />
              <span>James Kyalo</span>
            </Stack>
            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "18px",
                fontWeight: 600,
                mb: 2,
              }}
            >
              Is there a way to formulate a stochastic process
            </Typography>
            <Box
              component="form"
              onSubmit={(e) => e.preventDefault()}
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                background: "#f3f3fc",
                flex: 1,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Add a comment"
                inputProps={{ "aria-label": "add a comment" }}
                multiline
                rows={5}
              />
            </Box>
            <Stack
              justifyContent="space-between"
              sx={{
                flexDirection: { md: "row", xs: "column" },
              }}
            >
              <Box />
              <Button
                variant="contained"
                sx={{
                  textTransform: "inherit",
                  color: "#fff",
                  p: "4px 8px",
                  mt: 4,
                  fontSize: {
                    md: "14px",
                    xs: "12px",
                  },
                }}
              >
                Comment
              </Button>
            </Stack>
          </Box>
        </Box>
      )} */}
    </>
  );
};

export default Answers;
