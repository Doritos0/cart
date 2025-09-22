import {useContext, useState} from "react";
import {FiltersContext} from "../context/filters.jsx";

export function useFiltros(){
    // const [filters, setFilters] = useState({
    //     category: 'all',
    //     minPrice: 0
    // })

    const { filters, setFilters } = useContext(FiltersContext)

    console.log(filters)


    //PRACTICAR
    const filterProducts = (products) =>{
        return products.filter(product =>{
            return(
                product.price >= filters.minPrice &&
                (
                    filters.category == 'all' ||
                    product.category == filters.category
                )

            )})
    }
    //NOTA FILTRO CON 2 RETURNS :SOB:

    return { filterProducts, filters, setFilters}
}
