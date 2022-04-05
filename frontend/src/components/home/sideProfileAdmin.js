import React from "react";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Image from "../profile/image";
import TextCard from "../profile/textCard";
import StatsCard from "../profile/stats";

import { StickyProfile } from "./styles";
import exampleUser from "../../data/exampleUser";

export default function SideProfile({ user, inProp, setInProp }) {
  const navigate = useNavigate();
  return (
    <StickyProfile>
      <Image img={user.images[0].img} />
      <TextCard title={user.job} content={user.name} />
      <Stack spacing="40px" sx={{ marginTop: "60px", marginBottom: "20px" }}>
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={() => {
            setInProp(false);
            setTimeout( () => navigate("/usersAdmin"), 1000);
          }}
        >
          View Site Stats
        </Button>
      </Stack>
    </StickyProfile>
  );
}
