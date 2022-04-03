import React from "react";
import {
  useScrollTrigger,
  Box,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { logout } from "../../apis";

export default function NavBar() {
  const navigate = useNavigate();

  const trigger = useScrollTrigger({
    threshold: 200,
    disableHysteresis: true,
  });

  let appBarStyle = {
    background: trigger ? "black" : "transparent",
    transition: "all .4s ease-in",
  };

  let iconButtonStyle = {
    margin: "20px",
    color: trigger ? "white" : "black",
    borderRadius: "10px",
    fontWeight: "bold",
    float: "right",
    fontSize: "medium",
    transition: "all .4s ease-in",
  };

  let titleStyle = { fontFamily: "Nunito", color: trigger ? "white" : "black" };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <AppBar elevation={trigger ? 4 : 0} sx={appBarStyle}>
      <Toolbar>
        <Typography variant="h4" sx={titleStyle}>
          C R I T I Q
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          onClick={() => {
            navigate("/");
          }}
          sx={iconButtonStyle}
        >
          HOME
        </IconButton>
        <IconButton
          onClick={() => {
            navigate("/profile");
          }}
          sx={iconButtonStyle}
        >
          MY PROFILE
        </IconButton>
        <IconButton onClick={handleLogout} sx={iconButtonStyle}>
          LOG OUT
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
