import { useSearchParams } from "react-router-dom"

import { ToolListing } from "../../shared/components"
import { LayoutBasePage } from "../../shared/layouts"
import { useMemo } from "react"



export const ListingCity = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    const buscar = useMemo(()=>{
        return searchParams.get("busca") || "";
    }, [searchParams])

    return(
        <LayoutBasePage 
        title="Listagem de cidades"
        toolbar={
            
        <ToolListing
        textButtonNew="Nova"
        showInputSearch
        searchText={buscar}
        whenChangingSearchText={texto => setSearchParams({buscar: texto}, {replace: true})}
        />}
        >
        </LayoutBasePage>
    )
}