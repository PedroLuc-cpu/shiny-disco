import {Routes, Route, Navigate } from "react-router-dom";
import {useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import HandymanIcon from '@mui/icons-material/Handyman';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Dashboard } from "../pages";

export function AppRoute(){
    const { setDrawerOptions} = useDrawerContext()

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
            },
                        {
                label:"Temporizador",
                icon:<AccessTimeIcon/>,
                path:"/temporizador"
            },
        ])
    },[setDrawerOptions])

    return(
            <Routes>
                <Route path="/app" element={<Dashboard />}/>
                <Route path="*" element={<Navigate to={"/app"}/>}/>
            </Routes>
    )
}