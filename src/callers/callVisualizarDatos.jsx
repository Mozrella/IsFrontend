import axios from "axios"
import { urlConstants } from "../constants/urlConstants"

export async function callVisualizarDatos(numeroDeOrden) {

    const url = `${urlConstants.url}${urlConstants.visualizarDatosPath}/${numeroDeOrden}`

    const headers = {
        "Authorization": `Basic ${urlConstants.basicToken}`
    }

    try {
        const response = await axios.get(url, {
            headers: headers
        })

        console.log(response.data)

        const datos = response.data 

            return {
                nroOrden: datos.nroOrden,
                modelo: {
                    nombre: datos.nombreModelo,
                    sku: datos.skuModelo,
                },
                color: "",
                paresPrimera: datos.paresPrimera,
                defectosObservado: datos.defObs,
                defectosObservadoMin: datos.limiteInfObsModelo,
                defectosObservadosMax: datos.limiteSupObsModelo,
                defectosReproceso: datos.defRep,
                defectosReprocesoMin: datos.limiteInfRepModelo,
                defectosReprocesoMax: datos.limiteSupRepModelo,
                estadoOrden: datos.estadoOrden,
                fechaInicio: datos.fechaInicio,
                nroLinea: datos.nroLinea,
                semaforoObservado: datos.semaforoObservado,
                semaforoReproceso: datos.semaforoReproceso
            }
    }catch(error){
        console.log(error)
        return {}
    }
}