import { useContext } from "react";
import { Container, Box } from "@mui/material";

import SEO from "../../components/seo";
import UserLayout from "../../layouts/user";
import UserHeader from "../../components/UserHeader";
import Question from "../../components/Question";

import { AuthContext } from "../../context/authContext";
import useFetch from "../../hooks/useFetch";
import QuestionSkeleton from "../../components/QuestionSkeleton";

const MyQuestionsPage = () => {
  const { user } = useContext(AuthContext);
  const { data, loading, error } = useFetch(
    `${process.env.NEXT_PUBLIC_BASEURL}/questions/user/${user?._id}`
  );

  return (
    <>
      <SEO
        title="My Questions"
        description="Just ask and get clear and precise explanation from your peers."
      />

      <UserLayout>
        <Container maxWidth="lg" sx={{ paddingTop: 15 }}>
          <UserHeader title="My Questions" url="/user/my-questions" />

          <Box>
            {loading && (
              <>
                {[1, 2, 3].map((el) => (
                  <QuestionSkeleton key={el} />
                ))}
              </>
            )}
            {!loading && data && (
              <>
                {data?.questions?.length < 1 && <h1>No questions found</h1>}

                {data?.questions?.length > 0 &&
                  data?.questions?.map((el, i) => (
                    <Question key={i} item={el} />
                  ))}
              </>
            )}
          </Box>
        </Container>
      </UserLayout>
    </>
  );
};

export default MyQuestionsPage;
