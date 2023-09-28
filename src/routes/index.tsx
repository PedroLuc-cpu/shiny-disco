import {Routes, Route, Navigate } from "react-router-dom";
import {useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";

import HomeIcon from '@mui/icons-material/Home';
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
        ])
    },[setDrawerOptions])

    return(
            <Routes>
                <Route path="/app" element={<Dashboard />}/>
                <Route path="*" element={<Navigate to={"/app"}/>}/>
            </Routes>
    )
}