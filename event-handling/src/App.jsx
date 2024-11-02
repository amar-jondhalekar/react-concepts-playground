import { useState } from 'react';
import './App.css'
import Button from './components/Button';

function App() {
  const[count, setCount] = useState(0);

  function CountingNumber(){
    setCount(count + 1);
    console.log(count);
  }
  function DecreaseNumber(){
    setCount(count - 1);
    console.log(count);
  }
  function handleClick(){
    alert('You cliked this button!');
  }
  return (
    <>
    {/* <button onClick={alert('clicked button')}>Click Me!</button> */}
    {/* <button onClick={() => {alert('button clicked!')}}>click me!</button> */}
    <Button clickMe={handleClick}></Button>
    <button onClick={CountingNumber}> Increse Number: {count}</button>
    <button onClick={DecreaseNumber}> Decrease Number: {count} </button>
    </>
  )
}

export default App
