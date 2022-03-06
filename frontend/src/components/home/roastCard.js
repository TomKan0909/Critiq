import React from "react";
import { Box, TableRow, Button, Typography, Grid, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Image from "../profile/image";
import StatsCard from "../profile/stats";
import TextCard from "../profile/textCard";
import { RoastCardItem } from "./styles";

export default function RoastCard(props) {
  const [displayName, setDisplayName] = React.useState(props.name);

  const navigate = useNavigate();
  return (
      <RoastCardItem alignItems="center" justifyContent="center">
        {/* TODO: use props for image and cards */}
            <Image />
            <TextCard />

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                navigate("/roastRoom");
              }}
              sx={{marginBottom: "20px"}}
            >
              Join
            </Button>

      </RoastCardItem>
  );
}
