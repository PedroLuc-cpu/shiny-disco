import { AppRoute } from './routes'
import { MenuLateral } from './shared/components'
import { ThemeContextProvider } from './shared/contexts/ThemeContext'

function App() {
  return (
    <ThemeContextProvider>
      <MenuLateral>
        <AppRoute/>
      </MenuLateral>
      
    </ThemeContextProvider>
  )
}

export default App
