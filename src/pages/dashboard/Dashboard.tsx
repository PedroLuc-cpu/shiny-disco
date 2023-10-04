import { DetailsTool } from "../../shared/components/details-tool/detailsTool"
import { LayoutBasePage } from "../../shared/layouts"



export const Dashboard = () => {
  return(
  <LayoutBasePage 
    title="Página inicial"
    toolbar={(<DetailsTool/>)}
  >
    Testando...
  </LayoutBasePage>
  )
}