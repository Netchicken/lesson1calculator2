import React from 'react'

const ButtonKeypad = (props) => {
    let buttons = []; //create an array of buttons
    for (let i = 0; i < 10; i++) { //add the counter 1,2,3,4 to the buttons array
        buttons.push(<button className='digits' onClick={() => props.keyInput(i)} key={(i)}>{i}</button>);
    }
    return (
        <div>{buttons}</div> //return back the buttons
    )
}
export default ButtonKeypad;