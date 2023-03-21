import { Card, Col, Row, Statistic } from "antd";
import Column from "antd/es/table/Column";
import './visualizarDeDatos.css';

export function VisualizadorDeDatos({data}){
    const colors = {
        ROJO: '#F53022',
        AMARILLO: '#E0F53B',
        VERDE: '#17fc03',
        NEUTRO: '#121D1F'
    };

    const topColorReproceso = data.semaforoReproceso === 'ROJO' ? colors.ROJO : colors.NEUTRO;
    const middleColorReproceso = data.semaforoReproceso === 'AMARILLO' ? colors.AMARILLO : colors.NEUTRO;
    const bottomColorReproceso = data.semaforoReproceso === 'VERDE' ? colors.VERDE : colors.NEUTRO;
    
    const topColorObservados = data.semaforoObservado === 'ROJO' ? colors.ROJO : colors.NEUTRO;
    const middleColorObservados = data.semaforoObservado === 'AMARILLO' ? colors.AMARILLO : colors.NEUTRO;
    const bottomColorObservados = data.semaforoObservado === 'VERDE' ? colors.VERDE : colors.NEUTRO;

    return(
        <>    
            <Row>
                <Col span={6}>
                    <Card bordered={false}>
                        <Statistic title="Numero de Orden" value={data.nroOrden} valueStyle={{fontSize: 25, marginBottom: 2}}/>
                    </Card>
                </Col>
                <Col span={6}>
                        <Statistic title="Estado" value={data.estadoOrden} valueStyle={{fontSize: 18, marginBottom: 2}}/>
                        <Statistic
                            title="Pares de primera"
                            value={data.paresPrimera}
                            precision={0}
                            valueStyle={{fontSize: 18, marginBottom: 2}}
                        />
                </Col>
                <Col span={6}>
                        <Statistic title="Fecha de Inicio" value={data.fechaInicio} valueStyle={{fontSize: 18, marginBottom: 2}}/>
                        <Statistic title="Modelo" value={data.modelo.nombre} valueStyle={{fontSize: 18, marginBottom: 2}}/>
                </Col>
                <Col span={6}>
                        <Statistic title="Sku" value={data.modelo.sku} valueStyle={{fontSize: 18, marginBottom: 2}}/>
                        <Statistic title="Color Elegido" value={data.color} valueStyle={{fontSize: 18, marginBottom: 2}}/>
                </Col>
            </Row>  


            <Row>
                <Col span={12}>
                    <Card bordered={true}>
                        <h1>Semaforo observados</h1>
                        <div className="semaforo">
                            <div className="circulo" style={{ background: data.semaforoObservado === 'ROJO' ? colors.ROJO : colors.NEUTRO }}></div>
                            <div className="circulo" style={{ background: data.semaforoObservado === 'AMARILLO' ? colors.AMARILLO : colors.NEUTRO }}></div>
                            <div className="circulo" style={{ background: data.semaforoObservado === 'VERDE' ? colors.VERDE : colors.NEUTRO }}></div>
                        </div>
                        <Statistic
                            title="Defectos Observados"
                            value={data.defectosObservado}
                            valueStyle={{ 
                                color: (data.defectosObservado < data.defectosObservadoMin)? '#38d61c'
                                : (data.defectosObservado <= data.defectosObservadosMax)? '#ebb434': '#cf1322'
                            }}
                            precision={0}
                        />
                    </Card>
                </Col>

                <Col span={12} >
                    <Card bordered={true}>
                    <h1>Semaforo Reproceso</h1>    
                    <div className="semaforo">
                        <div className="circulo" style={{ background: topColorReproceso }}></div>
                        <div className="circulo" style={{ background: middleColorReproceso }}></div>
                        <div className="circulo" style={{ background: bottomColorReproceso }}></div>
                    </div>
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
        </>
    )
}



