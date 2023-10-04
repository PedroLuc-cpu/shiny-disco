import { Box, Button, InputAdornment, Paper, TextField, useTheme } from "@mui/material"
import { ReactElement } from "react"
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

interface IToolListing {
  searchText?: string;
  showInputSearch?: boolean;
  whenChangingSearchText?: (newText : string) => void;

  textButtonNew?: string;
  showButtonNew?: boolean;
  clickNew?: () => void;
}

export const ToolListing = ( 
  { searchText = '' ,
    showInputSearch = false,
    whenChangingSearchText,

    textButtonNew = 'Novo',
    showButtonNew = true,
    clickNew
  
  }: IToolListing ):ReactElement =>{
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
  {showInputSearch && (
    <TextField
    required
    size="small"
    value={searchText}
    onChange={(e) => whenChangingSearchText?.(e.target.value)}
    InputProps={{startAdornment:(
    <InputAdornment position="start">
      <SearchIcon/>
    </InputAdornment>
  )}}
  />
  )}

  
  {showButtonNew && (
      <Box flex={1} display={"flex"} justifyContent={"end"}>
      <Button 
      variant="contained"
      type="submit"
      disableElevation
      onClick={clickNew}
      endIcon={<AddIcon/>}
      >{textButtonNew}</Button>
  </Box>
  )}
  </Box>
 )
}