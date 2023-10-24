import { useNavigate, useParams } from "react-router"
import { LayoutBasePage } from "../../shared/layouts";
import { DetailsTool } from "../../shared/components/details-tool/detailsTool";
import { useEffect, useState } from "react";
import { PessoasService } from "../../shared/services/api/pessoas/PessoasServices";
import { Form } from "@unform/web";
import { VTextField } from "../../shared/forms";
import { LinearProgress } from "@mui/material";





export const DetailPerson = () => {

 const { id } = useParams<'id'>();
 const navigate = useNavigate();
 // eslint-disable-next-line @typescript-eslint/no-unused-vars
 const [isLoading, setIsLoading] = useState(false)
 const [nome, setNome] = useState('')

 useEffect(() => {
  if(id !== 'nova'){
    setIsLoading(true);
    PessoasService.getById(Number(id))
    .then((result) => {
      setIsLoading(false);
        if(result instanceof Error){
          alert(result.message);
          navigate('/pessoas')
        }else{
          setNome(result.nomeCompleto)
          console.log(result)
          navigate(`/pessoas/detalhe/${result.id}`)
        }
    })
  }
 }, [id, navigate])

 const handleSave = () => {

 }

 const handleDelete = (id: number) => {
  if(confirm('Are you sure you want to delete')){
    PessoasService.deleteById(id)
      .then(result =>{
        if(result instanceof Error){
          alert(result.message);
        }else{
          
          alert("Deletado com sucesso!")
          navigate('/pessoas')
        }
      })
  }
 }


 return (
  <LayoutBasePage 
    title={id === 'nova' ? 'Nova pessoa' : nome}
    toolbar={
  <DetailsTool
    textButtonNew="Nova"
    showButtonSaveAndBack
    showButtonDelete={id !== 'nova'}
    showButtonNew={id !== 'nova'}

    onClickSaveAndBackButton={() => {}}
    onClickDeleteButton={() => handleDelete(Number(id))}
    onClickSaveButton={() => handleSave}
    onClickNewButton={() => {navigate('/pessoas/detalhe/nova')}}
    onClickBackButton={() => {navigate('/pessoas')}}

  />
  }
  >
  <Form onSubmit={() => console.log()}>

    <VTextField
    name="nomeCompleto"

    />
    <VTextField
    name="email"

    />
    <VTextField
    name="cidadeId"

    />

  </Form>
  {isLoading && (
    <LinearProgress  variant="indeterminate"/>
  )}

  </LayoutBasePage>
 )
}