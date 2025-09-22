import './Filters.css'
import {useState, useId} from "react";
import { useFiltros } from "../hooks/useFiltros.jsx";

export function Filters(){

    const { filters,setFilters } = useFiltros()

    const minPriceFilterID = useId()
    const categoryFilterID = useId()

    const handleMinPrice = (event) =>{
        setFilters(prevState =>({
            ...prevState,
            minPrice: event.target.value
        }))
        console.log("nuevo precio minimo ", event.target.value)
    }

    const handleCategory = (e) =>{
        setFilters(prevState =>({
            ...prevState,
            category: e.target.value
        }))
        console.log("nueva categoria ",e.target.value)
    }

    //PREVSTATE CON 3 PUNTOS HACE UNA COPIA DE LAS PROPIEDADES DEL ESTADO
    //Y SOBREESCRIBE SOLO LA PROPIEDAD QUE CAMBIA


    return (
        <section className='filters'>
            <div>
                <label htmlFor={minPriceFilterID}>
                    Precio
                </label>
                    <input
                    type='range'
                    id={minPriceFilterID}
                    min='0'
                    max='1000'
                    value={filters.minPrice}
                    onChange={handleMinPrice}
                    />
                <span>{ filters.minPrice }</span>
            </div>
            <div>
                <label htmlFor={categoryFilterID}>
                    Categoria
                </label>
                <select id={categoryFilterID} onChange={handleCategory}>
                    <option value='all'>Todas</option>
                    <option value='mobile-accessories'>Accesorios Movil.</option>
                    <option value='beauty'>Belleza</option>
                    <option value='groceries'>Comestibles</option>
                </select>
            </div>
        </section>
    )
}