import {
  Modal,
  ImageList,
  ImageListItem,
  Box,
  TextField,
  MenuItem,
  Container,
  InputAdornment,
  Button,
} from "@mui/material";
import { ImageEdit } from "./image";
import React from "react";

function ImageComponent() {
  return (
    <div>
      <ImageList
        sx={{ maxWidth: "auto", maxHeight: "auto", margin: "auto" }}
        cols={3}
      >
        <ImageListItem>
          <ImageEdit />
        </ImageListItem>
        <ImageListItem>
          <ImageEdit />
        </ImageListItem>
        <ImageListItem>
          <ImageEdit />
        </ImageListItem>
        <ImageListItem>
          <ImageEdit />
        </ImageListItem>
        <ImageListItem>
          <ImageEdit />
        </ImageListItem>
        <ImageListItem>
          <ImageEdit />
        </ImageListItem>
      </ImageList>
    </div>
  );
}

function Prompt() {
  const [prompt, setPrompt] = React.useState("");

  const handleChange = (event) => {
    setPrompt(event.target.value);
  };

  const prompts = [
    { value: 1, prompt: "Best travel story" },
    { value: 2, prompt: "A life goal of mine" },
    { value: 3, prompt: "I take pride in" },
    { value: 4, prompt: "Biggest risk I've taken" },
  ];

  return (
    <Container size="sm" sx={{ marginY: "10px" }}>
      <form component="form">
        <TextField
          label="Select Prompt"
          value={prompt}
          select
          onChange={handleChange}
          variant="filled"
          sx={{ display: "grid" }}
        >
          {prompts.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.prompt}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="filled-multiline-static"
          label="Prompt Response"
          multiline
          Prompt
          Response
          rows={5}
          defaultValue="Enter your Prompt Response"
          variant="filled"
          sx={{ display: "grid" }}
        />
      </form>
    </Container>
  );
}

function InputForm() {
  const [gender, setGender] = React.useState("");
  const [alcohol, setAlcohol] = React.useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleAlcoholChange = (event) => {
    setAlcohol(event.target.value);
  };

  return (
    <Container size="sm">
      <form component="form">
        <TextField
          label="Gender"
          value={gender}
          onChange={handleGenderChange}
          select
          sx={{ display: "grid", marginY: "5px" }}
        >
          {["Male", "Female", "Other"].map((gender, index) => (
            <MenuItem key={index} value={gender}>
              {gender}
            </MenuItem>
          ))}
        </TextField>
        <TextField label="Age" sx={{ display: "grid", marginY: "5px" }} />
        <TextField
          label="Height"
          sx={{ display: "grid", marginY: "5px" }}
          InputProps={{
            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
          }}
        />
        <TextField label="Location" sx={{ display: "grid", marginY: "5px" }} />
        <TextField label="Ethnicity" sx={{ display: "grid", marginY: "5px" }} />
        <TextField
          label="Alcohol"
          value={alcohol}
          select
          onChange={handleAlcoholChange}
          sx={{ display: "grid", marginY: "5px" }}
        >
          {["Yes", "No", "Sometimes"].map((pref, index) => (
            <MenuItem key={index} value={pref}>
              {pref}
            </MenuItem>
          ))}
        </TextField>
      </form>
    </Container>
  );
}

const boxEditProfileStyle = {
  border: "2px solid black",
  overflowY: "scroll",
  alignItems: "center",
  margin: "auto",
  display: "flex-block",
  height: "90vh",
  width: "50%",
};

export default function EditProfile({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      BackdropProps={{
        style: { backgroundColor: "rgba(255, 255, 255, 0.97)" },
      }}
      sx={{ paddingY: "2%" }}
    >
      <Box marginTop="5%" sx={boxEditProfileStyle}>
        <ImageComponent />
        <Prompt />
        <Prompt />
        <Prompt />
        <InputForm />
        <Button
          type="submit"
          color="success"
          variant="contained"
          sx={{ margin: "auto", display: "block" }}
        >
          Save
        </Button>
        <Button
          type="submit"
          color="info"
          variant="contained"
          onClick={handleClose}
          sx={{ margin: "auto", display: "block" }}
        >
          Cancel
        </Button>
      </Box>
    </Modal>
  );
}
