/* eslint-disable react/prop-types */
import '../styles/GameOver.css'

export default function GameOver({
    setIsGameOver, 
    isGameOver,
    setIsFrontSide,
    loadBoard,
    isWin
}) {
    
    return (
        <div 
            id="gameOver"
            
            onClick={() => {
                loadBoard();
                setIsGameOver(false);
                setIsFrontSide(true);
            }}
            style={{
                display: isGameOver ? "flex" : "none"
            }}
        >
            <p id="gameOver-title">You {(isWin && "Win!") || (!isWin && "Lost!")}</p>

            <button id="gameOver-btn">
                Play again!
            </button>
            
        </div>
    );
}
