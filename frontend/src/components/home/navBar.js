import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { logout } from "../../apis";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ alignItems: "left" }}>
      <Button
        onClick={async () => {
          await logout();
          navigate("/login");
        }}
        sx={{ float: "left", margin: "20px" }}
        color="primary"
      >
        Sign Out
      </Button>
    </Box>
  );
}
