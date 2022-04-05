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
import { grey } from "@mui/material/colors";

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
    border: "solid " + grey[400],
    borderRadius: "10px",
    backgroundColor: grey[200],
    marginBottom: "2%",
    maxHeight: "800px",
    marginTop: "100px",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "0.4em",
      color: "black",
    },
    "::-webkit-scrollbar-thumb:vertical": {
      backgroundColor: grey[600],
      borderRadius: "20px",
    },
    "::-webkit-scrollbar-track": {
      backgroundColor: grey[400],
      borderRadius: "20px",
    },
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
      <Typography sx={titleStyle} variant="h3" gutterBottom>
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
