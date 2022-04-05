import { Box, Container } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import KeyStats from "../components/usersAdmin/keyStats";
import UserViewer from "../components/usersAdmin/userViewer";
import NavBar from "../components/home/navBar";
import { Grid, Fade, Grow } from "@mui/material";
import { bottomLinkStyle, containerStyle } from "../components/styles";

const UsersAdmin = () => {
  const [inProp, setInProp] = React.useState(true);

  return (
    <Box>
      <NavBar inProp={inProp} setInProp={setInProp} />
      <Container sx={containerStyle}>
        <Grid container>
          <Grid item xs={6}>
            <KeyStats inProp={inProp}></KeyStats>
          </Grid>
          <Grid item xs={6}>
            <UserViewer inProp={inProp}></UserViewer>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default UsersAdmin;
