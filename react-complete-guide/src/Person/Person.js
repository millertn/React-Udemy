import React from 'react';
// import Radium from 'radium';
// import styled from 'styled-components';
import './Person.css';

const person = (params) => {
    // const style = {
    //     '@media(min-width: 500px)' : {
    //         width: '450px'
    //     }
    // };
    // const StyledDiv = styled.div`
    //     width:60%;
    //     margin:16px auto;
    //     border:1px solid #eee;
    //     box-shadow: 0 2px 3px #ccc;
    //     padding :16px;
    //     text-align:center;

    //     @media (min-width: 1000px) {
    //         width: 450px
    //     }            
    // `;
    return (
        //  {/* // <StyledDiv onClick={params.click}> */}
        // {/* <div onClick={params.click}>       */}
        
        <div className="Person" onClick={params.click}>
            <p>I'm a person, my name is {params.name}, I am {params.age}.</p>
            <p>{params.children}</p>    
            <input type="text" onChange={params.changed} value={params.name} />     
        </div>  
        // </StyledDiv>
        // </div>
    );
}

// export default Radium(person);
export default person;