import React, { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import {
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Box,
  Stack,
  Input,
  Button,
  Typography,
  InputBase,
  IconButton,
} from "@mui/material";

import axios from "axios";

import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase/config";
import { AuthContext } from "../../context/authContext";
import { useRouter } from "next/router";

//////////////////////////////////////////////////
const topics = [
  {
    value: "mathematics",
    label: "Mathematics",
  },
  {
    value: "finance",
    label: "Finance",
  },
  {
    value: "programming",
    label: "Programming",
  },
  {
    value: "medicine",
    label: "Medicine",
  },
  {
    value: "other",
    label: "Other",
  },
];

const AskForm = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState(null);

  const [input, setInput] = useState({
    topic: "mathematics",
    body: "",
  });

  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [imgAsset, setImgAsset] = useState(undefined);

  const fileTypes = ["image/png", "image/jpeg"];

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

  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormLoading(true);
    setFormError(null);
    console.log("submitting...");

    const attachment = imgAsset ? imgAsset : "";
    const { body, topic } = input;
    const payload = {
      body,
      topic,
      attachment,
    };

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASEURL}/questions/${user?._id}`,
        payload
      );

      console.log(res);
      setFormLoading(false);
      router.push("/user/my-questions");
    } catch (error) {
      console.log(error);
      setFormError(error);
      setFormLoading(false);
    }
  };

  return (
    <Box>
      <Stack gap={3} component="form" onSubmit={handleSubmit}>
        <FormControl fullWidth sx={{ minWidth: 160 }}>
          <TextField
            select
            labelid="demo-simple-select-standard-label"
            value={input.topic}
            name="topic"
            label="Select Topic"
            onChange={handleChange}
            variant="standard"
            sx={{
              background: "#f3f3fc",
            }}
          >
            {topics.map(({ value, label }, i) => (
              <MenuItem key={i} value={value}>
                {label}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>

        <InputBase
          fullWidth
          placeholder="Write your answer"
          inputProps={{ "aria-label": "write your answer" }}
          multiline
          rows={6}
          required
          name="body"
          type="text"
          value={input.body}
          onChange={handleChange}
          sx={{
            px: 2,
            pt: 2,
            background: "#f3f3fc",
            borderBottom: "1.5px solid #655",
          }}
        />

        <Box
          sx={{
            background: "#f3f3fc",
            display: "grid",
            placeItems: "center",
          }}
        >
          {loading ? (
            <p>Loading...{progress}%</p>
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
                  <img src={`${imgAsset ? imgAsset : "#"}`} width="100%" />

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

        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 4,
            opacity: `${formLoading ? 0.7 : 1}`,
          }}
        >
          {formLoading ? "Submiting..." : "Submit Question"}
        </Button>
      </Stack>
    </Box>
  );
};

export default AskForm;
