import React from "react";
import { Box, TableRow, Button, Typography, Grid, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Image from "../profile/image";
import StatsCard from "../profile/stats";
import TextCard from "../profile/textCard";
import { RoastCardItem } from "./styles";

export default function RoastCard({ user }) {
  const navigate = useNavigate();
  return (
    <RoastCardItem>
      {/* TODO: use props for image and cards */}
      <Image img={user.images[0].img} />
      <TextCard title={user.job} content={user.name} />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          navigate("/critiqRoom", { state: { user: user } });
        }}
      >
        Join
      </Button>
    </RoastCardItem>
  );
}
