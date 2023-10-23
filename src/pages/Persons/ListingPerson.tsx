import { ToolListing } from "../../shared/components"
import { LayoutBasePage } from "../../shared/layouts"
import { useEffect, useMemo, useState } from "react"
import { IListagemPessoa, PessoasService } from "../../shared/services/api/pessoas/PessoasServices"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useDebounce } from "../../shared/hook"
import { IconButton, LinearProgress, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from "@mui/material"
import { Environments } from "../../shared/environments"


import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export const ListingPerson = () => {

    const  [searchParams, setSearchParams] = useSearchParams();
    const  {debounce} = useDebounce()
    const  navigate = useNavigate();

    const [rows, setRows] = useState<IListagemPessoa[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [totalCount, setTotalCount] = useState(0)
    
    

    const busca = useMemo(() =>{
        return searchParams.get("busca") || ""
    }, [searchParams])

    const pagina  = useMemo(() =>{ 
        return Number(searchParams.get("pagina") || "1")
    }, [searchParams])



    useEffect(()=> {
        setIsLoading(true)
        debounce(() =>{
            PessoasService.getAll(pagina, busca)
                .then((result) => {
                    setIsLoading(false)
                        if(result instanceof Error){
                            alert(result.message);
                        }else{
                            console.log(result)
                            setTotalCount(result.totalCount)
                            setRows(result.data)
                        }
                });

    });

    }, [busca, debounce, pagina])

    const handleDelete = (id: number) => {
        if(confirm('Are you sure you want to delete')){
            PessoasService.deleteById(id)
                .then((result) => {
                    if(result instanceof Error){
                        alert(result.message);
                    }else{
                        setRows(oldRows => {
                            return [
                                
                                ...oldRows.filter(row => row.id!== id)
                            ]
                        })
                        alert("Deletado com sucesso!")
                        window.location.reload()
                    }
                });
        }
    }
    
    return(
        <LayoutBasePage 
            title="Listagem de pessoas"
            toolbar={

        <ToolListing
            textButtonNew="Nova"
            showInputSearch
            searchText={busca}
            whenChangingSearchText={texto => setSearchParams({busca: texto, pagina: '1'}, {replace:true})}
        />}
        >
        <TableContainer component={Paper} variant="outlined" sx={{m:1, width:'auto' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><Typography fontWeight={"bold"}>Ações</Typography></TableCell>
                        <TableCell><Typography fontWeight={"bold"}>Nome completo</Typography></TableCell>
                        <TableCell><Typography fontWeight={"bold"}>Email</Typography></TableCell>
                    </TableRow>
                </TableHead>
            <TableBody>
            {
                (
                rows.map(row => (
                    <TableRow key={row.id}>
                        <TableCell>
                            <IconButton size="small" onClick={() => navigate(`/pessoas/detalhe/${row.id}`)}>
                                <EditIcon/>
                            </IconButton>

                            <IconButton size="small" onClick={() => handleDelete(row.id)}>
                                <DeleteIcon/>
                            </IconButton>
                        </TableCell>
                        <TableCell>{row.nomeCompleto}</TableCell>
                        <TableCell>{row.email}</TableCell>
                    </TableRow>
                ))
                )
            }
            </TableBody>
                {totalCount === 0 && !isLoading && (
                    <caption>{Environments.LISTENER_EMPTY}</caption>
                )}
            <TableFooter>
                <TableRow>
                {isLoading  && (
                    <TableCell colSpan={3}>
                        <LinearProgress  variant="indeterminate"/>
                    </TableCell>
                )}
                </TableRow>

                <TableRow>
                {(totalCount > 0 && totalCount > Environments.LIMITE_LINE )  && (
                    <TableCell colSpan={3}>
                        <Pagination
                            page={pagina} 
                            count={Math.ceil(totalCount / Environments.LIMITE_LINE)}
                            onChange={(_, newPage) => setSearchParams({busca, pagina: newPage.toString()},{replace: true})}
                        />
                    </TableCell>
                )}
                </TableRow>
            </TableFooter>
            </Table>    
        </TableContainer>
        </LayoutBasePage>
    )
    }