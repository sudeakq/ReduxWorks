
import './App.css';
import { useState } from 'react';

function App() {
  const [counter,setCounter] = useState(0);
 
    const decrement = ()=> {
      setCounter(counter-1)
    }
    const increment = ()=> {
      setCounter(counter+1)
    }



  return (
    <div className="App">
      <span onClick={decrement}>-</span>
      <span>{counter}</span>
      <span onClick={increment}>+</span>
    </div>
  );
}

export default App;
