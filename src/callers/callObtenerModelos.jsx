import axios from "axios";
import { urlConstants } from "../constants/urlConstants";

export async function callObtenerModelos() {

    console.log('Buscando modelos...')

    const url = `${urlConstants.url}${urlConstants.modeloPath}`

    const headers = {
        "Authorization": `Basic ${urlConstants.basicToken}`
    }

    try {
        const response = await axios.get(url, { headers: headers })

        console.log(response.status)

        if (response.status == 200) {
            const data = response.data

            const modelos = data.map(item => {
                return {
                    sku: item.sku,
                    descripcion: item.descripcion,
                    limiteSuperiorObservado: item.limiteSupO,
                    limiteInferiorObservado: item.limiteInfO,
                    limiteSuperiorReproceso: item.limiteSupR,
                    limiteInferiorReproceso: item.limiteInfR
                }
            })

            console.log('Devolviendo Modelos')

            return modelos;
        }
    } catch (error) {
        console.log(error)
        return []
    }
}