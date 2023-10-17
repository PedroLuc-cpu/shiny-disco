import { ToolListing } from "../../shared/components"
import { LayoutBasePage } from "../../shared/layouts"
import { useState } from "react"



export const ListingCity = () => {

    //1 parent ac48d80 commit 41069db
    const [searchParams, setSearchParams] = useState("")
    
    return(
        <LayoutBasePage 
        title="Listagem de cidades"
        toolbar={
            
        <ToolListing
        textButtonNew="Nova"
        showInputSearch
        searchText={searchParams}
        whenChangingSearchText={texto => setSearchParams(texto)}
        />}
        >
        </LayoutBasePage>
    )
}