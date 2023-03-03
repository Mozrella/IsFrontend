import axios from "axios";
import { urlConstants } from "../constants/urlConstants";

export async function callCrearModelo(modelo) {

    const headers = {
        "authorization": `Basic ${urlConstants.basicToken}`
    }

    let payload = {
        sku: Number(modelo.sku),
        descripcion: modelo.descripcion,
        limiteSupO: Number(modelo.limiteSuperiorObservado),
        limiteInfO: Number(modelo.limiteInferiorObservado),
        limiteSupR: Number(modelo.limiteSuperiorReproceso),
        limiteInfR: Number(modelo.limiteInferiorReproceso),
    }

    console.log(payload)

    let url = `${urlConstants.url}${urlConstants.modeloPath}`

    console.log(url)

    try {

        const response = await axios.post(url, payload, {
            headers: headers
        })

        console.log(response.data)

        return (response.status == 200 && response.data === 'Modelo creado exitosamente') ? true : false
    } catch (error) {

        console.log(error)

        return false

    }
}