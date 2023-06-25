import { React, useState } from 'react'
import { SingleButton } from './SingleButton';
import Inputs from './Inputs';
import ButtonKeypad from './buttonKeypad';

import { LogCalculate, LogValue } from './Logs';
//rafce
const CalcButtons = () => {

    const [answer, setAnswer] = useState("");
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    //if its false it goes in the first box, if its true it goes in the second
    const [trigger, setTrigger] = useState(false);
    const [operation, setOperation] = useState(""); //what operation are we using?  +-/*


    // 123 + 567
    const keyInput = (value) => {

        console.log(value + " " + trigger);

        if (trigger === false) {
            setFirst(Number(first + String(value)));//concatinate the numbers then save as number
            console.log("first value", value);
        }

        if (trigger === true) {
            setSecond(Number(second + String(value)));//concatinate the numbers then save as number
        }

    }

    //Value =  + - / X
    const Calculate = (value) => {


        console.log("trigger run", value + " " + trigger);

        //save the operation we use to calculate   
        let symbols = ["+", "-", "/", "*"];
        if (symbols.includes(value)) { //yay its  asymbol
            setOperation(value); //save it to setoperation 
            setTrigger(true);
        }

        //if its an equals sign then calculate
        if (value == "=") {
            switch (operation) {
                case "-":
                    setAnswer(" = " + Number(first - second));
                    break;
                //Number is needed to make it add and not concatinate
                case "+":
                    setAnswer(" = " + Number(first + second));
                    break;
                case "/":
                    setAnswer(" = " + Number(first / second));
                    break;
                case "*":
                    setAnswer(" = " + Number(first * second));
                    break;
                default:
                    setAnswer("Error");
            }
            //reset
            setTrigger(false);
        }
    }
    return (
        <div>
            <Inputs first={first} second={second} operation={operation} answer={answer} setFirst={setFirst} setSecond={setSecond} ></Inputs>

            <SingleButton symbol={"+"} calculate={Calculate}></SingleButton>
            <SingleButton symbol={"-"} calculate={Calculate}></SingleButton>
            <SingleButton symbol={"/"} calculate={Calculate}></SingleButton>
            {/* <SingleButton symbol={"*"} calculate={Calculate}>X</SingleButton> */}
            <button className='Addbutton' onClick={() => Calculate("*")}>X</button>
            <SingleButton symbol={"="} calculate={Calculate}></SingleButton>

            <div className='digits'>
                <ButtonKeypad keyInput={keyInput} />
            </div>
        </div>
    )
}

export default CalcButtons
