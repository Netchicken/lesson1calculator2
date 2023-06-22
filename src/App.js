import './App.css';
import { useState } from 'react'; //get the useState function from react
import CalcButtons from './Components/CalcButtons';


const App = () => {


  return (
    <div className="App-header">
      <h1>Simple Calculator</h1>

      <CalcButtons></CalcButtons>


    </div>
  );
}
export default App;

