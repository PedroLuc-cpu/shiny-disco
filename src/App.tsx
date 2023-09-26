import { AppRoute } from './routes'
import { MenuLateral } from './shared/components'
import { DrawerContextProvider } from './shared/contexts'
import { ThemeContextProvider } from './shared/contexts/ThemeContext'

function App() {
  return (
    <ThemeContextProvider>
      <DrawerContextProvider>
        <MenuLateral>
          <AppRoute/>
        </MenuLateral>
      </DrawerContextProvider>      
    </ThemeContextProvider>
  )
}

export default App
