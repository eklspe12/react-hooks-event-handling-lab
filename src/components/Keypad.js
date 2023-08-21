import React from 'react';


function handleClick (){
    console.log('Entering password...')
}

function Keypad (){
    return (
        <div><input type ="password" onChange={handleClick}/></div>
    )
}

export default Keypad;