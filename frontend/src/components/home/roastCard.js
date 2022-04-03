import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Image from "../profile/image";
import TextCard from "../profile/textCard";
import { RoastCardItem } from "./styles";

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

export default function RoastCard({ user }) {
  const handleClick = () => {
    if (sessionStorage.getItem("user")) {
      navigate("/critiqRoom", { state: { user: user } });
    } else if (sessionStorage.getItem("admin")) {
      navigate("/critiqRoomAdmin", { state: { user: user } });
    }
  };

  const navigate = useNavigate();
  return (
    <RoastCardItem>
      <Image img={user.images[0].img} sx={imageStyle}/>
      <TextCard title={user.job} content={user.name} sx={textCardStyle}/>
      <Button variant="contained" color="primary" onClick={handleClick} sx={buttonStyle}>
        Join
      </Button>
    </RoastCardItem>
  );
}

