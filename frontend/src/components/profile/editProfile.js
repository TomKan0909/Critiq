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
  Button,
  IconButton,
  ImageListItemBar,
  Grid
} from "@mui/material";
import {AiFillCloseCircle} from 'react-icons/ai'
import Image, {ImageEdit} from "./image";
import React from "react";
import { useTheme } from '@mui/material/styles';



function ImageComponent() {
  return (
    <div>
      <ImageList sx={{ maxWidth: 'auto', maxHeight: 'auto', margin: 'auto' }} cols={3}>
        <ImageListItem>
            <ImageEdit/>
           {/* <ImageListItemBar
              sx={{
                backgroundColor:
                  'transparent',
                borderRadius: '10px'  
              }}
              position="top"
              actionIcon={
                <IconButton
                  onClick={handleCloseClick}
                  sx={{ color: theme.palette.error.main}}
                >
                  <AiFillCloseCircle />
                </IconButton>
              }
              actionPosition="right"
            /> */}
        </ImageListItem>
        <ImageListItem>
        <ImageEdit/>
        </ImageListItem>
        <ImageListItem>
        <ImageEdit/>
        </ImageListItem>
        <ImageListItem>
        <ImageEdit/>
        </ImageListItem>
        <ImageListItem>
        <ImageEdit/>
        </ImageListItem>
        <ImageListItem>
        <ImageEdit/>
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
    <Container size="sm" sx= {{marginY: '10px'}}>
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
          sx={{ display: "grid", marginY: '5px' }}
        >
          {["Male", "Female", "Other"].map((gender, index) => (
            <MenuItem key={index} value={gender}>
              {gender}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Age"
          sx={{ display: "grid", marginY: '5px' }}
        />
        <TextField
          label="Height"
          sx={{ display: "grid", marginY: '5px' }}
          InputProps={{
            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
          }}
        />
        <TextField
          label="Location"
          sx={{ display: "grid", marginY: '5px' }}
        />
        <TextField
          label="Ethnicity"
          sx={{ display: "grid", marginY: '5px' }}
        />
        <TextField
          label="Alcohol"
          value={alcohol}
          select
          onChange={handleAlcoholChange}
          sx={{ display: "grid", marginY: '5px' }}
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
      sx={{paddingY: '2%'}}
    >
      <Box
        // marginLeft='10%'
        marginTop='5%'
      display="flex-block"
    //   flexDirection="column"
      // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
      height="90vh" // fixed the height
      width='50%'
      sx={{
          border: "2px solid black",
        // borderRadius: '10px',
        overflowY: "scroll", // added scroll
        alignItems: 'center',
        margin:'auto'
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
