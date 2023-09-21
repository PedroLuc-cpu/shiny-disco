import {Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

export function AppRoute(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/app" element={<h1>Página inicial</h1>}/>
                <Route path="*" element={<Navigate to={"/app"}/>}/>
            </Routes>
        </BrowserRouter>
    )
}