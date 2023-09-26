/* eslint-disable react/prop-types */
import Card from './Card';
import '../styles/Board.css';

export default function Board({
    board,
    setScore,
    score,
    setBestScore,
    isGameOver,
    setIsGameOver,
    mixBoard,
    isLoading,
    isMixing,
    setIsMixing
}) {



    return (
        <>
            <div 
                id="board"
                style={{
                    display: isLoading ? "none" : "grid"
                }}
            >
                
                {board.map((card) => {
                    return (
                        <Card
                            key={card.id}
                            id={card.id}
                            imgURL={card.imgURL}
                            title={card.name}
                            setBestScore={setBestScore}
                            setScore={setScore}
                            score={score}
                            isGameOver={isGameOver}
                            setIsGameOver={setIsGameOver}
                            mixBoard={mixBoard}
                            isLoading={isLoading}
                            isMixing={isMixing}
                            setIsMixing={setIsMixing}
                        />
                    );
                })}

            </div>

            <div
                id="loading-svg"
                style={{
                    display: isLoading ? "flex" : "none"
                }}
            >
                <svg width="100px" version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
                        <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                        <animateTransform 
                            attributeName="transform" 
                            attributeType="XML" 
                            type="rotate"
                            dur="1s" 
                            from="0 50 50"
                            to="360 50 50" 
                            repeatCount="indefinite" />
                    </path>
                </svg>
            </div>

        </>
    );
}
