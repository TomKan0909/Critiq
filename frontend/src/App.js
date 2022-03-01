import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from "./routes/login";
import Profile from "./routes/profile";
import RoastRoom from "./routes/roastRoom";
import UsersAdmin from "./routes/usersAdmin";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./theme";
import { Grid, Button, Stack } from "@mui/material";

import NavDebug from "./components/home/navDebug";
import SideProfile from "./components/home/sideProfile";
import RoastList from "./components/home/roastList";

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="roastRoom" element={<RoastRoom />} />
          <Route path="usersAdmin" element={<UsersAdmin />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

function Home() {
  const navigate = useNavigate();

  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12} sx={{ margin: "50px" }}>
        <NavDebug />
      </Grid>
      <Grid item xs={6}>
        <RoastList />
      </Grid>
      <Grid item xs={2}>
        <SideProfile />
      </Grid>
    </Grid>
  );
}

export default App;
