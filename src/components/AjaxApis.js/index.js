import React, { Component } from 'react'

/*
Este es uno de los usos del metodo componentDidMount
nos sirve para ejecutar las peticiones asincronas
porque cuando este metodo se ejecuta el componente ya existe en el DOM
*/

function Pokemon({avatar, name}) {
    return <figure>
        <img src={avatar} alt={name} />
        <figcaption>{name}</figcaption>
    </figure>
}

class AjaxApis extends Component {
    state = {
        pokemons: []
    }

    componentDidMount(){
        let url = "https://pokeapi.co/api/v2/pokemon"
        fetch(url).then(res => res.json()).then(({results}) => {
            results.forEach((el) => {
                fetch(el.url).then(res=> res.json()).then(({id, name, sprites}) => {
                    let pokemon = {
                        id, 
                        name,
                        avatar: sprites.front_default
                    }
                    let pokemons  = [...this.state.pokemons, pokemon]
                    this.setState({
                        pokemons
                    })
                })
            })
        });
    }

    render() {
        return (
            <div>
                <h2>Peticiones asincronas en componente de clase</h2>
                {
                    this.state.pokemons.map((pokemon)=>{
                        return <Pokemon key={pokemon.id} avatar={pokemon.avatar} name={pokemon.name}/>
                    })
                }
            </div>
        )
    }
}

export default AjaxApis
