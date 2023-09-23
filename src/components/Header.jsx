import '../styles/Header.css'

// eslint-disable-next-line react/prop-types
export default function Header({score, bestScore}) {
    
    return (
        <div id="header">
            <h1>Memory Card</h1>

            <div id="scoreboard">
                <p>Score: <span>{score}</span></p>
                <p>Best Score: <span>{bestScore}</span></p>
            </div>
        </div>
    );
}
