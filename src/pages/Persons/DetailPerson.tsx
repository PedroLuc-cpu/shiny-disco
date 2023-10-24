import { useNavigate, useParams } from "react-router"
import { LayoutBasePage } from "../../shared/layouts";
import { DetailsTool } from "../../shared/components/details-tool/detailsTool";
import { useEffect, useRef, useState } from "react";
import { PessoasService } from "../../shared/services/api/pessoas/PessoasServices";
import { Form } from "@unform/web";
import { VTextField } from "../../shared/forms";
import { LinearProgress } from "@mui/material";
import { FormHandles } from "@unform/core";

interface IFormData {
  email: string;
  cidadeId: number;
  nomeCompleto: string
}



export const DetailPerson = () => {

 const { id } = useParams<'id'>();
 const navigate = useNavigate();
 // eslint-disable-next-line @typescript-eslint/no-unused-vars

 const formRef = useRef<FormHandles>(null);


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
          console.log(result);
          formRef.current?.setData(result);
          // navigate(`/pessoas/detalhe/${result.id}`)
        }
    })
  }
 }, [id, navigate])

 const handleSave = (dados: IFormData) => {
  console.log(dados)
  setIsLoading(true);
  if(id === 'nova'){
    PessoasService.create(dados)
    .then((result) => {
      setIsLoading(false);
      if(result instanceof Error){
        alert(result.message);
      }else{
        alert('Cadastro realizado com sucesso!')
        navigate(`/pessoas/detalhe/${result}`)
      }
    })
  } else {
    PessoasService.updateById(Number(id), {id: Number(id), ...dados})
    .then((result) => {
      setIsLoading(false);
      if(result instanceof Error){
        alert(result.message);
      }
    })
  }
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

    onClickSaveAndBackButton={() => formRef.current?.submitForm()}
    onClickDeleteButton={() => handleDelete(Number(id))}
    onClickSaveButton={() => formRef.current?.submitForm()}
    onClickNewButton={() => {navigate('/pessoas/detalhe/nova')}}
    onClickBackButton={() => {navigate('/pessoas')}}

  />
  }
  >
  <Form ref={formRef}  onSubmit={handleSave}>

    <VTextField
    name="nomeCompleto"
    placeholder="Nome"

    />
    <VTextField
    name="email"
    placeholder="Email"

    />
    <VTextField
    name="cidadeId"
    placeholder="Cidade id"

    />

  </Form>
  {isLoading && (
    <LinearProgress  variant="indeterminate"/>
  )}

  </LayoutBasePage>
 )
}