import React, { useState, useTransition } from 'react'

const FuncionesDeConversion = ({ mandando }) => {

    const [varificador, setVerificador] = useState(false)

    const seleccion = (recibido) => {
        if (recibido != 'Seleccione') {
            return 'varificacion valida'
        }

    }

    const datos = [
        { longitud: 'metros', id: 1 },
        { longitud: 'millas', id: 2 },
        { longitud: 'centimetros', id: 3 },
        { longitud: 'kilometros', id: 4 },
        { longitud: 'hectareas', id: 5 },
    ]

    const verificador = (presion) => {
        if (presion == 'presionado') setVerificador(!varificador)
    }

    console.log(varificador);

    return (

        <div>

            <button onClick={() => verificador('presionado')}>presion</button>
            {varificador && (

                datos.map(informacion => {
                    return (
                        <div key={informacion.id}>
                            <ul style={{listStyle:'none'}}>
                            </ul>
                        </div>

                    )
                })
            )


            }

            <h1>{seleccion(mandando)}</h1>

        </div>

    )
}

export default FuncionesDeConversion