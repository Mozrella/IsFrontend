import { Input } from "antd";
import { useState } from "react";

const {Search} =  Input



export function BuscadorLineaDeOrden({setValorBuscado}){

    const [numeroDeOrden, setNumeroDeOrden] = useState(0)

    const onSearch = () => {
        console.log(`Buscando numero de linea ${numeroDeOrden}`)
        setValorBuscado(numeroDeOrden)
    }


    return(
        <>
            <Search
                placeholder="Ingrese numero de linea"
                onSearch={onSearch}
                onChange={event => Number(setNumeroDeOrden(event.target.value))}
            />
        </>
    )
}