import { createTheme } from "@mui/material";

export const themeOptions = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
    error: {
      main: '#b00020',
    },
    warning: {
      main: '#ef6c00',
    },
    info: {
      main: '#1e88e5',
    },
    success: {
      main: '#388e3c',
    },
  },
  typography: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    fontWeightRegular: 300,
    fontWeightMedium: 600,
    fontWeightBold: 800,
  },
});
