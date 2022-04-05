import { TextField, Button, Container, Grid, Fade, Grow } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { login, createAccount } from "../../apis";

export default function LoginForm({inProp, setInProp}) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await login({ username, password });
      if (res.data.currentUser === "admin") {
        sessionStorage.setItem("admin", "admin");
        setTimeout(() => navigate("/admin"), 1000);
      } else if (res.data.currentUser) {
        sessionStorage.setItem("user", "user");
        setInProp(false);
        console.log("HERE");
        setTimeout(() => navigate("/"), 1000);
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
      <Grow in={inProp} timeout={500}>   
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
     </Grow>
     <Grow in={inProp} timeout={800}>
      <TextField
        label="Password"
        error={error ? true : false}
        rows={1}
        variant={"outlined"}
        sx={{ display: "grid", marginTop: "20px"}}
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        helperText={error ? "Incorrect username/password." : ""}
      />
      </Grow>
      <Fade in={inProp} timeout={800}>

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
              
      </Fade>
    </Container>
  );
}
