import React, { Component } from 'react'

class CicloVida extends Component {
    constructor(props){
        super(props)
        this.state = {
            hora: new Date().toLocaleTimeString()
        }
        this.temporizador = null
        console.log(0,"El Componente se inicializo, aun No esta en el DOM");
    }
    //Montaje
    componentDidMount(){
        console.log(1,"El componente ya esta en el DOM");
    }
    //Actualizacion
    componentDidUpdate(){
        console.log(2,"El estado o las props del componente cambiaron")
    }
    //Desmontaje
    componentWillUnmount(){
        console.log(3,"El componente ha sido eliminado del DOM")
    }

    tictac = () =>{
        this.temporizador = setInterval(()=>{
            this.setState({
                hora: new Date().toLocaleTimeString()
            })
        },1000)
    }

    iniciar = () =>{
        this.tictac();
    }

    pausar = () => {
        clearInterval(this.temporizador)
    }

    render() {
        console.log(4,"El Componente se dibuja, o se redibuja por cambios en el DOM");
        return (
            <div>
                <h2>Ciclo de vida de los componentes de clase</h2>
                <h5>{this.state.hora}</h5>
                <button onClick={this.iniciar}>iniciar</button>
                <button onClick={this.pausar}>pausar</button>
            </div>
        )
    }
}

export default CicloVida;
