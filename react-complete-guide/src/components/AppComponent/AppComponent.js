import React from 'react';

const appComponent = (params) => {
    return (
        <div className="Person">
            <input type="text" onChange={params.changed} />      
            <p>The number of characters you entered: {params.length}</p>    
            <p></p>    
        </div>
    );
}

export default appComponent;