import React from 'react'

const userInput = (params) => {
    return (
        <input style={params.style} onChange={params.changed} type='text' value={params.userName} />
    );
}

export default userInput;