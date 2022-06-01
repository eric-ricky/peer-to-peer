import { useContext, useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import {
  Box,
  Stack,
  Button,
  IconButton,
  LoadingButton,
  Typography,
  Avatar,
  InputBase,
  Input,
  FormControl,
  Alert,
} from "@mui/material";

import axios from "axios";

import { AuthContext } from "../context/authContext";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase/config";

const AnswerPopup = ({ setAnswering, question, questionId }) => {
  const { user } = useContext(AuthContext);

  const [body, setBody] = useState(undefined);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState(false);

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imgAsset, setImgAsset] = useState(null);
  const [error, setError] = useState(null);

  const fileTypes = ["image/png", "image/jpeg"];

  useEffect(() => {
    if (formError) {
      setTimeout(() => {
        setFormError(false);
      }, 4000);
    }
  }, [formError]);

  const uploadImage = (e) => {
    setLoading(true);
    setError(null);
    setProgress(0);

    const imgFile = e.target.files[0];
    console.log(imgFile.type);

    if (!fileTypes.includes(imgFile.type)) {
      setLoading(false);
      setError("Please select an image file (png or jpeg)");
      return;
    }

    const storageRef = ref(
      storage,
      `Images/Answers/${Date.now()}-${imgFile.name}`
    );

    const uploadTask = uploadBytesResumable(storageRef, imgFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress = Math.floor(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(uploadProgress);
      },
      (err) => {
        console.log(err);
        setError("Something went wrong. Please try again later.");
        setLoading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          setImgAsset(url);
          setLoading(false);
          setError(null);
        });
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormLoading(true);
    console.log("submitting...");

    const attachment = imgAsset ? imgAsset : "";
    const payload = {
      body,
      attachment,
    };

    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/answers/${questionId}/${user._id}`,
        payload
      );

      console.log(res);
      setFormLoading(false);
      setAnswering(false);
    } catch (error) {
      console.log(error.response.data);
      setFormError(error.response.data.message);
      setFormLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        position: "fixed",
        background: "rgba(18, 52, 86, 0.56)",
        top: 0,
        left: 0,
        px: 4,
        display: "grid",
        placeItems: "center",
        zIndex: 9100,
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
        {formError && (
          <Alert severity="error" onClose={() => setFormError(false)}>
            {formError}
          </Alert>
        )}
        <Stack direction="row" justifyContent="space-between" gap={4}>
          <Stack direction="row" alignItems="center" gap={1.4} mb={1.2}>
            <Avatar
              sx={{ cursor: "pointer" }}
              src="https://mui.com/static/images/avatar/3.jpg"
              alt="Remy"
            />
            <span>{user?.username}</span>
          </Stack>

          <IconButton
            sx={{ cursor: "pointer" }}
            onClick={() => setAnswering(false)}
          >
            <Icon icon="ant-design:close-outlined" />
          </IconButton>
        </Stack>

        <Typography
          sx={{
            fontSize: "16px",
            lineHeight: "18px",
            fontWeight: 600,
            mb: 2,
          }}
        >
          {question}
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Box
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              flex: 1,
            }}
          >
            <Stack sx={{ flex: 1 }} gap={3}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#f3f3fc",
                  px: 2,
                }}
              >
                <InputBase
                  fullWidth
                  placeholder="Write your answer"
                  inputProps={{ "aria-label": "write your answer" }}
                  multiline
                  rows={5}
                  required
                  type="text"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
              </Box>

              <Box
                sx={{
                  background: "#f3f3fc",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                {loading ? (
                  <h1>Loading...{progress}%</h1>
                ) : (
                  <>
                    {error && <p>{error}</p>}
                    {!error && imgAsset && (
                      <Stack
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                          py: 4,
                          position: "relative",
                          height: "260px",
                          width: { md: "55%", xs: "100%" },
                          overflowY: "scroll !important",
                        }}
                      >
                        <img
                          src={`${imgAsset ? imgAsset : "#"}`}
                          width="100%"
                        />

                        <IconButton
                          sx={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            background: "#fff",
                          }}
                          onClick={() => setImgAsset(null)}
                        >
                          <Icon icon="ant-design:delete-filled" color="red" />
                        </IconButton>
                      </Stack>
                    )}

                    {!imgAsset && (
                      <FormControl
                        variant="standard"
                        component="label"
                        htmlFor="contained-button-file"
                        sx={{
                          p: 4,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Input
                          accept="image/*"
                          id="contained-button-file"
                          multiple
                          type="file"
                          onChange={uploadImage}
                          sx={{ display: "none" }}
                        />
                        <Typography sx={{ cursor: "pointer" }}>
                          <Icon icon="entypo:attachment" />
                          Add an attachment (optional)
                        </Typography>
                      </FormControl>
                    )}
                  </>
                )}
              </Box>
            </Stack>
          </Box>

          <Stack
            justifyContent="space-between"
            sx={{
              flexDirection: { md: "row", xs: "column" },
            }}
          >
            <Box />
            <Button
              type="submit"
              variant="contained"
              sx={{
                textTransform: "inherit",
                color: "#fff",
                p: "4px 8px",
                mt: 4,
                opacity: `${formLoading ? 0.7 : 1}`,
                fontSize: {
                  md: "14px",
                  xs: "12px",
                },
              }}
            >
              {formLoading ? "Anwering..." : "Answer"}
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default AnswerPopup;
