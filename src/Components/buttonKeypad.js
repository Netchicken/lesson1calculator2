import React from 'react'

const ButtonKeypad = (props) => {

    let buttons = [];

    for (let i = 0; i < 10; i++) {
        buttons.push(<button className='digits' onClick={() => props.keyInput(i)} key={(i)}>{i}</button>);
    }
    return (
        <div>{buttons}</div>
    )
}

export default ButtonKeypad;