import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#b390f9",
      main: "#b358e6",
      dark: "#8a50ac",
    },
    secondary: {
      light: "#7425ea",
      main: "#6200EE",
      dark: "#5800dd",
    },
    text: {
      primary: "#5e5a5a",
      secondary: "#9B9B9B",
    },
    error: {
      main: "#d32121",
    },
    warning: {
      main: "#f9c700",
    },
    success: {
      main: "#169e45",
    },
    grey: {
      50: "#FAFAFA",
      100: "#F0F0F0",
      200: "#D7D9DD",
      300: "#C4C4C4",
      400: "#9B9B9B",
    },
  },
  typography: {
    fontFamily: "Josefin Sans",
  },
  shape: {
    borderRadius: "3px",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            color: "white",
          },
        },
      ],
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 39px rgba(0, 0, 0, 0.05)",
        },
      },
    },
  },
});

export default theme;
