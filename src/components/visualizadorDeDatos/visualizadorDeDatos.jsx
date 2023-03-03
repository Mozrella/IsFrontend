import { Card, Col, Result, Row, Space, Statistic } from "antd";


const colorRelation = {
    'ROJO': 'error',
    'AMARILLO': 'warning',
    'VERDE': 'success'
}

export function VisualizadorDeDatos({data}){

    return(
        <Row gutter={16}>
            <Col span={12} style={{marginBottom: 8}}>
                <Card bordered={false}>
                    <h1>Numero de Orden: {data.nroOrden}</h1>
                    <h1>Estado: {data.estadoOrden}</h1>
                    <h1>Fecha de Inicio: {data.fechaInicio}</h1>
                </Card>
            </Col>
            <Col span={12} style={{marginBottom: 8}}>
                <Card bordered={false}>
                    <h1>Modelo: {data.modelo.nombre}</h1>
                    <h1>Sku: {data.modelo.sku}</h1>
                    <h1>Color Elegido: {data.color}</h1>
                </Card>
            </Col>
            <Col span={12} style={{marginBottom: 8}}>
                <Card bordered={false}>
                    <Result
                        status={colorRelation[data.semaforoObservado]}
                        title="Semaforo Observado"
                    />
                </Card>
            </Col>

            <Col span={12} style={{marginBottom: 8}}>
                <Card bordered={false}>
                <Result
                        status={colorRelation[data.semaforoReproceso]}
                        title="Semaforo Reproceso"
                    />
                </Card>
            </Col>
            <Col span={8} style={{marginBottom: 8}}>
                <Card bordered={false}>
                    <Statistic
                        title="Pares de primera"
                        value={data.paresPrimera}
                        precision={0}
                    />
                </Card>
            </Col>
            <Col span={8} style={{marginBottom: 8}}>
                <Card bordered={false}>
                    <Statistic
                        title="defectosObservado"
                        value={data.defectosObservado}
                        valueStyle={{ 
                            color: (data.defectosObservado < data.defectosObservadoMin)? '#38d61c'
                            : (data.defectosObservado <= data.defectosObservadosMax)? '#ebb434': '#cf1322'
                        }}
                        precision={0}
                    />
                </Card>
            </Col>
            <Col span={8} style={{marginBottom: 8}}>
                <Card bordered={false}>
                    <Statistic
                        title="Defectos Reproceso"
                        value={data.defectosReproceso}
                        valueStyle={{ 
                            color: (data.defectosReproceso < data.defectosReprocesoMin)? '#38d61c'
                            : (data.defectosReproceso <= data.defectosReprocesoMax)? '#ebb434': '#cf1322'
                        }}
                        precision={0}
                    />
                </Card>
            </Col>
        </Row>
    )
}