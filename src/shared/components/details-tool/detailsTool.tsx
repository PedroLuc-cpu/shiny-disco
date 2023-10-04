import { Box, Button, Divider, Paper, useTheme } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const  DetailsTool = () =>{
 
 const theme = useTheme()
 
 return (
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

  <Button 
      variant="contained"
      type="submit"
      disableElevation
      startIcon={<SaveIcon/>}
      >Salvar
  </Button>

  <Button 
      variant="outlined"
      type="submit"
      disableElevation
      startIcon={<SaveIcon/>}
      >Salvar e voltar
  </Button>

      <Button 
      variant="outlined"
      type="submit"
      disableElevation
      startIcon={<DeleteIcon/>}
      >Apagar
  </Button>

  <Button 
      variant="outlined"
      type="submit"
      disableElevation
      startIcon={<AddIcon/>}
      >NOVO
  </Button>

  <Divider variant="middle" orientation="vertical"/>

  <Button 
      variant="outlined"
      type="submit"
      disableElevation
      startIcon={<ArrowBackIcon/>}
      >Voltar
  </Button>

  </Box>
)
}