import { ReactNode, createContext, useCallback, useContext, useMemo, useState } from "react";
import { ThemeProvider } from '@emotion/react'
import { LightTheme, DarkTheme } from '../../shared/themes'
import { Box } from "@mui/material";



interface IThemeContextType {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

interface IThemeProviderProps {
  children: ReactNode
}


const ThemeContext = createContext({} as IThemeContextType)

export const useThemeContext = () => {
  return useContext(ThemeContext)
}

export const ThemeContextProvider = ({ children }: IThemeProviderProps) => {
  const [themeName, setthemeName] = useState<'light' | 'dark'>('light');

  const toggleTheme = useCallback(() => {
    setthemeName((oldThemeName) => oldThemeName === 'light' ? 'dark' : 'light')
  }, [])

  const theme = useMemo(() => {
    if (themeName === 'light') return LightTheme;

    return DarkTheme;

  }, [themeName])

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box width={'100vw'} height={'100vh'} bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  )

}