import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Profile from './routes/profile';
import RoastRoom from './routes/roastRoom';
import UsersAdmin from './routes/usersAdmin';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { themeOptions } from './theme';

function App() {
  return (
  <ThemeProvider theme={themeOptions}>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="roastRoom" element={<RoastRoom />} />
        <Route path="usersAdmin" element={<UsersAdmin />} />
      </Routes>
    </div>
   </ThemeProvider>
  );
}

function Home() {
  return (
    <>
      <main>
        <p>
          NYU GIRLS ROAST TECH GUYS 
        </p>
      </main>
      <nav>
        <Link className="navBarLink" to="/profile">profile</Link>
        <Link className="navBarLink" to="/roastRoom">roastRoom</Link>
        <Link className="navBarLink" to="/usersAdmin">usersAdmin</Link>
      </nav>
    </>
  );
}


export default App;
