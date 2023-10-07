import {Routes, Route, Navigate } from "react-router-dom";
import {useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";


import { Dashboard, ListingCity } from "../pages";


//icons
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';

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
                label:"cidades",
                icon:<LocationCityIcon/>,
                path:"/cidades"
            }
        ])
    },[setDrawerOptions])

    return(
            <Routes>
                <Route path="/app" element={<Dashboard />}/>
                <Route path="/cidades" element={<ListingCity/>}/>
                {/* <Route path="/cidades/detalhe/:id" element={<ListingCity/>}/> */}
                <Route path="*" element={<Navigate to={"/app"}/>}/>
            </Routes>
    )
}