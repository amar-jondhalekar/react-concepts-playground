import './App.css'
import Button from './components/Button';

function App() {
  // function handleClick(){
  //   alert('You cliked this button!');
  // }
  return (
    <>
    {/* <button onClick={alert('clicked button')}>Click Me!</button> */}
    <button onClick={() => {alert('button clicked!')}}>click me!</button>
    {/* <Button clickMe={handleClick}></Button> */}
    </>
  )
}

export default App
