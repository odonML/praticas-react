import React from 'react';

class EstadoClase extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            contador: 0
        }
        setInterval(()=>{
            this.setState({
                contador: this.state.contador + 1
            })
        }, 1000)
    }
    render() { 
        return <div>
            <h2>el estado es {this.state.contador}</h2>
        </div>;
    }
}
 
export default EstadoClase;