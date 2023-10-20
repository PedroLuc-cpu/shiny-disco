/* eslint-disable react-refresh/only-export-components */
import {createContext, useCallback, useContext, useMemo, useState } from "react";
import { ThemeProvider } from '@emotion/react'
import { LightTheme, DarkTheme } from '../themes'
import { Box } from "@mui/material";
import { TypeChildrenProps } from "../model/TypeChildrenProps";



interface IThemeContextType {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}


const ThemeContext = createContext({} as IThemeContextType)

export const useThemeContext = () => {
  return useContext(ThemeContext)
}

export const ThemeContextProvider = ({ children }: TypeChildrenProps) => {
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