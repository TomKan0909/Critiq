import { Box, Button, Snackbar, Alert, Grid, Slide } from "@mui/material";
import React from "react";
import { deleteUserByID } from "../../apis";
import Profile from "./profile";
import { grey } from "@mui/material/colors";
import Image from "../profile/image";
import TextCard from "../profile/textCard";

const banButtonStyle = {
  minHeight: 80,
  fontSize: "1.5em",
  marginTop: "-5.8%",
  left: "50%",
  width: "80%",
  transform: "translate(-50%, -50%)",
  marginTop: "100px",
};

export default function AdminProfile({
  ID,
  name,
  images,
  prompts,
  tags,
  occupation,
  inProp,
}) {
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

  const profileStyle = {
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

  const imageStyle = {
    marginBottom: "-20px",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
  };

  const textCardStyle = {
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
  };

  return (
    <Box>
      <Grid container spacing={2} sx={{ marginTop: "50px" }}>
        <Slide in={inProp} timeout={300} direction="up">
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={4} justifyContent="center">
                <Grid container justifyContent="center">
                  <Grid item xs={12}>
                    <Image img={images[0]} sx={imageStyle} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextCard
                      title={occupation}
                      content={name}
                      sx={textCardStyle}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={8}>
                <Profile {...{ name, images, prompts, tags }} />
              </Grid>
            </Grid>
          </Grid>
        </Slide>
      </Grid>
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
