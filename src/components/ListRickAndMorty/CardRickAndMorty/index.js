import React from "react";
import "./CardRickAndMorty.css"

function CardRickAndMorty({name, gender, img, episode, url}){
    return (
        <div className="card">
            <img className="card-img" src={img}/>
            <div className="card-content">
                <p>Nombre: {name}</p>
                <p>Genero: {gender}</p>
                <p>Episodios: {episode}</p>
            </div>

        </div>
    )
}
export default CardRickAndMorty;