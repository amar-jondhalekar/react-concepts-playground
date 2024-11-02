import { useState } from 'react';
import './App.css'
import Button from './components/Button';

function App() {
  // const[count, setCount] = useState(0);

  function handleInputChange(e){
    console.log('Value till now: ', e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    // I am writing my custom behaviour down
    alert('Form Submit');
  }
  // function CountingNumber(){
  //   setCount(count + 1);
  //   console.log(count);
  // }
  // function DecreaseNumber(){
  //   setCount(count - 1);
  //   console.log(count);
  // }
  // function handleClick(){
  //   alert('You cliked this button!');
  // }
  return (
    <>
    {/* <button onClick={alert('clicked button')}>Click Me!</button> */}
    {/* <button onClick={() => {alert('button clicked!')}}>click me!</button> */}
    <form onSubmit={handleSubmit}>
    <input type="text" onChange={handleInputChange}/>
    <button type='submit'>Submit</button>
    </form>
    <form onSubmit={handleSubmit}>
    <Button clickMe={handleInputChange}></Button>
    </form>

    {/* <button onClick={CountingNumber}> Increse Number: {count}</button>
    <button onClick={DecreaseNumber}> Decrease Number: {count} </button>
    <input type='text' placeholder='plese enter your name'/>
    <textarea name="Message" id="chatApp" placeholder='Write your message here...'></textarea> */}
   </>
  )
}

export default App
