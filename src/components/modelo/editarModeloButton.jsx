import { Button } from "antd"
import {EditOutlined } from "@ant-design/icons"
import { useState } from "react"
import { EditarModeloForm } from "./editarModeloForm"

export function EditarModeloButton({modelo, refreshCallback}) {

    const [openEditForm, setOpenEditForm] = useState(false)

    console.log(modelo)

    return (
        <>
            <Button
            type="primary"
            icon=<EditOutlined />
            style={{ marginBottom: '1.5rem', float: "right" }}
            onClick={() => setOpenEditForm(true)}>Editar
        </Button>

        <EditarModeloForm
         openEditForm={openEditForm}
         setOpenEditForm={setOpenEditForm}
         data={modelo}
         refreshCallback={refreshCallback}
        />
        </>
        
    )
}