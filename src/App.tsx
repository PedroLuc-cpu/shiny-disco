import { AppRoute } from './routes'
import { ThemeContextProvider } from './shared/contexts/ThemeContext'

function App() {
  return (
    <ThemeContextProvider>
      <AppRoute/>
    </ThemeContextProvider>
  )
}

export default App
