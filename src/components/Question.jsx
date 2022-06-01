import { useContext, useState } from "react";
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
} from "@mui/material";
import Answers from "./Answers";
import AnswerPopup from "./AnswerPopup";
import AnswerSkeleton from "./AnswerSkeleton";

import { AuthContext } from "../context/authContext";

const Question = ({ item }) => {
  const { user } = useContext(AuthContext);

  const [showMore, setShowMore] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [answering, setAnswering] = useState(false);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchAnswers = async () => {
    if (showAnswers === true) {
      setShowAnswers(false);
      return;
    }

    setShowAnswers(true);

    setLoading(true);
    setError(null);
    try {
      const res = await axios(
        `${process.env.NEXT_PUBLIC_BASEURL}/answers/${item._id}`
      );
      console.log(res.data.answers);
      setData(res.data.answers);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

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
          <Avatar
            sx={{ cursor: "pointer" }}
            src={`${
              item.user?.avatar
                ? item.user?.avatar
                : "https://images.unsplash.com/photo-1645378999496-33c8c2afe38d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870"
            }`}
            alt="Remy"
          />
        </Box>

        <Box
          sx={{
            flex: 1,
          }}
        >
          <Stack>
            <Typography
              sx={{
                fontSize: "12px",
                "& span": {
                  color: "blue",
                  fontStyle: "italic",
                },
              }}
              gutterBottom
            >
              {item.user?.username} on {item.createdAt.slice(0, 10)} in{" "}
              <span>{item.topic}</span>
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "18px",
                fontWeight: 600,
                mb: 2,
              }}
            >
              {item.body.slice(0, 55)}...
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 300,
              }}
            >
              {item.body}
            </Typography>
          </Stack>

          {/* show more btn */}
          <Stack direction="row" sx={{ px: 4, mt: 2 }}>
            <Box sx={{ flexGrow: 1 }} />
            <Typography
              onClick={() => setShowMore((prev) => !prev)}
              sx={{ color: "blue", cursor: "pointer" }}
            >
              {showMore ? "Show Less" : "Show More"}
            </Typography>
          </Stack>

          {showMore && (
            <Stack sx={{ py: 4, width: { md: "55%", xs: "100%" } }}>
              <img
                src="https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870"
                width="100%"
              />
            </Stack>
          )}

          {/* Answers section */}
          <Box
            sx={{
              background: "#ececff",
              p: 1.2,
              px: 2,
              mt: 4,
              width: "100%",
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  gap: 1,
                  fontSize: {
                    md: "14px",
                    xs: "12px",
                  },
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
                onClick={fetchAnswers}
              >
                <Icon icon="ri:question-answer-line" />
                <span>See Answers</span>
              </Typography>
              {user?._id === item?.user._id ? (
                <IconButton
                  onClick={() =>
                    alert("Are you sure you want to delete the question?")
                  }
                >
                  <Icon icon="ant-design:delete-filled" color="red" />
                </IconButton>
              ) : (
                <Button
                  variant="contained"
                  startIcon={<Icon icon="akar-icons:edit" />}
                  sx={{
                    textTransform: "inherit",
                    background: "#123456",
                    clolor: "#fff",
                    fontSize: {
                      md: "14px",
                      xs: "12px",
                    },
                  }}
                  onClick={() => setAnswering(true)}
                >
                  Answer
                </Button>
              )}
            </Stack>

            {/* Answers */}
            {showAnswers && (
              <Box
                sx={{
                  mt: 2,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    mb: 4,
                  }}
                >
                  Answers
                </Typography>

                {loading && (
                  <>
                    {item?.answers?.map((el) => (
                      <AnswerSkeleton key={el} />
                    ))}
                  </>
                )}

                {data && data.length < 1 && <h1>No answers yet</h1>}

                {data && data.length > 0 && (
                  <>
                    {data?.map((el, i) => (
                      <Answers key={i} item={el} />
                    ))}
                  </>
                )}

                {/* <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "blue",
                    cursor: "pointer",
                    my: 4,
                  }}
                >
                  More answers
                </Typography> */}
              </Box>
            )}
          </Box>
        </Box>
      </Card>

      {answering && (
        <AnswerPopup
          questionId={item._id}
          question={`${item.body.slice(0, 55)}...`}
          setAnswering={setAnswering}
        />
      )}
    </>
  );
};

export default Question;
