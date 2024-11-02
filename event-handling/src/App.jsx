import './App.css'
import Button from './components/Button';

function App() {
  function handleClick(){
    alert('You cliked this button!');
  }
  return (
    <>
    <Button clickMe={handleClick}></Button>
    </>
  )
}

export default App
