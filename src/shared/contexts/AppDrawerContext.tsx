/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useCallback, useContext, useState } from "react";
import { TypeChildrenProps } from "../model/TypeChildrenProps";


interface IDrawerOptions{
    label: string
    icon: ReactNode 
    path: string
}
interface IDrawerContextType {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
  drawerOptions: IDrawerOptions[];
  setDrawerOptions: (drawerOptions: IDrawerOptions[]) => void;
}

const DrawerContext = createContext({} as IDrawerContextType)

export const useDrawerContext = () => {
  return useContext(DrawerContext)
}

export const DrawerContextProvider = ({ children }: TypeChildrenProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([]);

  const handleSetDrawerOptions = useCallback((newDrawerOptions : IDrawerOptions[]) => {
    setDrawerOptions(newDrawerOptions);
  }, [])

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen)
  }, []) 

  return (
    <DrawerContext.Provider value={
      {
        isDrawerOpen,
        drawerOptions,
        toggleDrawerOpen,
        setDrawerOptions: handleSetDrawerOptions
      }}>
      {children}
    </DrawerContext.Provider>
  )

}