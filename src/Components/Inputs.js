import React from 'react'
import '../drip.scss'


//https://codepen.io/jeffmccarthyesq/pen/vYVdRvN
//https://create-react-app.dev/docs/adding-a-sass-stylesheet/


const Inputs = (props) => {

    return (
        <div>
            <div className="drip">{Number(props.first)}   {props.operation}  {Number(props.second)}   {props.answer}</div>
            <div className="goo">
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>
            </div>
        </div>
    )
}

export default Inputs