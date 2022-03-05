import { Link } from "react-router-dom";
import Image from "../components/profile/image";
import TextCard from "../components/profile/textCard";
import StatsCard from "../components/profile/stats";
import Profile from "../components/profile/profile";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ButtonStack from "../components/profile/buttonStack";

const exampleUser = {
  images: [
    { img: "/images/profile.png" },
    { img: "/images/profile.png" },
    { img: "/images/profile.png" },
    { img: "/images/profile.png" },
    { img: "/images/profile.png" },
    { img: "/images/profile.png" },
  ],
  prompts: [
    { title: "title1", content: "content1" },
    { title: "title2", content: "content2" },
    { title: "title3", content: "content3" },
  ],
  tags: {
    age: "20",
    gender: "Male",
    height: "222cm",
    location: "Vancouver",
    ethnicity: "Caucasian",
    alcohol: "Yes",
    occupation: "Private Equity",
    school: "Ivey Business School",
  },
};

function ProfileView({user}) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Profile {...exampleUser} />
        {/* <Profile {...user} /> */}
      </Grid>
      <Grid item xs={4}>
        <ButtonStack />
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </Grid>
    </Grid>
  );
}

export default ProfileView;
