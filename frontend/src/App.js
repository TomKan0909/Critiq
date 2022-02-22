import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Profile from './routes/profile';
import RoastRoom from './routes/roastRoom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="roastRoom" element={<RoastRoom />} />
      </Routes>
    </div>
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
        <Link to="/profile">profile</Link>
        <Link to="/roastRoom">roastRoom</Link>
      </nav>
    </>
  );
}


export default App;
