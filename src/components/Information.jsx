/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../styles/Information.css';

export default function Information() {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <>
            <button 
                id="information-btn"
                onClick={() => {setIsClicked(current => !current)}}
            >
                {isClicked && "x"}
                {!isClicked && "?"}
            </button>

            <div
                id="information"
                style={{
                    // display: isClicked ? "flex" : "none"
                }}
                className={isClicked ? "slide-up" : "slide-down"}
            >
                <p id="information-text">Don&apos;t click on the same card twice!</p>
                <img id="information-img" src="ash.png" alt="" />
            </div>
        </>
    );
}
