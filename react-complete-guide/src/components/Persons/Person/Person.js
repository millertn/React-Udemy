import React from 'react';
// import Radium from 'radium';
// import styled from 'styled-components';
import './Person.css';

const person = (params) => {
    console.log('[Person.js] rendering... ');
    return (
        
        <div className="Person" onClick={params.click}>
            <p>I'm a person, my name is {params.name}, I am {params.age}.</p>
            <p>{params.children}</p>    
            <input type="text" onChange={params.changed} value={params.name} />     
        </div>  
    );
}

// export default Radium(person);
export default person;