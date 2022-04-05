import { TextField, Button, Container, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import exampleUser from "../../data/exampleUser";
import adminUser from "../../data/adminUser";
import { login, createAccount } from "../../apis";

export default function LoginForm() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await login({ username, password });
      if (res.data.currentUser === "admin") {
        sessionStorage.setItem("admin", "admin");
        navigate("/admin");
      } else if (res.data.currentUser) {
        sessionStorage.setItem("user", "user");
        navigate("/");
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  const handleSignUp = async () => {
    const res = await createAccount({ username, password });
    await handleLogin(username, password);
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
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Button
            sx={{ marginTop: "40px" }}
            onClick={handleLogin}
            variant="contained"
            color="primary"
            size="large"
          >
            Login
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            sx={{ marginTop: "30px" }}
            onClick={handleSignUp}
            variant="text"
            size="large"
          >
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
