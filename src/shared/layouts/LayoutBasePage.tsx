import { Box, IconButton, Theme, Typography, useMediaQuery, useTheme } from "@mui/material"
import { TypeChildrenProps } from "../model/TypeChildrenProps"
import MenuIcon from '@mui/icons-material/Menu';
import { useDrawerContext } from "../contexts";



export const LayoutBasePage = ({children, title, toolbar}: TypeChildrenProps ) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  const theme = useTheme()
  const {toggleDrawerOpen} = useDrawerContext()
  
  return(
  <Box height={"100%"} display={"flex"} flexDirection={"column"} gap={1}>
    <Box padding={1} display={"flex"} alignItems={"center"} gap={1}  height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}>
      {smDown && (
      <IconButton onClick={toggleDrawerOpen}>
        <MenuIcon/>
      </IconButton>
      )}

      <Typography 
      variant={smDown ? "h5" : mdDown ? "h4" : "h3"} 
      overflow={"hidden"}
      whiteSpace={"nowrap"}
      textOverflow={"ellipsis"}
      >
        {title}
      </Typography>
    </Box>

    {toolbar && (
    <Box>
      {toolbar}
    </Box>
    )}
    
    {/* <Box>
      Barra de ferramentas
    </Box> */}
    <Box flex={1} overflow={"auto"}>
      {children}
    </Box>
  </Box>
  )
}