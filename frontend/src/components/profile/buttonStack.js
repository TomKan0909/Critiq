import { Stack, Button, Alert, Snackbar, Typography, Box } from "@mui/material";
import React from "react";
import EditProfile from "./editProfile";
import { useNavigate } from "react-router-dom";

const stackButtonStackStyle = {
  alignItems: "center",
  marginTop: "30px",
  border: "2px solid black",
  borderRadius: "10px",
  padding: "2%",
  marginRight: "10%",
  display: "grid",
};

export default function ButtonStack() {
  const [open, setOpen] = React.useState(false);
  const [openEditProfile, setOpenEditProfile] = React.useState(false);
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
    <Box>
      <Stack spacing="40px" sx={stackButtonStackStyle}>
        <Typography variant="h3">Actions</Typography>
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
          onClick={handleClick}
        >
          Go Live
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => {
            navigate("/profile/roastHistory");
          }}
        >
          View Roast History
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            This is a success message!
          </Alert>
        </Snackbar>
      </Stack>
    </Box>
  );
}
