import React, { Component } from "react";
import data from "../../helpers/data.json"

/* 
Componente que renderiza elementos en base a un array 
*/

function Elemento({url, name}) {
    return(
        <li>
            <a href={url}>{name}</a>
        </li>
    )
}

class RenderizadoElementosClase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            estaciones: ["Primavera", "Verano", "Otoño", "Invierno"],
        };
    }
    render() {
        return (
            <div>
                <h2>Renderizado de elementos</h2>
                <h3>Estaciones del año</h3>
                {this.state.estaciones.map((e) => (
                    <li key={e}>{e}</li>
                ))}
                <h3>frameworks Frontend JavaScript</h3>
               <ul>
                    {
                    data.frameworks.map((e)=>(
                        <Elemento key={e.id} url={e.url} name={e.name}/>
                    ))
                }
               </ul>
            </div>
        );
    }
}

export default RenderizadoElementosClase;
