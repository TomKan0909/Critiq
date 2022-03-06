import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ alignItems: "left" }}>
      <Button
        onClick={() => {
          navigate("/login");
          sessionStorage.clear();
        }}
        sx={{ float: "left", margin: "20px" }}
        color="primary"
      >
        Sign Out
      </Button>
    </Box>
  );
}
