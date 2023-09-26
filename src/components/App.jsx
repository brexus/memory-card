import { useEffect, useState } from 'react'
import '../styles/App.css'
import Header from './Header'
import Board from './Board';

export default function App() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [numberOfCards, setNumberOfCards] = useState(6);
    const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(true);
        let newBoard = [];

        let usedIDs = [];
        let i = 0;
        while(i < numberOfCards) {
            const number = getRandomID();

            if(!(usedIDs.includes(number))) {
                usedIDs.push(number);
                const pokemon = await getPokemon(number);
                newBoard[i] = pokemon;
                i++;
            }
        }

        setBoard(newBoard);
        setIsLoading(false);
    }


    const mixBoard = () => {
        let copyBoard = [...board];

        for (let i = copyBoard.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = copyBoard[i];
          copyBoard[i] = copyBoard[j];
          copyBoard[j] = temp;
        }
        setBoard(copyBoard);
    }

    useEffect(() => {
        loadBoard();
    }, []);

    useEffect(() => {
        if(isGameOver) {
            if(score > bestScore) setBestScore(score);
            setScore(0);
            loadBoard();
        }
    }, [isGameOver]);

    
    return (
        <>
            <Header 
                score={score}
                bestScore={bestScore}
            />

            <Board
                board={board}
                setScore={setScore}
                score={score}
                setBestScore={setBestScore}
                isGameOver={isGameOver}
                setIsGameOver={setIsGameOver}
                mixBoard={mixBoard}
                isLoading={isLoading}

            />
        </>
    );
}
