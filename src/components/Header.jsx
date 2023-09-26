/* eslint-disable react/prop-types */
import '../styles/Header.css'

export default function Header({
    score,
    bestScore
}) {
    
    return (
        <div id="header">
            <div id="title-icon">
                <h1>Memory Card</h1>
                <img src="pokemon.svg" alt="" />
            </div>
            

            <div id="scoreboard">
                <p>Score: <span>{score}</span></p>
                <p>Best Score: <span>{bestScore}</span></p>
            </div>
        </div>
    );
}
