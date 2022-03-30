import { TextField, Button, Container } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import exampleUser from "../../data/exampleUser";
import adminUser from "../../data/adminUser";
import {login} from "../../apis"

export default function LoginForm() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    
    const res = await login({username, password});
    if (res.data.currentUser === "admin"){
      sessionStorage.setItem('admin', 'admin')
      navigate("/admin");
    } else if (res.data.currentUser) {
      sessionStorage.setItem('user', 'user')
      navigate("/")
    }else {
      setError(true)
    }

  };

  return (
    <Container component="form">
      <TextField
        label="Username"
        error={error ? true : false}
        rows={1}
        variant="outlined"
        sx={{ display: "grid" }}
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        error={error ? true : false}
        rows={1}
        variant={"outlined"}
        sx={{ display: "grid", marginTop: "20px" }}
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        helperText={error ? "Incorrect username/password." : ""}
      />
      <Button
        sx={{ marginTop: "40px" }}
        onClick={handleLogin}
        variant="contained"
        color="primary"
        size="large"
      >
        Login
      </Button>
    </Container>
  );
}
