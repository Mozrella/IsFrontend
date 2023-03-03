import { useState } from "react"
import { Form, Input, notification, Space, Modal } from "antd";
import { callCrearModelo } from "../../callers/crearModelo";

export function CrearModeloForm({ openCreateForm, setOpenCreateForm, refreshCallBack }) {
    const [sku, setSku] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [limiteSuperiorObservado, setLimiteSuperiorObservado] = useState(0);
    const [limiteInferiorObservado, setLimiteInferiorObservado] = useState(0);
    const [limiteSuperiorReproceso, setLimiteSuperiorReproceso] = useState(0);
    const [limiteInferiorReproceso, setLimiteInferiorReproceso] = useState(0);

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

        const success = await callCrearModelo(modelo)

        if(success){
            creationNotification['success']({
                message: 'Nuevo modelo creado',
                description: `El modelo ${sku} fue creado exitosamente`
            })
        }else{
            creationNotification['error']({
                message: 'Algo fallo durante la creacion del modelo',
                description: `El modelo ${sku} no pudo ser creado`
            })
        }

        limpiarCampos()
        setOpenCreateForm(false)
        refreshCallBack()
        
    }
    


return (
    <>
        {contextHandler}

        <Modal
            title="Nuevo Modelo"
            centered
            open={openCreateForm}
            onOk={() => handleOk()}
            onCancel={() => setOpenCreateForm(false)}
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
                    <Input onChange={event => setSku(event.target.value)} />
                </Form.Item>

                <Form.Item
                    label="Descripción"
                    name="descripcion"
                    rules={[{ required: true, message: 'Please input the enterprise name' }]}
                >
                    <Input onChange={event => setDescripcion(event.target.value)} />
                </Form.Item>

                <Form.Item
                    label="Límite superior observado"
                    name="limiteSuperiorObservado"
                    rules={[{ required: true, message: 'Please input the enterprise name' }]}
                >
                    <Input onChange={event => setLimiteSuperiorObservado(event.target.value)} />
                </Form.Item>

                <Form.Item
                    label="Límite inferior observado"
                    name="limiteInferiorObservado"
                    rules={[{ required: true, message: 'Please input the enterprise name' }]}
                >
                    <Input onChange={event => setLimiteInferiorObservado(event.target.value)} />
                </Form.Item>

                <Form.Item
                    label="Límite superior de reproceso"
                    name="limiteSuperiorReproceso"
                    rules={[{ required: true, message: 'Please input the enterprise name' }]}
                >
                    <Input onChange={event => setLimiteSuperiorReproceso(event.target.value)} />
                </Form.Item>

                <Form.Item
                    label="Límite inferior de reproceso"
                    name="limiteInferiorReproceso"
                    rules={[{ required: true, message: 'Please input the enterprise name' }]}
                >
                    <Input onChange={event => setLimiteInferiorReproceso(event.target.value)} />
                </Form.Item>

            </Form>

        </Modal>
    </>
)}
