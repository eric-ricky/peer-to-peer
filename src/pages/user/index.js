import { useEffect, useState, useContext } from "react";
import { Icon } from "@iconify/react";
import {
  Container,
  Box,
  Stack,
  Typography,
  Card,
  Avatar,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Skeleton,
} from "@mui/material";

import SEO from "../../components/seo";
import UserLayout from "../../layouts/user";
import UserHeader from "../../components/UserHeader";
import Question from "../../components/Question";
import QuestionSkeleton from "../../components/QuestionSkeleton";

import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { AuthContext } from "../../context/authContext";


const User = () => {
  const [showMore, setShowMore] = useState(false);
  const { data, loading, error, reFetch } = useFetch(
    `${process.env.NEXT_PUBLIC_BASEURL}/questions`
  );

  const { user } = useContext(AuthContext);

  return (
    <>
      <SEO
        title="Recent Questions"
        description="Just ask and get clear and precise explanation from your peers."
      />

      <UserLayout>
        <Container sx={{ paddingTop: 15 }} maxWidth="lg">
          <UserHeader title="Recent Questions" url="/user" />

          {loading && (
            <>
              {[1, 2, 3].map((el) => (
                <QuestionSkeleton key={el} />
              ))}
            </>
          )}

          {data && data?.questions.length < 1 && <h1>No questions Found</h1>}

          {!loading && data && data?.questions.length > 0 && (
            <>
              <Box sx={{ mt: 8 }}>
                {data &&
                  data?.questions
                    ?.filter((q) => user?._id !== q.user._id)
                    .map((el, i) => <Question key={i} item={el} />)}
              </Box>
            </>
          )}
        </Container>
      </UserLayout>
    </>
  );
};

export default User;
