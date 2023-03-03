import { Button, Popconfirm, notification } from "antd";
import {DeleteOutlined} from "@ant-design/icons" 
import { callEliminarModelo } from "../../callers/callEliminarModelo";



export function BorrarModeloButton({modelo, refreshCallback}){

    const [deleteNotification, contextHandler] = notification.useNotification();

    const eliminarModelo = async () => {

        const sku = modelo.sku

        const success = await callEliminarModelo(modelo)

        if (success){
            deleteNotification['success']({
                message: 'Modelo eliminado',
                description: `El modelo ${sku} fue eliminado exitosamente`
            })
        }
        else{
            deleteNotification['error']({
                message: 'Error',
                description: `Ha ocurrido un error al eliminar el modelo ${sku}`
            })
        }

        refreshCallback()
    } 
    
    
    return(
        <>
         {contextHandler}
        <Popconfirm
                placement='top'
                title={`Estas seguro que desea eliminar el modelo ${modelo.sku}?`}
                okText='Si'
                cancelText='No'
                onConfirm={() => eliminarModelo()}
            >
            <Button
            type="primary"
            icon=<DeleteOutlined />
            style={{ marginBottom: '1.5rem', float: "right" }}
            danger
            >Eliminar
        </Button>
        </Popconfirm>
        </>
    )
}