import * as React from "react";
import TextField from "@mui/material/TextField";
import { Autocomplete, Container, Typography } from "@mui/material";
import { titleStyle } from "../../styles";
import usernames from "../../../data/usernames";
import Modal from "@mui/material/Modal";
import Profile from "../../profile/profile";
import users from "../../../data/users";
import AdminProfile from "../../profile/adminProfile";
import { getAllUsers } from "../../../apis";

// https://mui.com/components/text-fields/
const UserViewer = () => {
  const [ID, setID] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [compUsers, setUsers] = React.useState({});

  const handleOpen = (event, value) => {
    if (!value) {
      setID("");
    } else {
      setID(value.id);
    }
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
    let options = [];

    for (const key in compUsers) {
      options.push({ label: compUsers[key].name, id: key });
    }

    return options;
  };

  React.useEffect(() => {
    async function getUsers() {
      const res = await getAllUsers();
      setUsers(res);
    }
    getUsers();
  }, [open]);

  // let profile;

  // if (name in compUsers) {
  //   profile = (
  //     <Modal open={open} onClose={handleClose}>
  //       <Container sx={modalStyle}>
  //         <AdminProfile {...compUsers[name]} />
  //       </Container>
  //     </Modal>
  //   );
  // }

  // https://mui.com/components/autocomplete/
  return (
    <Container component="form">
      <Typography sx={titleStyle} variant="h2" gutterBottom>
        Search for a User
      </Typography>
      <Autocomplete
        options={getUsernames()}
        getOptionLabel={(option) => option.label}
        fullWidth
        sx={formTheme}
        onChange={handleOpen}
        renderInput={(params) => <TextField {...params} label="Users" />}
      />
      {ID && (
        <Modal open={open} onClose={handleClose}>
          <Container sx={modalStyle}>
            <AdminProfile {...{ ID: ID, ...compUsers[ID] }} />
          </Container>
        </Modal>
      )}
    </Container>
  );
};

export default UserViewer;
