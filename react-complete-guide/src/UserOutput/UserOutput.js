import React from 'react'
import "./UserOutput.css"

const userOutput = (params) => {
    return (
        <div className="UserOutput">
            <p>{params.p1}</p>
            <p>{params.userName}</p>
        </div>
    );
}

export default userOutput;