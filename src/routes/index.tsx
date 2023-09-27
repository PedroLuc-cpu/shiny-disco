import {Routes, Route, Navigate } from "react-router-dom";
import {Button} from "@mui/material"
import {useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import HandymanIcon from '@mui/icons-material/Handyman';

export function AppRoute(){
    const { toggleDrawerOpen, setDrawerOptions  } = useDrawerContext()

    useEffect(() =>{
        setDrawerOptions([
            {
                label:"Página inicial",
                icon:<HomeIcon/>,
                path:"/pagina-inicial"
            },

            {
                label:"Cadastro de clientes",
                icon:<PersonIcon/>,
                path:"/persons"
            },

            {
                label:"Configuração",
                icon:<HandymanIcon/>,
                path:"/configuracao"
            }
        ])
    }, [])

    return(
            <Routes>
                <Route path="/app" element={<Button variant="contained" color="primary" onClick={toggleDrawerOpen}>Modo Escuro</Button>}/>
                <Route path="*" element={<Navigate to={"/app"}/>}/>
            </Routes>
    )
}