/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import '../styles/Card.css';

export default function Card({
    // eslint-disable-next-line no-unused-vars
    id, 
    imgURL, 
    title,
    score,
    setScore,
    setIsGameOver,
    mixBoard,
    isFrontSide,
    setIsFrontSide,
    numberOfCards,
    setIsWin
}) {

    const [isCardClicked, setIsCardClicked] = useState(false);

    useEffect(() => {

        // Karta ma status klikniętej, 
        if(isCardClicked) {
            setScore(s => s + 1);

            // Kliknięto już wszystkie karty poprawnie === wygrana
            if(score + 1 === numberOfCards) {
                setIsWin(true);
                setIsGameOver(true);
                
            // Gramy dalej
            } else {
                mixBoard();
                setTimeout(() => {
                    setIsFrontSide(true);
                }, 1000);
            }
        }

    }, [isCardClicked]);


    return (
        <div 
            className="card"

            onClick={() => {
                setIsFrontSide(false);
                
                // Karta nie była kliknięta, więc dostaje status klikniętej
                if(!isCardClicked) {
                    setIsCardClicked(true);

                // Karta już była kliknięta === przegrana
                } else {
                    setIsGameOver(true);
                    setIsWin(false);
                }
            }}

            style={{
                transform: isFrontSide ? "rotateY(0)" : "rotateY(180deg)",
                transition: "ease 1s",
            }}
        >
            <img 
                src={imgURL} 
                alt="" 
                className="card-img"
                style={{display: isFrontSide ? "flex" : "none"}}
            />

            <h1 
                className="card-title"
                style={{display: isFrontSide ? "flex" : "none"}}
            >
                {title}
            </h1>

            <img 
                src="pokeball.png" 
                style={{
                    width: "100px",
                    display: isFrontSide ? "none" : "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            />
        </div>
    );
}
