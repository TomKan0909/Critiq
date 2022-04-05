import React from "react";
import {
  useScrollTrigger,
  Box,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Fade,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { logout } from "../../apis";

export default function NavBar({ inProp, setInProp }) {
  const navigate = useNavigate();
  const location = useLocation();

  const trigger = useScrollTrigger({
    threshold: 200,
    disableHysteresis: true,
  });

  let appBarStyle = {
    background: trigger ? "black" : "transparent",
    transition: "all .3s ease-in",
  };

  let iconButtonStyle = {
    margin: "20px",
    color: trigger ? "white" : "black",
    borderRadius: "10px",
    fontWeight: "bold",
    float: "right",
    fontSize: "medium",
    transition: "all .3s ease-in",
  };

  let titleStyle = {
    fontFamily: "Nunito",
    color: trigger ? "white" : "black",
    transition: "all .3s ease-in",
  };

  const handleLogout = async () => {
    await logout();
    setInProp(false);
    setTimeout(() => navigate("/login"), 1000);
  };

  const handleHome = () => {
    // Only navigate to home if not already there
    if (location.pathname != "/") {
      setInProp(false);
      if (sessionStorage.getItem("admin")) {
        setTimeout(() => navigate("/admin"), 1000);
      } else {
        setTimeout(() => navigate("/"), 1000);
      }
    }
  };

  const handleProfile = () => {
    // Only navigate to profile if not already there
    if (location.pathname != "/profile") {
      setInProp(false);
      if (sessionStorage.getItem("admin")) {
        setTimeout(() => navigate("/usersAdmin"), 1000);
      } else {
        setTimeout(() => navigate("/profile"), 1000);
      }
    }
  };

  return (
    <Fade in={inProp} timeout={800}>
      <AppBar elevation={trigger ? 10 : 0} sx={appBarStyle}>
        <Toolbar>
          <Typography variant="h4" sx={titleStyle}>
            C R I T I Q
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={handleHome} sx={iconButtonStyle}>
            HOME
          </IconButton>
          <IconButton onClick={handleProfile} sx={iconButtonStyle}>
            MY PROFILE
          </IconButton>
          <IconButton onClick={handleLogout} sx={iconButtonStyle}>
            LOG OUT
          </IconButton>
        </Toolbar>
      </AppBar>
    </Fade>
  );
}
