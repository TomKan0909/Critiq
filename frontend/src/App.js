import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./routes/login";
import Profile from "./routes/profile";
import UsersAdmin from "./routes/usersAdmin";
import RoastHistory from "./routes/roastHistory";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./theme";
import { Grid } from "@mui/material";
import Logo from "./components/logo";

import NavDebug from "./components/home/navDebug";
import CritiqRoom from "./components/critiqRoom";
import SideProfile from "./components/home/sideProfile";
import RoastList from "./components/home/roastList";
import exampleUser from "./data/exampleUser";
import TagFilter from "./components/home/tagFilter";
import ProtectedRoute from "./utils/protectedRoute";

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <div className="App">
        <Routes>
          <Route path="login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="profile" element={<Profile/>} />
            <Route path="profile/roastHistory" element={<RoastHistory />} />
            <Route path="/" element={<Home />} />
            <Route path="critiqRoom" element={<CritiqRoom/>} />
          </Route>
          <Route element={<ProtectedRoute isAdmin={true}/>}>
            <Route path="critiqRoomAdmin" element={<CritiqRoom user={exampleUser} isAdmin={true} />} />
            <Route path="usersAdmin" element={<UsersAdmin />} /> 
          </Route>
          <Route path="notavailable" element={<p>Cannot access</p>} /> 
        </Routes>
      </div>
    </ThemeProvider>
  );
}

function Home() {
  const [activeFilters, addActiveFilter] = React.useState([]);

  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12}>
        <NavDebug />
      </Grid>
      <Grid item xs={12}>
        <Logo />
      </Grid>
      <Grid item xs={12}>
        <TagFilter
          activeFilters={activeFilters}
          addActiveFilter={addActiveFilter}
        />
      </Grid>
      <Grid item xs={5}>
        <RoastList activeFilters={activeFilters} />
      </Grid>
      <Grid xs={1} />
      <Grid item xs={2}>
        <SideProfile user={exampleUser} />
      </Grid>
    </Grid>
  );
}

export default App;
