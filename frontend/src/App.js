// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./routes/login";
import Profile from "./routes/profile";
import UsersAdmin from "./routes/usersAdmin";
import RoastHistory from "./routes/roastHistory";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./theme";
import { Grid, Box, Fade, Grow, Slide } from "@mui/material";
import Logo from "./components/logo";

import NavBar from "./components/home/navBar";
import HomeAdmin from "./routes/admin";
import CritiqRoom from "./components/critiqRoom";
import SideProfile from "./components/home/sideProfile";
import RoastList from "./components/home/roastList";
import exampleUser from "./data/exampleUser";
import adminUser from "./data/adminUser";
import TagFilter from "./components/home/tagFilter";
import ProtectedRoute from "./utils/protectedRoute";
import { getAllRooms, getCurrentUser } from "./apis";
const divStyle = { textAlign: "center" };

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <div className="App" style={divStyle}>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="profile" element={<Profile />} />
            <Route path="profile/roastHistory" element={<RoastHistory />} />
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<ProtectedRoute isAdmin={true} />}>
            <Route path="usersAdmin" element={<UsersAdmin />} />
            <Route
              path="admin"
              element={<HomeAdmin user={adminUser} isAdmin={true} />}
            />
          </Route>
          <Route path="critiqRoom">
            <Route path=":id" element={<CritiqRoom />} />
          </Route>
          <Route path="notavailable" element={<p>Cannot access</p>} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

function Home() {

  const [activeFilters, setActiveFilter] = React.useState([]);
  const [user, setUser] = useState();
  const [rooms, setRooms] = useState([]);
  const [inProp, setInProp] = React.useState(true);

  useEffect(() => {
    const getAndSetUser = async () => {
      try {
        const currentUser = (await getCurrentUser()).data;
        setUser(currentUser);
        sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
      } catch (error) {
        console.log(error);
      }
    };
    getAndSetUser();
  }, []);

  useEffect(() => {
    const getAndSetRooms = async () => {
      try {
        const rooms = await getAllRooms();
        setRooms(rooms);
      } catch (error) {
        console.log(error);
      }
    };
    getAndSetRooms();
  }, [activeFilters]);

  if (!user) {
    return "";
  }

  return (
    <Box>
      <NavBar inProp={inProp} setInProp={setInProp}/>
      <Grid container justifyContent="center" spacing={2} columns={24}>
        <Fade in={inProp} timeout={800}>
          <Grid item xs={24}>
            <Logo />
          </Grid>
        </Fade>
        <Grow in={inProp} timeout={500}>
          <Grid item xs={24}>
            <TagFilter
              activeFilters={activeFilters}
              setActiveFilter={setActiveFilter}
            />
          </Grid>
        </Grow>
        <Slide in={inProp} direction="up" timeout={300}>
          <Grid item xs={13}>
            <RoastList
              activeFilters={activeFilters}
              rooms={rooms}
              inProp={inProp}
              setInProp={setInProp}
            />
          </Grid>
        </Slide>
        <Grid item xs={2} />
        <Slide in={inProp} direction="up" timeout={300}>
          <Grid item xs={4}>
            <SideProfile user={user} inProp={inProp} setInProp={setInProp} />
          </Grid>
        </Slide>
      </Grid>
    </Box>
  );
}

export default App;
