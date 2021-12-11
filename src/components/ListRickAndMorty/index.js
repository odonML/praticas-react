import React, { useEffect, useState } from "react";
import CardRickAndMorty from "./CardRickAndMorty/index";
import "./ListRickAndMorty.css";

function ListRickAndMorty() {
    //creamos estado
    const [personajes, setPersonajes] = useState([]); 

    //useEffect
    useEffect(() => {
        //consumo de api
        fetch("https://rickandmortyapi.com/api/character") 
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const { info, results } = data;
                setPersonajes(results); //actualizacion del estado
            });
    }, []);

    return (
        <div className="personajes-list">
            {/* buse de datos de el estado */}
            {personajes.map(({name, gender, image, episode, url}) => {
                let ep = episode.length;
                return <CardRickAndMorty name={name} gender={gender} img={image} episode={ep} url={url}/> 
            })}
        </div>
    );
}

export default ListRickAndMorty;
