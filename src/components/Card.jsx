import React from "react";
import './Card.css'

const Card = ({ question, answer, isFlipped, setIsFlipped }) => {
    return (
        <div>
            <div className="card-element" onClick={() => setIsFlipped(!isFlipped)}>
                {isFlipped ? answer : question}
            </div>
        </div>
    );
};

export default Card;
