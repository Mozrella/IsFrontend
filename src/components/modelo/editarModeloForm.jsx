import { useState } from "react"
import { Form, Input, notification, Space, Modal } from "antd";
import { callActualizarModelo } from "../../callers/callActualizarModelo";

export function EditarModeloForm({data, openEditForm, setOpenEditForm, refreshCallback}){
    const [sku, setSku] = useState(data.sku);
    const [descripcion, setDescripcion] = useState(data.descripcion);
    const [limiteSuperiorObservado, setLimiteSuperiorObservado] = useState(data.limiteSuperiorObservado);
    const [limiteInferiorObservado, setLimiteInferiorObservado] = useState(data.limiteInferiorObservado);
    const [limiteSuperiorReproceso, setLimiteSuperiorReproceso] = useState(data.limiteSuperiorReproceso);
    const [limiteInferiorReproceso, setLimiteInferiorReproceso] = useState(data.limiteInferiorReproceso);

    const [creationNotification, contextHandler] = notification.useNotification();

    const limpiarCampos = () => {
        setSku('')
        setDescripcion('')
        setLimiteSuperiorObservado(0)
        setLimiteInferiorObservado(0)
        setLimiteSuperiorReproceso(0)
        setLimiteInferiorReproceso(0)
    }

    const handleOk = async () => {

        const modelo = {
            sku: sku,
            descripcion: descripcion,
            limiteSuperiorObservado: limiteSuperiorObservado,
            limiteInferiorObservado: limiteInferiorObservado,
            limiteSuperiorReproceso: limiteSuperiorReproceso,
            limiteInferiorReproceso: limiteInferiorReproceso
        }

        console.log('Imprimiendo nuevo modelo')
        console.log(modelo)

        const success = callActualizarModelo(modelo)

        if(success){
            creationNotification['success']({
                message: 'Modelo Actualizado',
                description: `El modelo ${sku} fue actualizado exitosamente`
            })
        } else {
            creationNotification['error']({
                message: 'Error',
                description: `Fallo la actualizacion del modelo ${sku}`
            })
        }

        limpiarCampos()
        refreshCallback()
        setOpenEditForm(false)
        
    }
    


return (
    <>
        {contextHandler}

        <Modal
            title="Nuevo Modelo"
            centered
            open={openEditForm}
            onOk={() => handleOk()}
            onCancel={() => setOpenEditForm(false)}
        >


            <Form
                name="nuevoModeloForm"
                initialValues={{ remember: true }}
                autoComplete="off">

                <Form.Item
                    label="SKU"
                    name="sku"
                    rules={[{ required: true, message: 'Please input the enterprise name' }]}
                >
                    {data.sku}
                </Form.Item>

                <Form.Item
                    label="Descripción"
                    name="descripcion"
                    rules={[{ required: true, message: 'Please input the enterprise name' }]}
                >
                    <Input onChange={event => setDescripcion(event.target.value)} defaultValue={data.descripcion}/>
                </Form.Item>

                <Form.Item
                    label="Límite superior observado"
                    name="limiteSuperiorObservado"
                    rules={[{ required: true, message: 'Please input the enterprise name' }]}
                >
                    <Input onChange={event => setLimiteSuperiorObservado(event.target.value)} defaultValue={data.limiteSuperiorObservado}/>
                </Form.Item>

                <Form.Item
                    label="Límite inferior observado"
                    name="limiteInferiorObservado"
                    rules={[{ required: true, message: 'Please input the enterprise name' }]}
                >
                    <Input onChange={event => setLimiteInferiorObservado(event.target.value)} defaultValue={data.limiteInferiorObservado}/>
                </Form.Item>

                <Form.Item
                    label="Límite superior de reproceso"
                    name="limiteSuperiorReproceso"
                    rules={[{ required: true, message: 'Please input the enterprise name' }]}
                >
                    <Input onChange={event => setLimiteSuperiorReproceso(event.target.value)} defaultValue={data.limiteSuperiorReproceso}/>
                </Form.Item>

                <Form.Item
                    label="Límite inferior de reproceso"
                    name="limiteInferiorReproceso"
                    rules={[{ required: true, message: 'Please input the enterprise name' }]}
                >
                    <Input onChange={event => setLimiteInferiorReproceso(event.target.value)} defaultValue={data.limiteInferiorReproceso}/>
                </Form.Item>

            </Form>

        </Modal>
    </>)
}