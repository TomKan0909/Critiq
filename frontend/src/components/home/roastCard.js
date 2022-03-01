import React from "react";
import { TableCell, TableRow, Button, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Image from "../profile/image";
import StatsCard from "../profile/stats";
import TextCard from "../profile/textCard";

export default function RoastCard(props) {
  const [displayName, setDisplayName] = React.useState(props.name);

  const navigate = useNavigate();
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        { /* TODO: use props for image and cards */ }
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={2}>
            <Image />
          </Grid>
          <Grid item xs={8}>
            <TextCard name={displayName}/>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="info"
              onClick={() => {
                navigate("/roastRoom");
              }}
            >
              Join
            </Button>
          </Grid>
        </Grid>
      </TableCell>
    </TableRow>
  );
}
