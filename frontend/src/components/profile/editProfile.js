import {
  Modal,
  Stack,
  ImageList,
  ImageListItem,
  Box,
  TextField,
  MenuItem,
  Container,
  Select,
  InputAdornment,
  InputLabel,
  Button
} from "@mui/material";
import Image from "./image";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ImageComponent() {
  return (
    <ImageList cols={3}>
      <ImageListItem>
        <Image />
      </ImageListItem>
      <ImageListItem>
        <Image />
      </ImageListItem>
      <ImageListItem>
        <Image />
      </ImageListItem>
      <ImageListItem>
        <Image />
      </ImageListItem>
      <ImageListItem>
        <Image />
      </ImageListItem>
      <ImageListItem>
        <Image />
      </ImageListItem>
    </ImageList>
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
    <Container size="sm">
      <form component="form">
        <TextField
          label="Select Prompt"
          value={prompt}
          select
          onChange={handleChange}
          variant="filled"
          sx={{ display: "grid"}}
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
          sx={{ display: "grid", margin: "auto" }}
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
          sx={{ display: "grid" }}
        >
          {["Male", "Female", "Other"].map((gender, index) => (
            <MenuItem key={index} value={gender}>
              {gender}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Age"
          sx={{ display: "grid", margin: "auto" }}
        />
        <TextField
          label="Height"
          sx={{ display: "grid", margin: "auto" }}
          InputProps={{
            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
          }}
        />
        <TextField
          label="Location"
          sx={{ display: "grid", margin: "auto" }}
        />
        <TextField
          label="Ethnicity"
          sx={{ display: "grid", margin: "auto" }}
        />
        <TextField
          label="Alcohol"
          value={alcohol}
          select
          onChange={handleAlcoholChange}
          sx={{ display: "grid", margin: "auto" }}
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

// TO IMPLEMENT
// Image List
// Cards that allow to edit prompts - wrap previously made cards into modal when clicked should open up input form
// Form to enter Age (Enter a number), Gender (Dropdown M/F/T), Height (string input ()),
// Location (string input), Ethnicity (string input), Alcohol preference (Dropdown Yes/no)


export default function EditProfile({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      BackdropProps={{ style: { backgroundColor: "rgba(255, 255, 255, 0.97)" } }}
    >
      <Box
        // marginLeft='10%'
        marginY='6px'
      display="block"
    //   flexDirection="column"
      // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
      height="90vh" // fixed the height
      sx={{
        //   border: "2px solid black",
        // borderRadius: '10px',
        overflowY: "scroll", // added scroll
        alignItems: 'center',
    }}>
        <ImageComponent />
        <Prompt />
        <Prompt />
        <Prompt />
        <InputForm />
        <Button
          type="submit" 
          color="success" 
          variant="contained"
          sx={{margin:'auto', display:'block'}}>
          Save
        </Button>
        <Button
          type="submit" 
          color="info" 
          variant="contained"
          onClick={handleClose}
          sx={{margin:'auto', display:'block'}}>
          Cancel
        </Button>
      </Box>
    </Modal>
  );
}
