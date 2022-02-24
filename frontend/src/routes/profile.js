import { Link } from "react-router-dom";
import Image from '../components/profile/image';
import TextCard from "../components/profile/textCard";
import StatsCard from '../components/profile/stats';

const Profile = () => {
    return (
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        <main>
          <Image/>
          <TextCard/>
          <StatsCard/>
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </div>
    );
}

export default Profile;