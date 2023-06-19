import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const App = () => {
  //add in a truck load of code!

  const [x, setX] = useState(0);
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


  //const x = 0;

  var Add = (x) => {
    x = x + 1;
    console.log("What is X?", x);
    setX(x);
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
        onChange={(e) => setFirst(e.target.value)} />

      <input type="number" defaultValue={answer} />
      <div>
        <button className='Addbutton' onClick={() => Calculate("+")}>+</button>
        <button className='Addbutton' onClick={() => Calculate("-")}>-</button>
        <button className='Addbutton' onClick={() => Calculate("/")}>/</button>
        <button className='Addbutton' onClick={() => Calculate("X")}>X</button>
      </div>

      <button className="Addbutton" onClick={() => Add(x)}>
        Add 1 to X
      </button>
    </div>
  );
}
export default App;
