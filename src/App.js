import './App.css';
import { useState } from 'react'; //get the useState function from react
import CalcButtons from './Components/CalcButtons';


const App = () => {
  const [counter, setCounter] = useState(0);




  //  var counter = 0; //simple variable holds a value of 0
  //a simple function to add 1 to counter
  var Add = (x) => {
    x = x + 1; //adds 1 to counter
    // console.log("Adding 1 to counter", x);
    setCounter(x); //sets a new value to  counter
    return x;
  }


  return (
    <div className="App-header">
      <h1>Simple Calculator</h1>


      <CalcButtons></CalcButtons>

      {/* <button className="Addbutton" onClick={() => Add(counter)}>
        Add 1 to {counter}
      </button>
      <h2>{counter}</h2> */}
    </div>
  );
}
export default App;

