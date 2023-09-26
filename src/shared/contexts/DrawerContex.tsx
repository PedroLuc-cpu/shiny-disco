/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useCallback, useContext, useState } from "react";



interface IDrawerContextType {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
}

interface IDrawerProviderProps {
  children: ReactNode
}


const DrawerContext = createContext({} as IDrawerContextType)

export const useDrawerContext = () => {
  return useContext(DrawerContext)
}

export const DrawerContextProvider = ({ children }: IDrawerProviderProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen)
  }, []) 

  return (
    <DrawerContext.Provider value={{ isDrawerOpen,toggleDrawerOpen }}>
     {children}
    </DrawerContext.Provider>
  )

}