import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ISLayout } from "../components/ISLayout";
import { ModeloPage } from "../components/modelo/modeloPage";
import { VisualizadorDeDatosPage } from "../components/visualizadorDeDatos/visualizadorDeDatosPage";

export const isRouter = createBrowserRouter(
    [
        {
            path: '',
            element: <ISLayout/>,
            children: [
            {
                path: '/home',
                element: (<>MAIN PAGE</>)
            },
            {
                path: '/modelo',
                element: <ModeloPage/>
            },
            {
                path: '/visualizar',
                element: <VisualizadorDeDatosPage/>
            }
        ]
        }
    ]
)