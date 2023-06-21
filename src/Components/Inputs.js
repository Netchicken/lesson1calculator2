import React from 'react'

const Inputs = (props) => {
    return (
        <div>
            <input type="number"
                value={Number(props.first)}
                onChange={(e) => props.setFirst(Number(e.target.value))} />
            <input type="number"
                value={Number(props.second)}
                onChange={(e) => props.setSecond(Number(e.target.value))} />

            <input type="number" defaultValue={props.answer} />
        </div>
    )
}

export default Inputs