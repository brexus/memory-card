/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import '../styles/Card.css';

export default function Card({
    id, 
    imgURL, 
    title,
    setScore,
    setIsGameOver,
    mixBoard
}) {

    const [isCardClicked, setIsCardClicked] = useState(false);

    useEffect(() => {
        if(isCardClicked) {
            setScore(s => s + 1);
            mixBoard();
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
        >
            <img src={imgURL} alt="" className="card-img"/>
            <h1 className="card-title">{title}</h1>
        </div>
    );
}
