import {Routes, Route, Navigate } from "react-router-dom";
import {useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";


import { Dashboard, ListingPerson, DetailPerson } from "../pages";


//icons
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

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
                label:"Pessoas",
                icon:<PersonIcon/>,
                path:"/pessoas"
            }
        ])
    },[setDrawerOptions])

    return(
            <Routes>
                <Route path="/app" element={<Dashboard />}/>
                <Route path="/pessoas" element={<ListingPerson/>}/>
                <Route path="/pessoas/detalhe/:id" element={<DetailPerson/>}/>
                <Route path="*" element={<Navigate to={"/app"}/>}/>
            </Routes>
    )
}