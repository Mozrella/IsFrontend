import axios from "axios";
import { urlConstants } from "../constants/urlConstants";

export async function callEliminarModelo(modelo) {

    const headers = {
        "Authorization": `Basic ${urlConstants.basicToken}`
    }

    const url = `${urlConstants.url}${urlConstants.modeloPath}${modelo.sku}`

    console.log("DELETE URL " + url)

    try {

        const response = await axios.delete(url, {
            headers: headers
        })

        return (response.status === 200 && response.data === 'El modelo fue eliminado') ? true : false
    } catch (error) {
        console.log(error)
        return false
    }

}