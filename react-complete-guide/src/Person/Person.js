import React from 'react';
import './Person.css';

const person = (params) => {
    return (
        <div className="Person" onClick={params.click}>
            <p>I'm a person, my name is {params.name}, I am {params.age}.</p>
            <p>{params.children}</p>    
            <input type="text" onChange={params.changed} value={params.name} />       
        </div>
    );
}

export default person;