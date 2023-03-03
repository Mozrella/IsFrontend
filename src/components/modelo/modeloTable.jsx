import { Table, Space } from "antd"
import Column from "antd/es/table/Column"
import { useEffect, useRef, useState } from "react"
import { callObtenerModelos } from "../../callers/callObtenerModelos"
import { BorrarModeloButton } from "./borrarModeloButton"
import { EditarModeloButton } from "./editarModeloButton"

export function ModeloTable({refreshKey, refreshCallback}) {

    const [modelos,setModelos] = useState([])

    useEffect(() => { 
        callObtenerModelos()
            .then(modelos => setModelos(modelos))
    },[refreshKey])

    return (
        <>
            <Table dataSource={modelos}>
                <Column title='SKU' dataIndex='sku' key='sku' />
                <Column title='Descripcion' dataIndex='descripcion' key='descripcion' />
                <Column title='Limite Superior Observado' dataIndex='limiteSuperiorObservado' key='limiteSuperiorObservado' />
                <Column title='Limite Inferior Observado' dataIndex='limiteInferiorObservado' key='limiteInferiorObservado' />
                <Column title='Limite Superior de Reproceso' dataIndex='limiteSuperiorReproceso' key='limiteSuperiorReproceso' />
                <Column title='Limite Inferior de Reproceso' dataIndex='limiteInferiorReproceso' key='limiteInferiorReproceso' />
                <Column title='Acciones' key='actions' render={(_, record) => (
                    <Space size="middle">
                        <EditarModeloButton modelo={record} refreshCallback={refreshCallback}/>
                        <BorrarModeloButton modelo={record} refreshCallback={refreshCallback}/>
                    </Space>
                )} />
            </Table>
        </>
    )
}