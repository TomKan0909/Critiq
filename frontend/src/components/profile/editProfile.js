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
import React, { useState, useEffect } from "react";
import exampleUser from "../../data/exampleUser";
import { getUserProfile, updateUserProfile } from "../../apis";

const editProfileContext = React.createContext(null);

function ImageComponent() {
  const { images, setImages } = React.useContext(editProfileContext);
  const imageProps = images.map((image, index) => ({
    image: image,
    setImages: setImages,
    index: index,
  }));

  return (
    <div>
      <ImageList
        sx={{ maxWidth: "auto", maxHeight: "auto", margin: "auto" }}
        cols={3}
      >
        {imageProps.map((imageProp) => (
          <ImageListItem>
            <ImageEdit {...imageProp} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

function PromptComponent() {
  const { prompts, setPrompts } = React.useContext(editProfileContext);
  const promptProps = prompts.map((prompt, index) => ({
    promptTitle: prompt.title,
    promptContent: prompt.content,
    setPrompts: setPrompts,
    index: index,
  }));

  return (
    <React.Fragment>
      {promptProps.map((promptProp) => (
        <Prompt {...promptProp} />
      ))}
    </React.Fragment>
  );
}

function Prompt({ promptTitle, promptContent, setPrompts, index }) {
  const setPrompt = (val, isResponse) => {
    setPrompts((previousPrompts) => {
      if (isResponse) {
        return [
          ...previousPrompts.slice(0, index),
          { title: previousPrompts[index].title, content: val },
          ...previousPrompts.slice(index + 1),
        ];
      } else {
        return [
          ...previousPrompts.slice(0, index),
          { title: val, content: previousPrompts[index].content },
          ...previousPrompts.slice(index + 1),
        ];
      }
    });
  };

  const handleChangePrompt = (event) => {
    setPrompt(prompts[event.target.value], false); // need to do this because event.target.value is a number in MUI Textfield select component
  };

  const handleChangeResponse = (event) => {
    setPrompt(event.target.value, true);
  };

  const prompts = [
    "Best travel story",
    "A life goal of mine",
    "I take pride in",
    "Biggest risk I've taken",
  ];

  return (
    <Container size="sm" sx={{ marginY: "10px" }}>
      <form component="form">
        <TextField
          label="Select a Prompt"
          value={prompts.findIndex((e) => e === promptTitle)}
          select
          onChange={handleChangePrompt}
          variant="filled"
          sx={{ display: "grid" }}
        >
          {prompts.map((option, index) => (
            <MenuItem key={index} value={index}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="filled-multiline-static"
          label="Prompt Response"
          onChange={handleChangeResponse}
          multiline
          Prompt
          Response
          rows={5}
          defaultValue={
            promptContent !== "" ? promptContent : "Enter a prompt response"
          }
          variant="filled"
          sx={{ display: "grid" }}
        />
      </form>
    </Container>
  );
}

function InputForm() {
  const { name, job, tags, setTags, setJob, setName } =
    React.useContext(editProfileContext);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleJobChange = (event) => {
    setJob(event.target.value);
  };

  const handleGenderChange = (event) => {
    setTags((previousTags) => ({
      ...previousTags,
      gender: event.target.value,
    }));
  };

  const handleAgeChange = (event) => {
    setTags((previousTags) => ({
      ...previousTags,
      age: event.target.value,
    }));
  };

  const handleHeightChange = (event) => {
    setTags((previousTags) => ({
      ...previousTags,
      height: event.target.value + "cm",
    }));
  };

  const handleLocationChange = (event) => {
    setTags((previousTags) => ({
      ...previousTags,
      location: event.target.value,
    }));
  };

  const handleSchoolChange = (event) => {
    setTags((previousTags) => ({
      ...previousTags,
      school: event.target.value,
    }));
  };

  const handleEthnicityChange = (event) => {
    setTags((previousTags) => ({
      ...previousTags,
      ethnicity: event.target.value,
    }));
  };

  const handleAlcoholChange = (event) => {
    setTags((previousTags) => ({
      ...previousTags,
      alcohol: event.target.value,
    }));
  };

  return (
    <Container size="sm">
      <form component="form">
        <TextField
          value={name}
          label="name"
          sx={{ display: "grid", marginY: "5px" }}
          onChange={handleNameChange}
        />
        <TextField
          value={job}
          label="job"
          sx={{ display: "grid", marginY: "5px" }}
          onChange={handleJobChange}
        />
        <TextField
          label="Gender"
          value={tags.gender}
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
        <TextField
          value={tags.age}
          label="Age"
          sx={{ display: "grid", marginY: "5px" }}
          onChange={handleAgeChange}
        />
        <TextField
          label="Height"
          value={tags.height.replace("cm", "")}
          onChange={handleHeightChange}
          sx={{ display: "grid", marginY: "5px" }}
          InputProps={{
            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
          }}
        />
        <TextField
          label="Location"
          sx={{ display: "grid", marginY: "5px" }}
          value={tags.location}
          onChange={handleLocationChange}
        />
        <TextField
          label="School"
          sx={{ display: "grid", marginY: "5px" }}
          value={tags.school}
          onChange={handleSchoolChange}
        />
        <TextField
          label="Ethnicity"
          sx={{ display: "grid", marginY: "5px" }}
          value={tags.ethnicity}
          onChange={handleEthnicityChange}
        />
        <TextField
          label="Alcohol"
          value={tags.alcohol}
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
  const [name, setName] = React.useState("");
  const [job, setJob] = React.useState("");
  const [images, setImages] = React.useState();
  const [prompts, setPrompts] = React.useState();
  const [tags, setTags] = React.useState();

  function setProps(user) {
    setName(user.name);
    setJob(user.job);
    setImages((_i) => user.images); // _i means ignore
    setPrompts((_i) => user.prompts);
    setTags((_i) => user.tags);
  }

  useEffect(() => {
    async function getUser() {
      const res = await getUserProfile();
      setProps(res);
    }
    if (open) {
      getUser().catch(console.error);
    }
  }, [open]);

  if (!images || !prompts || !tags) {
    return <></>;
  }

  console.log(images);
  async function handleSave() {
    await updateUserProfile(name, job, images, prompts, tags);
  }
  return (
    <editProfileContext.Provider
      value={{
        name,
        job,
        images,
        prompts,
        tags,
        setName,
        setJob,
        setImages,
        setPrompts,
        setTags,
      }}
    >
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
          <PromptComponent />
          <InputForm />
          <Button // When onclick, it will poll all the data that has been filled out on the form and send a POST request to the server to update user profile
            type="submit"
            color="success"
            variant="contained"
            onClick={handleSave}
            sx={{ margin: "auto", display: "block", marginTop: "30px" }}
          >
            Save
          </Button>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            onClick={handleClose}
            sx={{
              margin: "auto",
              display: "block",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </editProfileContext.Provider>
  );
}
