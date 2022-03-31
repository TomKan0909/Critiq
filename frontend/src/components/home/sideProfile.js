import React from "react";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Image from "./../profile/image";
import TextCard from "./../profile/textCard";
import StatsCard from "./../profile/stats";

import { StickyProfile } from "./styles";
import exampleUser from "../../data/exampleUser";
import { createRoom } from "../../apis";

export default function SideProfile({ user }) {
  const navigate = useNavigate();

  const handleGoLive = async () => {
    const res = await createRoom()
    navigate("/critiqRoom", { state: { room: res._id} });
  }


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
            navigate("/profile");
          }}
        >
          My Profile
        </Button>
        <Button
          variant="contained"
          color="highlight"
          size="large"
          onClick={handleGoLive}
        >
          Go Live
        </Button>
      </Stack>
    </StickyProfile>
  );
}
