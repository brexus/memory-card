/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import '../styles/Card.css';

export default function Card({
    id, 
    imgURL, 
    title,
    setScore,
    setIsGameOver,
    mixBoard,
    isLoading,
    isMixing,
    setIsMixing
}) {

    const [isCardClicked, setIsCardClicked] = useState(false);

    useEffect(() => {
        if(isCardClicked) {
            setScore(s => s + 1);
            mixBoard(); 
            // setIsMixing(false);
        }

    }, [isCardClicked]);

    
    return (
        <div 
            className="card"
            onClick={() => {
                if(!isCardClicked) {
                    setIsCardClicked(true);
                    // setIsMixing(true);
                } else {
                    setIsGameOver(true);
                }
            }}

            // style={{
            //     transform: isMixing ? "rotate3d(0, 1, 0, 180deg)" : "rotate3d(0, 0, 0, 0deg)",
            //     transition: isMixing ? "0.5s" : "0.5s"
            // }}
        >
            <img src={imgURL} alt="" className="card-img"/>
            <h1 className="card-title">{title}</h1>
        </div>
    );
}
