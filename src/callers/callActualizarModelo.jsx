import axios from "axios";
import { urlConstants } from "../constants/urlConstants";

export async function callActualizarModelo(modelo) {

    const headers = {
        "Authorization": `Basic ${urlConstants.basicToken}`
    }

    const url = `${urlConstants.url}${urlConstants.modeloPath}${modelo.sku}`

    const payload = {
        sku: Number(modelo.sku),
        descripcion: modelo.descripcion,
        limiteSupO: Number(modelo.limiteSuperiorObservado),
        limiteInfO: Number(modelo.limiteInferiorObservado),
        limiteSupR: Number(modelo.limiteSuperiorReproceso),
        limiteInfR: Number(modelo.limiteInferiorReproceso),
    }

    try {
        const response = await axios.put(url, payload, {
            headers: headers
        })

        return (response.status == 200 && response.data === 'El modelo fue actualizado correctamente') ? true : false

    } catch (error) {
        console.log(error)
        return false;
    }

}