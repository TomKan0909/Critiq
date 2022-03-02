import React from "react";
import Grid from "@mui/material/Grid";
import { Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NavDebug() {
  const navigate = useNavigate();
  return (
    <Container>
      <Button
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </Button>
      <Button
        onClick={() => {
          navigate("/profile");
        }}
      >
        Profile
      </Button>
      <Button
        onClick={() => {
          navigate("/roastRoom");
        }}
      >
        Roast Room
      </Button>
      <Button
        onClick={() => {
          navigate("/usersAdmin");
        }}
      >
        Users Admin
      </Button>
    </Container>
  );
}
