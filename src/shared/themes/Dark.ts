import { createTheme } from "@mui/material"
import { cyan, purple, yellow } from "@mui/material/colors";

export const DarkTheme = createTheme({
 palette: {
  mode:"dark",
  primary: {
   main: "#508BED",
   dark: "#508BED",
   light: purple[500],
   contrastText: '#ffff',
  },
  secondary: {
   main: cyan[500],
   dark: yellow[400],
   light: yellow[300],
   contrastText: '#ffff',
  },

  background: {
   default: '#303134',
   paper: '#202124',
  },
 },
 typography:{
  allVariants:{
   color:"#FFFF"
  }
 }
});