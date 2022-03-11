import React from "react";
import Grid from "@mui/material/Grid";
import LoginForm from "../components/login/loginForm";
import Logo from "../components/logo";
import { useNavigate } from 'react-router-dom'

function LoginView() {
  const navigate = useNavigate()

  React.useEffect(() => {
    let isAuth = sessionStorage.getItem('user')
    console.log(isAuth);
    if(isAuth && isAuth !== 'undefined') {
       navigate('/');
    }
 }, [])

  return (
    // https://stackoverflow.com/a/50784886
    <Grid container alignItems="center" minHeight="70vh">
      <Grid container justifyContent="center" spacing={8}>
        <Grid item xs={12}>
          <Logo />
        </Grid>
        <Grid item xs={2}>
          <LoginForm />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LoginView;
