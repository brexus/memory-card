/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import '../styles/Card.css';

export default function Card({
    id, 
    imgURL, 
    title,
    score,
    setScore,
    setIsGameOver,
    mixBoard,
    isLoading,
    isMixing,
    setIsMixing,
    numberOfCards
}) {

    const [isCardClicked, setIsCardClicked] = useState(false);

    useEffect(() => {
        if(isCardClicked) {
            setScore(s => s + 1);
            
            if(score + 1 === numberOfCards) {
                setIsGameOver(true);
            } else {
                mixBoard();
            }
            setIsMixing(true);
            setTimeout(() => {setIsMixing(false)}, 1000);
            
        }

    }, [isCardClicked]);

    
    return (
        <div 
            className="card"
            onClick={() => {
                if(!isCardClicked) {
                    setIsCardClicked(true);
                } else {
                    setIsGameOver(true);
                }
            }}

            style={{
                transform: isMixing ? "rotateY(180deg)" : "",
                transition: isMixing ? "0.3s" : "0.3s",
            }}
        >
            <img 
                src={imgURL} 
                alt="" 
                className="card-img"
                style={{display: isMixing ? "none" : "flex"}}
            />

            <h1 
                className="card-title"
                style={{display: isMixing ? "none" : "flex"}}
            >
                {title}
            </h1>

            <img 
                src="pokeball.png" 
                style={{
                    width: "100px",
                    display: isMixing ? "flex" : "none",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            />
        </div>
    );
}
