import React from "react";
import Grid from "@mui/material/Grid";
import LoginForm from "../components/login/loginForm";

function LoginView() {
  return (
    // https://stackoverflow.com/a/50784886
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "70vh" }}
    >
      <Grid item xs={2}>
        <LoginForm />
      </Grid>
    </Grid>
  );
}

export default LoginView;
