import {Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import {Button} from "@mui/material"

export function AppRoute(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/app" element={<Button variant="contained" color="primary">Clique aqui</Button>}/>
                <Route path="*" element={<Navigate to={"/app"}/>}/>
            </Routes>
        </BrowserRouter>
    )
}