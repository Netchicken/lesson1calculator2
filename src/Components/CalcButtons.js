import { React, useState } from 'react'
import { LogCalculate, LogValue } from './Logs';

import { Calcbutton } from './SingleButton';
//rafce
const CalcButtons = () => {

    const [answer, setAnswer] = useState("");
    const [first, setFirst] = useState(10);
    const [second, setSecond] = useState(22);


    //Value =  + - / X
    const Calculate = (value) => {
        LogValue(value);

        if (value !== "") {
            switch (value) {
                case "-":

                    setAnswer(first - second);

                    break;
                //Number is needed to make it add and not concatinate
                case "+":
                    setAnswer(Number(first + second));
                    break;
                case "/": setAnswer(first / second);
                    break;
                case "*": setAnswer(first * second);
                    break;
                default: setAnswer("Error");
            }
            LogCalculate(first, second, value)
        }

    }
    return (
        <div>
            <input type="number"
                value={Number(first)}
                onChange={(e) => setFirst(Number(e.target.value))} />
            <input type="number"
                value={Number(second)}
                onChange={(e) => setSecond(Number(e.target.value))} />

            <input type="number" defaultValue={answer} />
            <div>
                <Calcbutton symbol={"+"} calculate={Calculate}></Calcbutton>
                <Calcbutton symbol={"-"} calculate={Calculate}></Calcbutton>
                <Calcbutton symbol={"/"} calculate={Calculate}></Calcbutton>
                <button className='Addbutton' onClick={() => Calculate("*")}>X</button>
            </div>
        </div>
    )
}

export default CalcButtons
