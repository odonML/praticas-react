import React, { Component } from 'react'

//La comunicacion de Padre a hijo se realiza mediante props
//podemos mandar datos o mandar una funcion que sera ejecutada en el hijo
class ComunicacionComponentes extends Component {
    render() {
        return (
            <div>
                <h2>Comunicacion Conponentes</h2>
                <Hijo msj="hola mundo" />
            </div>
        )
    }
}
function Hijo({msj}) {
    return <h3>{msj}</h3>
}

export default ComunicacionComponentes
