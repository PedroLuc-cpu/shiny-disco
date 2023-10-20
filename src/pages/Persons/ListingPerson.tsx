import { ToolListing } from "../../shared/components"
import { LayoutBasePage } from "../../shared/layouts"
import { useEffect, useMemo } from "react"
import { PessoasService } from "../../shared/services/api/pessoas/PessoasServices"
import { useSearchParams } from "react-router-dom"
import { useDebounce } from "../../shared/hook"



export const ListingPerson = () => {

    const  [searchParams, setSearchParams] = useSearchParams();
    const  {debounce} = useDebounce(3000)
    

    const busca = useMemo(() =>{
        return searchParams.get("busca") || ""
    }, [searchParams])

    useEffect(()=> {

        debounce(() =>{
            PessoasService.getAll(1, busca)
                .then((result) => {
                    if(result instanceof Error){
                        alert(result.message);
                    }else{
                        console.log(result);
                    }
                })
        })
        
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
        </LayoutBasePage>
    )
}