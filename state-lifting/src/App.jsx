import { useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {
  //create state
  const [name, setName] = useState('');
  //manage state
  //change state
  //sync states to all child 
  return (
    <>
      <div>
        <Card title="Card1" name={name} setName={setName}></Card>
        <Card title="Card2" name={name} setName={setName}></Card>
        {/* <p>I am inside Parent Component and value of name is: {name}</p> */}
      </div>
    </>
  )
}

export default App
