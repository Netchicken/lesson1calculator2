import { React, useState } from 'react'
import { LogCalculate, LogValue } from './Logs';

import { Calcbutton } from './SingleButton';
import Inputs from './Inputs';
import ButtonKeypad from './buttonKeypad';
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
            <Inputs first={first} second={second} answer={answer} setFirst={setFirst} setSecond={setSecond} ></Inputs>

            <Calcbutton symbol={"+"} calculate={Calculate}></Calcbutton>
            <Calcbutton symbol={"-"} calculate={Calculate}></Calcbutton>
            <Calcbutton symbol={"/"} calculate={Calculate}></Calcbutton>
            <button className='Addbutton' onClick={() => Calculate("*")}>X</button>
            <ButtonKeypad setFirst={setFirst} />
        </div>
    )
}

export default CalcButtons
