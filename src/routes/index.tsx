import {Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import {Button} from "@mui/material"
import {useDrawerContext } from "../shared/contexts";

export function AppRoute(){
    const { toggleDrawerOpen  } = useDrawerContext()
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/app" element={<Button variant="contained" color="primary" onClick={toggleDrawerOpen}>Modo Escuro</Button>}/>
                <Route path="*" element={<Navigate to={"/app"}/>}/>
            </Routes>
        </BrowserRouter>
    )
}