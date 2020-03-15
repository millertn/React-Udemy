import React from 'react'
import "./UserOutput.css"

const userOutput = (params) => {
    let validationMessage = "Text Long Enough";
    if (params.inputLength <= 5) {
        validationMessage = "Not Long Enough";
    }

    //or a ternary
    //params.inputLength <= 5 ? <p>stuff</p> : <p>more stuff</p>
    return (
        <div className="UserOutput">
            <p>{params.p1}</p>
            <p>{params.inputLength}</p>
            <p>{validationMessage}</p>
        </div>
    );
}

export default userOutput;