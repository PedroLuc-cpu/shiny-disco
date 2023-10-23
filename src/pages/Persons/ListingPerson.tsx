import { ToolListing } from "../../shared/components"
import { LayoutBasePage } from "../../shared/layouts"
import { useEffect, useMemo, useState } from "react"
import { IListagemPessoa, PessoasService } from "../../shared/services/api/pessoas/PessoasServices"
import { useSearchParams } from "react-router-dom"
import { useDebounce } from "../../shared/hook"
import { LinearProgress, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from "@mui/material"
import { Environments } from "../../shared/environments"



export const ListingPerson = () => {

    const  [searchParams, setSearchParams] = useSearchParams();
    const  {debounce} = useDebounce()

    const [rows, setRows] = useState<IListagemPessoa[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [totalCount, setTotalCount] = useState(0)
    
    

    const busca = useMemo(() =>{
        return searchParams.get("busca") || ""
    }, [searchParams])

    useEffect(()=> {
        setIsLoading(true)
        debounce(() =>{
            PessoasService.getAll(1, busca)
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

    }, [busca, debounce])
    
    return(
        <LayoutBasePage 
            title="Listagem de pessoas"
            toolbar={

        <ToolListing
            textButtonNew="Nova"
            showInputSearch
            searchText={busca}
            whenChangingSearchText={texto => setSearchParams({busca: texto}, {replace:true})}
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
                        <TableCell>Ações</TableCell>
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
            </TableFooter>
            </Table>    
        </TableContainer>
        </LayoutBasePage>
    )
    }