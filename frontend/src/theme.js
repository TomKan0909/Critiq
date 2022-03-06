import { createTheme } from "@mui/material";

import { green, brown, grey } from "@mui/material/colors";

export const themeOptions = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      // main: '#efebe9',
      main: grey[200],
    },
    secondaryDark: {
      // main: '#bdb9b7',
      main: grey[500],
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
    highlight: {
      main: green[300],
    },
    chip: {
      main: '#ffea00',
    },
  },
  typography: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    fontWeightRegular: 300,
    fontWeightMedium: 600,
    fontWeightBold: 800,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
        }
      }
    }
  }
});
