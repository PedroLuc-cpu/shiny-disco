import { Routes, Route, Navigate } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";

import { Dashboard, ListingPerson, DetailPerson, Products } from "../pages";

//icons
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";

export function AppRoute() {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: "Página inicial",
        icon: <HomeIcon />,
        path: "/pagina-inicial",
      },
      {
        label: "Pessoas",
        icon: <PersonIcon />,
        path: "/pessoas",
      },
      {
        label: "Produtos",
        icon: <InventoryIcon />,
        path: "/produtos",
      },
    ]);
  }, [setDrawerOptions]);

  return (
    <Routes>
      <Route path="/app" element={<Dashboard />} />
      <Route path="/pessoas" element={<ListingPerson />} />
      <Route path="/pessoas/detalhe/:id" element={<DetailPerson />} />

      <Route path="/produtos" element={<Products />} />
      <Route path="*" element={<Navigate to={"/app"} />} />
    </Routes>
  );
}
