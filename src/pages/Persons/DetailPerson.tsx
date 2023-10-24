import { useNavigate, useParams } from "react-router"
import { LayoutBasePage } from "../../shared/layouts";
import { DetailsTool } from "../../shared/components/details-tool/detailsTool";







export const DetailPerson = () => {

 const { id } = useParams<'id'>();
 const navigate = useNavigate();


 return (
  <LayoutBasePage 
    title="Detalhe de Pessoa"
    toolbar={
  <DetailsTool
    textButtonNew="Nova"
    showButtonSaveAndBack
    showButtonDelete={id !== 'nova'}
    showButtonNew={id !== 'nova'}

    onClickSaveAndBackButton={() => {}}
    onClickDeleteButton={() => {}}
    onClickSaveButton={() => {}}
    onClickNewButton={() => {navigate('/pessoas/detalhe/nova')}}
    onClickBackButton={() => {navigate('/pessoas')}}

  />
  }
  >
   
  </LayoutBasePage>
 )
}