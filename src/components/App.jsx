import { useState } from 'react'
import '../styles/App.css'
import Header from './Header'
import Board from './Board';

export default function App() {
    // eslint-disable-next-line no-unused-vars
    const [score, setScore] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const [bestScore, setBestScore] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const [numberOfCards, setNumberOfCards] = useState(5);
    // eslint-disable-next-line no-unused-vars
    const [clicked, setClicked] = useState([]);

    return (
        <>
            <Header 
                score={score}
                bestScore={bestScore}
            />

            <Board 
                score={score}
                bestScore={bestScore}
                numberOfCards={numberOfCards}
                clicked={clicked}
                setClicked={setClicked}
            />
        </>
    );
}
