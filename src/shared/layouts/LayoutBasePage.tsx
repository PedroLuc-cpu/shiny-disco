import { Box, IconButton, Theme, Typography, useMediaQuery, useTheme } from "@mui/material"
import { TypeChildrenProps } from "../model/TypeChildrenProps"
import MenuIcon from '@mui/icons-material/Menu';
import { useDrawerContext } from "../contexts";



export const LayoutBasePage = ({children, title}: TypeChildrenProps ) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const theme = useTheme()
  const {toggleDrawerOpen} = useDrawerContext()
  
 return(
  <Box height={"100%"} display={"flex"} flexDirection={"column"} gap={1}>
    <Box padding={1} height={theme.spacing(12)} display={"flex"} alignItems={"center"} gap={1}>
      {smDown && (
      <IconButton onClick={toggleDrawerOpen}>
        <MenuIcon/>
      </IconButton>
      )}

      <Typography variant="h5">
        {title}
      </Typography>

    </Box>
    
    <Box>
      Barra de ferramentas
    </Box>
    <Box>
      {children}
    </Box>
  </Box>
 )
}