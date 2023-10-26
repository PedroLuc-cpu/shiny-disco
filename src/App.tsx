import { AppRoute } from "./routes";
import { MenuLateral } from "./shared/components";
import { DrawerContextProvider } from "./shared/contexts";
import { ThemeContextProvider } from "./shared/contexts/AppThemeContext";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <ThemeContextProvider>
        <DrawerContextProvider>
          <MenuLateral>
            <AppRoute />
          </MenuLateral>
        </DrawerContextProvider>
      </ThemeContextProvider>
    </Router>
  );
}

export default App;
