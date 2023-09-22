import { ThemeProvider } from '@emotion/react'
import { AppRoute } from './routes'
import { LightTheme } from './shared/themes'

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
          <AppRoute/>
    </ThemeProvider>
  )
}

export default App
