import React from "react";

// Export nombrado
// export const Nombre
// import {NombreDelComponente} from "./direccion"
// props -> es un objeto
export const Collapse = ({
    question,
    answer,
    id
}) => {
    return (
        <>
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={id} aria-expanded="false" aria-controls={id}>
                {question}
            </button>
            <div className="collapse" id={id}>
                <div className="card card-body">
                    {answer}
                </div>
            </div>
        </>
    )
}

// Todos los archivos pueden tener 1 solo export default
// Export Default
// export deafult NombreComponente

// Import por default
// import NombreQueEscojamosUsar from "./direccion"