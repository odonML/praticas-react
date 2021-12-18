import React, { useState } from 'react'

function EstadoFuncional() {
    const [state, setState] = useState(false)

    return (
        <div>
            {state ? <h1>Verdadero</h1> : <h1>Falso</h1>}
        </div>
    )
}

export default EstadoFuncional
