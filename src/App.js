import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const App = () => {
  const [counter, setCounter] = useState(0);


  const [answer, setAnswer] = useState("");
  const [first, setFirst] = useState(10);
  const [second, setSecond] = useState(22);



  //Value =  + - / X
  const Calculate = (value) => {
    console.log("What is value?", value);

    if (value !== "") {
      switch (value) {
        case "-": setAnswer(first - second);
          break;
        //Number is needed to make it add and not concatinate
        case "+": setAnswer(Number(first + second));
          break;
        case "/": setAnswer(first / second);
          break;
        case "X": setAnswer(first * second);
          break;
        default: setAnswer("Error");
      }
    }
  }
  //  var counter = 0; //simple variable holds a value of 0
  //a simple function to add 1 to counter
  var Add = (x) => {
    x = x + 1; //adds 1 to counter
    console.log("Adding 1 to counter", x);
    setCounter(x); //sets a new value to  counter
    return x;
  }


  return (
    <div className="App-header">
      <h1>Simple Calculator</h1>
      <input type="number"
        value={Number(first)}
        onChange={(e) => setFirst(e.target.value)} />

      <input type="number"
        value={Number(second)}
        onChange={(e) => setSecond(e.target.value)} />

      <input type="number" defaultValue={answer} />
      <div>
        <button className='Addbutton' onClick={() => Calculate("+")}>+</button>
        <button className='Addbutton' onClick={() => Calculate("-")}>-</button>
        <button className='Addbutton' onClick={() => Calculate("/")}>/</button>
        <button className='Addbutton' onClick={() => Calculate("X")}>X</button>
      </div>

      <button className="Addbutton" onClick={() => Add(counter)}>
        Add 1 to {counter}
      </button>
      <h2>{counter}</h2>
    </div>
  );
}
export default App;

