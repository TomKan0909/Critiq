import { Box, Button } from "@mui/material";
import React from "react";
import Profile from './profile';

const banButtonStyle = {
  minHeight: 80,
  fontSize: '1.5em',
  marginTop: '-5.8%',
  left: '50%',
  width: '80%',
  transform: 'translate(-50%, -50%)'
}

export default function AdminProfile({name, images, prompts, tags }) {
  return (
    <Box>
      <Profile {...{name, images, prompts, tags}}/>
      <Button fullWidth 
        variant="contained"
        sx={banButtonStyle}>
        Ban User
      </Button>
    </Box>
  );
}
