import React from 'react'
import '../drip.scss'


//https://codepen.io/jeffmccarthyesq/pen/vYVdRvN
//https://create-react-app.dev/docs/adding-a-sass-stylesheet/


const Inputs = (props) => {

    return (
        <div>



            <div className="goo">
                <h1>{Number(props.first)}   {props.operation}  {Number(props.second)}   {props.answer}</h1>
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