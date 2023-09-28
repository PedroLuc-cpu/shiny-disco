import { ReactNode } from "react";
import { LayoutBasePageProps } from "./LayoutBasePageProps";

/*
interface global para realizar as tipagens dos childrens
* @example
* export const DrawerContextProvider = ({ children }: TypeChildrenProps) => {}
*/
export interface TypeChildrenProps extends LayoutBasePageProps {
 children: ReactNode | undefined
}