import React, { Component } from 'react';

//Este es un componente de clase en react
//el cual recibe un prop msj
class ComponenteClase extends Component {
    render(){
        return <h1>{this.props.msj}</h1>
    }
}

export default ComponenteClase;