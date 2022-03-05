import { Box, Container } from '@mui/material';
import * as React from 'react';
import { Link } from "react-router-dom";
import KeyStats from "../components/usersAdmin/keyStats";
import UserViewer from '../components/usersAdmin/userViewer';
import { Grid } from '@mui/material';
import { bottomLinkStyle, containerStyle } from '../components/styles';

const UsersAdmin = () => {
  return (
    <Box>
      <Container sx={containerStyle}>
        <Grid container>
          <Grid item xs={6}>
            <KeyStats></KeyStats>
          </Grid>
          <Grid item xs={6}>
            <UserViewer></UserViewer>
          </Grid>
        </Grid>  
      </Container>
      <Link sx={bottomLinkStyle} to="/">Home</Link>
    </Box>
    
  );
}

export default UsersAdmin;