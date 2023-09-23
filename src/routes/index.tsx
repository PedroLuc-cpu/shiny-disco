import {Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import {Button} from "@mui/material"
import { useThemeContext } from "../shared/contexts";

export function AppRoute(){
    const { toggleTheme } = useThemeContext()
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/app" element={<Button variant="contained" color="primary" onClick={toggleTheme}>Modo Escuro</Button>}/>
                <Route path="*" element={<Navigate to={"/app"}/>}/>
            </Routes>
        </BrowserRouter>
    )
}