import React from "react";
import { Grid, Fade } from "@mui/material";
import LoginForm from "../components/login/loginForm";
import Logo from "../components/logo";
import { useNavigate } from "react-router-dom";

function LoginView() {
  const navigate = useNavigate();
  const [inProp, setInProp] = React.useState(true);

  React.useEffect(() => {
    let isAuth = sessionStorage.getItem("user");
    console.log(isAuth);
    document.title = "Critiq";
    if (isAuth && isAuth !== "undefined") {
      navigate("/");
    }
  }, []);

  return (
    // https://stackoverflow.com/a/50784886
    <Grid container alignItems="center" minHeight="70vh">
      <Grid container justifyContent="center" spacing={8}>
        <Fade in={inProp} timeout={800}>
          <Grid item xs={12}>
            <Logo />
          </Grid>
        </Fade>
        <Grid item xs={2}>
          <LoginForm inProp={inProp} setInProp={setInProp} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LoginView;
