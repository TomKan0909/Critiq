import React from "react";
import Grid from "@mui/material/Grid";
import { Container, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Image from "./../profile/image";
import TextCard from "./../profile/textCard";
import StatsCard from "./../profile/stats";

import { StickyProfile } from "./styles";

export default function SideProfile() {
  const navigate = useNavigate();
  return (
    <StickyProfile>
      <Image />
      <TextCard name="Good Student"/>
      <StatsCard />
      <Stack
        spacing="40px"
        sx={{ alignItems: "center", marginTop: "100px", marginBottom: "100px" }}
      >
        <Button
          variant="contained"
          size="medium"
          onClick={() => {
            navigate("/profile");
          }}
          sx={{ maxWidth: "200px" }}
        >
          My Profile
        </Button>
        <Button
          variant="contained"
          color="success"
          size="medium"
          sx={{ maxWidth: "200px" }}
        >
          Go Live
        </Button>
      </Stack>
    </StickyProfile>
  );
}
