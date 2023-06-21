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
    //if its false it goes in the first box, if its true it goes in teh second
    const [trigger, setTrigger] = useState(false);
    const [operation, setOperation] = useState("");

    // let trigger = false;
    // 123 + 567
    const keyInput = (value) => {

        console.log(value + " " + trigger);

        if ((trigger === false)) {
            setFirst(first + String(value));//concatinate the numbers not add them
            console.log("first value", value);
        }

        if ((trigger === true)) {
            setSecond(second + String(value));//concatinate the numbers not add them
        }

    }

    //Value =  + - / X
    const Calculate = (value) => {
        let symbols = ["+", "-", "/", "*"];
        setTrigger(true);
        console.log("trigger run", value + " " + trigger);

        //save the operation we use to calculate
        if (symbols.includes(value)) {
            setOperation(value);
        }
        //if its an equals sign then calculate
        if (value == "=") {
            switch (operation) {
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

            LogCalculate(first, second, operation)
            //reset
            setOperation("");
            setTrigger(false);
        }
    }
    return (
        <div>
            <Inputs first={first} second={second} answer={answer} setFirst={setFirst} setSecond={setSecond} ></Inputs>

            <Calcbutton symbol={"+"} calculate={Calculate}></Calcbutton>
            <Calcbutton symbol={"-"} calculate={Calculate}></Calcbutton>
            <Calcbutton symbol={"/"} calculate={Calculate}></Calcbutton>

            <button className='Addbutton' onClick={() => Calculate("*")}>X</button>
            <Calcbutton symbol={"="} calculate={Calculate}></Calcbutton>
            <div className='digits'>
                <ButtonKeypad keyInput={keyInput} />
            </div>
        </div>
    )
}

export default CalcButtons
