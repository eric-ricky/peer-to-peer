import React, { useState } from "react";
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
} from "@mui/material";

const AskForm = () => {
  const [age, setAge] = useState(0);
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <Box>
      <Stack gap={3}>
        <FormControl variant="standard" sx={{ minWidth: 160 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Select Topic
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
          >
            <MenuItem value={10}>Mathematics</MenuItem>
            <MenuItem value={20}>Finance</MenuItem>
            <MenuItem value={30}>Programming</MenuItem>
            <MenuItem value={40}>Medicine</MenuItem>
            <MenuItem value={40}>Other</MenuItem>
          </Select>
        </FormControl>

        <TextField
          id="standard-basic"
          label="Question title"
          variant="standard"
          fullWidth
        />

        <TextField
          multiline
          minRows={5}
          label="Your question"
          variant="standard"
        />

        <FormControl
          //   variant="standard"
          //   component="label"
          //   htmlFor="contained-button-file"
          sx={{
            border: "1px dotted #123456",
            p: 4,
            mt: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            position: "relative",
          }}
        >
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            // sx={{ display: "none" }}
          />
          <span>(optional)</span>
          <Typography
            component="span"
            sx={{
              position: "absolute",
              bottom: "-25%",
              left: 0,
              fontSize: "14px",
            }}
          >
            Supported file types: jpg, png, pdf, doc, xls
          </Typography>
        </FormControl>

        <Button
          variant="contained"
          sx={{
            mt: 4,
          }}
        >
          Submit Question
        </Button>
      </Stack>
    </Box>
  );
};

export default AskForm;
