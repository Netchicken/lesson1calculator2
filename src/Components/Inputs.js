import React from 'react'

const Inputs = (props) => {

    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 0 0" width="0" height="0" style="display:none;">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                    </filter>
                </defs>
            </svg>

            <div class="goo">
                <h1>{Number(props.first)}   {props.operation}  {Number(props.second)}   {props.answer}</h1>
                <div class="drop"></div>
                <div class="drop"></div>
                <div class="drop"></div>
                <div class="drop"></div>
                <div class="drop"></div>
                <div class="drop"></div>
            </div>


        </div>
    )
}

export default Inputs