import { Box, Button, InputAdornment, Paper, TextField, useTheme } from "@mui/material"
import { ReactElement } from "react"
import SearchIcon from '@mui/icons-material/Search';
export const Toolbar = ():ReactElement =>{
  const theme = useTheme();

 return(
   <Box 
   height={theme.spacing(5)}
   marginX={1}
   padding={1}
   paddingX={2}
   display={"flex"} 
   gap={1} 
   alignItems={"center"} 
   component={Paper}
  >
  <TextField
  required
  size="small"
  InputProps={{startAdornment:(
   <InputAdornment position="start">
    <SearchIcon/>
   </InputAdornment>
  )}}
  />
  <Box flex={1} display={"flex"} justifyContent={"end"}>
      <Button 
      variant="contained"
      type="submit"
      onClick={(ev) => console.log(ev.view)}
      >Novo</Button>
  </Box>
  </Box>
 )
}