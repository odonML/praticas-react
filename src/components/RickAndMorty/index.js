import React, { useEffect, useState } from "react";
import CardRickAndMorty from "./CardRickAndMorty/index";
import "./RickAndMorty.css";

function RickAndMorty() {
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const { info, results } = data;
                setPersonajes(results);
            });
    }, []);

    return (
        <div className="personajes-list">
            {personajes.map(({name, gender, image, episode, url}) => {
                let ep = episode.length;
                return <CardRickAndMorty name={name} gender={gender} img={image} episode={ep} url={url}/>
            })}
        </div>
    );
}

export default RickAndMorty;
