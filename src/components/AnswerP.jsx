import React from "react";

function AnswerP(prop){
    return (
        <>
            <div className="answer">
                <h4>{prop.Q}</h4>
                <div className="answer-child">
                    <p>{prop.A}</p>
                </div>
            </div>
        </>
    )
}

export default AnswerP;