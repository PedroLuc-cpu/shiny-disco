import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material"
import { ReactNode } from "react"
import { useDrawerContext, useThemeContext } from '../../contexts';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

import DarkModeIcon from '@mui/icons-material/DarkMode';

interface childrenType{
    children: ReactNode
}

interface IListItemLinkProps{
    label: string
    icon: ReactNode 
    to: string
    onClick: (() => void) | undefined
}

const ListItemLink = ({label, icon, onClick, to}:IListItemLinkProps) =>{

    const navigate = useNavigate();

    const resolvedPath = useResolvedPath(to);
    const match = useMatch({path:resolvedPath.pathname, end: false});

    const handleClick = () => {
        navigate(to);
        onClick?.()
    }

    return(
        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={label}/>
        </ListItemButton>   
    )
}


export const MenuLateral = ({ children } : childrenType) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));

    const {isDrawerOpen, toggleDrawerOpen, drawerOptions} = useDrawerContext();
    const {toggleTheme} = useThemeContext()

    return(
        <>
         <Drawer open={isDrawerOpen} variant={smDown ? "temporary" : "permanent"} onClose={toggleDrawerOpen}>
            <Box width={theme.spacing(28)} display={"flex"} flexDirection={"column"} height={"100%"}>
                <Box width={"100%"} height={theme.spacing(20)} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <Avatar 
                    sx={{height: theme.spacing(12), width: theme.spacing(12)}}
                    src="https://img.freepik.com/vetores-premium/ilustracao-de-avatar-de-estudante-icone-de-perfil-de-usuario-avatar-de-jovem_118339-4402.jpg?w=2000" />
                </Box>
                <Divider/>

                <Box flex={1}>
                    <List component={"nav"}>
                        {drawerOptions.map(drawerOptions => (
                        <ListItemLink
                        key={drawerOptions.path} 
                        icon={drawerOptions.icon}
                        to={drawerOptions.path}
                        label={drawerOptions.label}
                        onClick={smDown ?  toggleDrawerOpen : undefined}
                        />
                        ))}
                    </List>
                </Box>

                <Box>
                    <ListItemButton onClick={toggleTheme}>
                        <ListItemIcon>
                            <DarkModeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tema"/>
                    </ListItemButton>
                </Box>
            </Box>
         </Drawer>
         <Box height={"100vh"} marginLeft={smDown ? 0 : theme.spacing(28)}>
            {children}
         </Box>
        </>
    )
}