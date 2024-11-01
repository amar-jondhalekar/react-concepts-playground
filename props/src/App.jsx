import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);

  function handleCount(){
    setCount(count + 1);
  }
  return (
    <>
    <Button handleClick = {handleCount} text="Click Me">
      <h1>{count}</h1>
    </Button>
     {/* <Card name="amar jondh">
          <h1> Best WEB DEV course </h1>
          <p> Trying to be consistent in this </p>
          <p> Will complete the course soon </p>
     </Card> */}
     {/* <Card> */}
      {/* When creating higher order component then we can use like this */}
      {/* Hello, Myself Amar Jondhalekar  */}
     {/* </Card> */}
    </>
  )
}

export default App
