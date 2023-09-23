import { createTheme } from "@mui/material"
import { cyan, yellow } from "@mui/material/colors";

export const DarkTheme = createTheme({
 palette:{
  primary:{
   main: yellow[700],
   dark: yellow[800],
   light: yellow[500],
   contrastText: '#ffff',
  },
  secondary:{
   main: cyan[500],
   dark: yellow[400],
   light: yellow[300],
   contrastText: '#ffff',
  },

  background:{
   default: '#303134',
   paper: '#202124',
  }
 }
});