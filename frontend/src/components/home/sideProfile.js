import React from "react";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Image from "./../profile/image";
import TextCard from "./../profile/textCard";
import StatsCard from "./../profile/stats";

import { StickyProfile } from "./styles";
import { createRoom, getLatestRoom } from "../../apis";

export default function SideProfile({ user, inProp, setInProp }) {
  const navigate = useNavigate();

  const handleGoLive = async () => {
    let room = (await getLatestRoom()).data.room;
    console.log(room);
    if (room === undefined || !room.active) {
      room = (await createRoom(user)).data;
      console.log(room);
      if (room) {
        setInProp(false);
        setTimeout(() => navigate(`/critiqRoom/${room._id}`), 1000);
      } else {
        console.log("error");
      }
    } else if (room !== undefined && room.active) {
      console.log(room);
      setInProp(false);
      setTimeout(() => navigate(`/critiqRoom/${room._id}`), 1000);
    }
  };

  const imageStyle = {
    marginBottom: "-20px",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
  };

  const textCardStyle = {
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
  };

  return (
    <StickyProfile>
      <Image img={user.images[0]} sx={imageStyle} />
      <TextCard
        title={user.occupation}
        content={user.name}
        sx={textCardStyle}
      />
      <Stack spacing="20px" sx={{ marginTop: "40px", marginBottom: "20px" }}>
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={() => {
            setInProp(false);
            setTimeout(() => navigate("/profile"), 1000);
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
