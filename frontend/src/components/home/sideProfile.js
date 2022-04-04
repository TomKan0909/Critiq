import React from "react";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Image from "./../profile/image";
import TextCard from "./../profile/textCard";
import StatsCard from "./../profile/stats";

import { StickyProfile } from "./styles";
import { createRoom, getLatestRoom } from "../../apis";

export default function SideProfile({ user }) {
  const navigate = useNavigate();

  const handleGoLive = async () => {
    let room = (await getLatestRoom()).data.room
    console.log(room)
    if (room === undefined || !room.active) {
      room = (await createRoom()).data
      console.log(room)
      if (room) {
        navigate(`/critiqRoom/${room._id}`)  
      } else {
        console.log('error')
      }
    } else if (room !== undefined && room.active) {
        console.log(room)
        navigate(`/critiqRoom/${room._id}`)  
    }
  }
  
  console.log(user)


  return (
    <StickyProfile>
      <Image img={user.images[0]} />
      <TextCard title={user.job} content={user.name} />
      <StatsCard
        age={user.age}
        gender={user.gender}
        height={user.height}
        location={user.location}
        ethnicity={user.ethnicity}
        alcohol={user.alcohol}
        occupation={user.occupation}
        school={user.school}
      />
      <Stack spacing="20px" sx={{ marginTop: "40px", marginBottom: "20px" }}>
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
