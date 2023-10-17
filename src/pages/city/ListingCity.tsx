import { ToolListing } from "../../shared/components"
import { LayoutBasePage } from "../../shared/layouts"
import { useState } from "react"



export const ListingCity = () => {

    const [searchParams, setSearchParams] = useState("")
    console.log(searchParams)


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