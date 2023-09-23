import { useEffect, useState } from 'react';
import Card from './Card';
import '../styles/Board.css';

// eslint-disable-next-line react/prop-types
export default function Board({score, bestScore, numberOfCards, clicked, setClicked}) {
    const [board, setBoard] = useState([]);

    const POSSIBLE_POKEMONS = 721;

    const getRandomID = () => {
        return Math.floor(Math.random() * POSSIBLE_POKEMONS) + 1;
    };

    async function getPokemon(id) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();

        return {
            id: id,
            name: data.name,
            imgURL: data.sprites.other[`official-artwork`].front_default
        };
    }

    async function loadBoard() {
        let temp = [];
        
        for ( let i = 0; i < numberOfCards; i++) {
            const number = getRandomID();
            const pokemon = await getPokemon(number);
            console.log(pokemon);
            temp[i] = pokemon;
        }

        setBoard(temp);
    }


    

    useEffect(() => {
        loadBoard();
    }, []);
    
    return (
        <div id="board">
            {board.map((card) => {
                return (
                    <Card key={card.id} imgURL={card.imgURL} title={card.name}/>
                );
            })}
        </div>
    );
}
