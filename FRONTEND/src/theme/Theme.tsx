import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Nunito, Arial, sans-serif",
    allVariants: {
      color: "black",
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#2FB615",
      light: "#E2FEDD",
    },
    secondary: {
      main: "#CE4260",
    },
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#666666",
    },
  },
});

export default theme;
