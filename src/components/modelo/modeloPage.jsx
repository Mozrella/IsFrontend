import {PlusCircleOutlined} from '@ant-design/icons';
import { Button } from "antd";
import { useRef, useState, useEffect } from 'react';
import { callObtenerModelos } from '../../callers/callObtenerModelos';
import { CrearModeloForm } from './crearModeloForm';
import { EditarModeloButton } from './editarModeloButton';
import { ModeloTable } from "./modeloTable";

export function ModeloPage(){

    const [form, setOpenCreateForm] = useState(false)

    const [refreshKey, setRefreshKey] = useState(0)

    const refreshCallBack = () => {
        setRefreshKey(refreshKey + 1)
    }

    return (
        <>
            <h1>Modelos</h1>
            <Button
                type="primary"
                icon=<PlusCircleOutlined />
                style={{ marginBottom: '1.5rem', float: "right" }}
                onClick={() => setOpenCreateForm(true)}>Nuevo
            </Button>

            <CrearModeloForm
                openCreateForm={form}
                setOpenCreateForm={setOpenCreateForm}
                refreshCallBack={refreshCallBack}
            />
            <ModeloTable 
            refreshKey={refreshKey}
            refreshCallback={refreshCallBack}
            />
        </>
    )
}