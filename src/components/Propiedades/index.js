import propTypes from 'prop-types';
import React from 'react'

//Este es un componente que recibe los distintos tipos
//de props que un componente puede recibir
/*
-string
-number
-boolean
-array
-object
-function
-react element (jsx)
-component
*/
function Propiedades(props) {
    return (
        <div className="">
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.boleano? "verdadero" : "falso"}</li>
                <li>{props.arreglo}</li>
                <li>{props.objeto.nombre}</li>
                <li>{props.arreglo.map(props.funcion)}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componente}</li>
            </ul>
        </div>
    )
}
//De igual manera podemos declarar props pro defecto
//que no necesitan ser recibidos como por ejemplo el props "porDefecto"
Propiedades.defaultProps = {
    porDefecto: "propiedad por defecto"
}
//prop-types es una libreria que nos permite definir el tipo de 
//una prop, y si es requerido o no. "npm install prop-types"
Propiedades.propTypes = {
    numero: propTypes.number.isRequired
}

export default Propiedades;