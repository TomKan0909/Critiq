import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Image from "../profile/image";
import TextCard from "../profile/textCard";
import { RoastCardItem } from "./styles";

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
      <Image img={user.images[0].img} />
      <TextCard title={user.job} content={user.name} />
      <Button variant="contained" color="primary" onClick={handleClick}>
        Join
      </Button>
    </RoastCardItem>
  );
}
