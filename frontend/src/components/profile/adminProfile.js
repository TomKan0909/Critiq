import { Box, Button, Snackbar, Alert } from "@mui/material";
import React from "react";
import { deleteUserByID } from "../../apis";
import Profile from "./profile";
import { grey } from "@mui/material/colors";

const banButtonStyle = {
  minHeight: 80,
  fontSize: "1.5em",
  marginTop: "-5.8%",
  left: "50%",
  width: "80%",
  transform: "translate(-50%, -50%)",
};

export default function AdminProfile({ ID, name, images, prompts, tags }) {
  const [open, setOpen] = React.useState(false);
  const [userID, setUserID] = React.useState("");



  const handleButtonOnClick = async () => {
    const res = await deleteUserByID(ID);
    setUserID(res.data._id);
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
      <Profile {...{ name, images, prompts, tags }} />
      <Button
        fullWidth
        variant="contained"
        sx={banButtonStyle}
        onClick={handleButtonOnClick}
      >
        Ban User
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          User {userID} successfully deleted
        </Alert>
      </Snackbar>
    </Box>
  );
}
