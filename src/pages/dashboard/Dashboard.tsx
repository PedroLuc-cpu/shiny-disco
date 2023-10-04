import { ToolListing } from "../../shared/components"
import { LayoutBasePage } from "../../shared/layouts"



export const Dashboard = () => {
 return(
  <LayoutBasePage 
    title="Página inicial"
    toolbar={<ToolListing showInputSearch />}
  >
    Testando...
  </LayoutBasePage>
 )
}