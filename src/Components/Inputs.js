import React from 'react'

const Inputs = (props) => {

    return (
        <div>
            <label>
                {Number(props.first)}   {props.operation}  {Number(props.second)}   {props.answer}
            </label>
        </div>
    )
}

export default Inputs