import { createTheme } from "@mui/material";
import { cyan, yellow } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: "#508BED",
      dark: "#508BED",
      light: "#508BED",
      contrastText: "#ffff",
    },
    secondary: {
      main: cyan[500],
      dark: yellow[400],
      light: yellow[400],
      contrastText: "#ffff",
    },

    background: {
      default: "#f7f6f3",
      paper: "#ffff",
    },
  },
});
