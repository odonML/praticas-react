import React, { Component } from 'react'

/*
Componente con Property Initializer
(nos evita hacer el binding)
*/
class EventosES7 extends Component {

        state = {
            contador: 0
        }

    sumar = () =>{
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar = () => {
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render() {
        return (
            <div>
                <h2>Eventos en EventosES7</h2>
                <nav>
                    <button onClick={this.sumar}> + </button>
                    <button onClick={this.restar}> - </button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}

export default EventosES7;