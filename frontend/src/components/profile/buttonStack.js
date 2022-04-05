import { Stack, Button, Alert, Snackbar, Typography, Box } from "@mui/material";
import React from "react";
import EditProfile from "./editProfile";
import { useNavigate } from "react-router-dom";

const stackButtonStackStyle = {
  align: "center",
  marginTop: "20px",
  borderRadius: "10px",
  display: "grid",
};

export default function ButtonStack({ openEditProfile, setOpenEditProfile, setInProp }) {
  const [open, setOpen] = React.useState(false);
  // const [openEditProfile, setOpenEditProfile] = React.useState(false);
  const handleOpenEditProfile = () => setOpenEditProfile(true);
  const handleCloseEditProfile = () => setOpenEditProfile(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Stack spacing="40px" sx={stackButtonStackStyle} justifyContent="center">
      <Button
        onClick={handleOpenEditProfile}
        variant="contained"
        color="primary"
        size="large"
      >
        Edit Profile
      </Button>
      <EditProfile
        open={openEditProfile}
        handleClose={handleCloseEditProfile}
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => {
          setInProp(false);
          setTimeout( () => navigate("/profile/roastHistory"), 1000);
        }}
      >
        View Roast History
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </Stack>
  );
}
