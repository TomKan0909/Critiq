import React from "react";
import { TableCell, TableRow, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Image from "../profile/image";

export default function RoastCard(props) {
  const navigate = useNavigate();
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {props.userName}
        <Button
          variant="contained"
          color="info"
          onClick={() => {
            navigate("/roastRoom");
          }}
          sx={{ float: "right" }}
        >
          Roast
        </Button>
      </TableCell>
    </TableRow>
  );
}
