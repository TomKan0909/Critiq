import * as React from "react";
import TextField from "@mui/material/TextField";
import { Autocomplete, Container, Typography } from "@mui/material";
import { titleStyle } from "../../styles";
import usernames from "../../../data/usernames";
import Modal from "@mui/material/Modal";
import Profile from "../../profile/profile";
import users from "../../../data/users";
import AdminProfile from "../../profile/adminProfile";

// https://mui.com/components/text-fields/
const UserViewer = () => {
  const [name, setName] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleOpen = (event) => {
    setName(event.target.innerText);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const formTheme = {
    marginTop: "3.2em",
    marginBottom: "2em",
  };

  // https://stackoverflow.com/a/67335455
  const modalStyle = {
    bgcolor: "background.paper",
    border: "2px solid #000",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const getUsernames = () => {
    // server call
    return usernames;
  };

  const getUsers = () => {
    // server call
    return users;
  };

  let profile;

  if (name in getUsers()) {
    profile = (
      <Modal open={open} onClose={handleClose}>
        <Container sx={modalStyle}>
          <AdminProfile {...getUsers()[name]} />
        </Container>
      </Modal>
    );
  }

  // https://mui.com/components/autocomplete/
  return (
    <Container component="form">
      <Typography sx={titleStyle} variant="h2" gutterBottom>
        Search for a User
      </Typography>
      <Autocomplete
        options={getUsernames().sort()}
        fullWidth
        sx={formTheme}
        onChange={handleOpen}
        renderInput={(params) => <TextField {...params} label="Users" />}
      />
      {profile}
    </Container>
  );
};

export default UserViewer;
