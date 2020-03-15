import React from 'react';

const char = (params) => {
    
    const style = {
        display:"inline-block",
        padding: "16px",
        margin:"16px",
        border:"1px solid black",
        textAlign:'center'
    };

    return (
        <div style={style} onClick = {params.click}>
            {params.character}
        </div>
    );

}
export default char;