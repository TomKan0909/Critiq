import React from "react";
import Grid from "@mui/material/Grid";
import { Container, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Image from "./../profile/image";
import TextCard from "./../profile/textCard";
import StatsCard from "./../profile/stats";

import { StickyProfile } from "./styles";
import exampleUser from "../../data/exampleUser";

export default function SideProfile({ user }) {
  const navigate = useNavigate();
  return (
    <StickyProfile>
      <Image img={user.images[0].img} />
      <TextCard title={user.job} content={user.name} />
      <StatsCard
        age={user.tags.age}
        gender={user.tags.gender}
        height={user.tags.height}
        location={user.tags.location}
        ethnicity={user.tags.ethnicity}
        alcohol={user.tags.alcohol}
        occupation={user.tags.occupation}
        school={user.tags.school}
      />
      <Stack spacing="40px" sx={{ marginTop: "60px", marginBottom: "20px" }}>
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={() => {
            navigate("/profile", {state: {user : exampleUser}});
          }}
        >
          My Profile
        </Button>
        <Button
          variant="contained"
          color="highlight"
          size="large"
          onClick={() => {
            navigate("/critiqRoom", {state: {user : exampleUser}});
          }}
        >
          Go Live
        </Button>
      </Stack>
    </StickyProfile>
  );
}
