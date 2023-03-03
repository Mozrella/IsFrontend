import { Col, Divider, Row, Spin } from "antd"
import { useEffect, useState } from "react"
import { callVisualizarDatos } from "../../callers/callVisualizarDatos"
import { BuscadorLineaDeOrden } from "./buscadorLineaDeOrden"
import { VisualizadorDeDatos } from "./visualizadorDeDatos"

export function VisualizadorDeDatosPage(){

    const [data, setData] = useState(null)

    const [valorBuscado, setValorBuscado] = useState(0)

    const [spinVisible, setSpinVisible] = useState(false)

    useEffect(() => {
        
        const intervalId = setInterval(async () =>{
            
            setSpinVisible(true)

            if (valorBuscado === 0) return;

            console.log("llamando")

            const response = await callVisualizarDatos(valorBuscado);

            setData(response)

            setSpinVisible(false)
        }, 5000)

        return () => clearInterval(intervalId)
    },[valorBuscado])


    return(
        <>
            <Row>
                <Col span={8}> <BuscadorLineaDeOrden setValorBuscado={setValorBuscado}/> </Col>
                <Col span={8}/>
                <Col span={8}>{(spinVisible)?<Spin tip="Sincronizando"/> : null}</Col>
                <Divider/>
                <Col span={24}>{(data === null )? null : <VisualizadorDeDatos data={data}/>}</Col>
            </Row>
        </>
    )
}