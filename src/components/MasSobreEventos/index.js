import React, { Component } from 'react'
/* 
Eventos en React:
- Eventos Sinteticos: es un contenedor de react para contener eventos, para que sean compatibles en los navegadores
- Eventos Naticos: Son todos aquellos eventos naticos del navegador
------------------------------------------------------------------------------------------
- Eventos Personalizados: Es cualquier evento que se asigna a un componente
    Los componentes no son capaces de ejecutar un onClick ya que el onClick solo se puede
    asignar a etiquetas JSX y un componente no es un JSX, pero le podemos pasar el evento mediante prop
    y ejecutarlo internamente en el JSX del componente
*/
function Botton({myOnClick}) {
    return <button onClick={myOnClick}>Botton componente</button>
}
class MasSobreEventos extends Component {
    handleClick = (e, msj) => {
        console.log(e); //Captura de evento sintetico
        console.log(e.nativeEvent); //Captura de evento nativo

        //parametro recibido desde el evento onCLick
        console.log(msj)
    }
    render() {
        return (
            <div>
                <button onClick={(e)=> this.handleClick(e, "hola mundo")}>Saludar</button>
                {/* Evento perzonalizado enviado como prop al componente */}
                <Botton myOnClick={(e)=> this.handleClick(e, "hola mundo")} />
            </div>
        )
    }
}

export default MasSobreEventos