
import React from 'react'

export const SingleButton = (props) => {
    return (
        <span>
            <button className='Addbutton' onClick={() => props.calculate(props.symbol)}>{props.symbol}</button>
        </span>
    )
}
