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
    `http://localhost:5000/api/v1/questions/user/${user?._id}`
  );

  return (
    <>
      <SEO
        title="My Questions"
        description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
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
