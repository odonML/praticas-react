import React, { Component } from 'react'

/*
Componente de clase con eventos y binding
binding: pasarle el this de la clase a los metodos para que tengan el contexto del this
*/

class EventosES6 extends Component {
    constructor(props){
        super(props);
        this.state = {
            contador: 0
        }
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }
    sumar(){
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar(){
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render() {
        return (
            <div>
                <h2>Eventos en EventosES6</h2>
                <nav>
                    <button onClick={this.sumar}> + </button>
                    <button onClick={this.restar}> - </button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}

export default EventosES6;