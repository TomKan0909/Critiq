// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./routes/login";
import Profile from "./routes/profile";
import UsersAdmin from "./routes/usersAdmin";
import RoastHistory from "./routes/roastHistory";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./theme";
import { Grid, Box } from "@mui/material";
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
            <Route path="critiqRoom" element={<CritiqRoom />} />
          </Route>
          <Route element={<ProtectedRoute isAdmin={true} />}>
            <Route
              path="critiqRoomAdmin"
              element={<CritiqRoom user={exampleUser} isAdmin={true} />}
            />
            <Route path="usersAdmin" element={<UsersAdmin />} />
            <Route
              path="admin"
              element={<HomeAdmin user={adminUser} isAdmin={true} />}
            />
          </Route>
          <Route path="notavailable" element={<p>Cannot access</p>} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

function Home() {
  const [activeFilters, setActiveFilter] = React.useState([]);

  let user = sessionStorage.getItem("user");
  user = JSON.parse(user);

  return (
    <Box>
      <NavBar />
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <Logo />
        </Grid>
        <Grid item xs={12}>
          <TagFilter
            activeFilters={activeFilters}
            setActiveFilter={setActiveFilter}
          />
        </Grid>
        <Grid item xs={5}>
          <RoastList activeFilters={activeFilters} />
        </Grid>
        <Grid xs={1} />
        <Grid item xs={2}>
          <SideProfile user={user} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
