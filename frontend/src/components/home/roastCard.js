import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Image from "../profile/image";
import TextCard from "../profile/textCard";
import { RoastCardItem } from "./styles";
import { getLatestRoomByUserId } from "../../apis";

const imageStyle = {
  marginBottom: "-20px",
  borderBottomLeftRadius: "0px",
  borderBottomRightRadius: "0px",
}

const textCardStyle = {
  borderTopLeftRadius: "0px",
  borderTopRightRadius: "0px"
}

const buttonStyle = {
  width: "150px",
  marginTop: "-60px"
}

export default function RoastCard({ room }) {
  const handleClick = async() => {
    const latestRoom = (await getLatestRoomByUserId(room.creator._id))
    navigate(`/critiqRoom/${room._id}`)  
  };


  const navigate = useNavigate();

  return (
    <RoastCardItem>
      <Image img={room.creator.images[0]} sx={imageStyle}/>
      <TextCard title={room.creator.job} content={room.creator.name} sx={textCardStyle}/>
      <Button variant="contained" color="primary" onClick={handleClick} sx={buttonStyle}>
        Join
      </Button>
    </RoastCardItem>
  );
}

