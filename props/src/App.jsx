import './App.css'
import Card from './components/Card'

function App() {


  return (
    <>
     <Card name="amar jondh">
          <h1> Best WEB DEV course </h1>
          <p> Trying to be consistent in this </p>
          <p> Will complete the course soon </p>
     </Card>
     <Card>
      {/* When creating higher order component then we can use like this */}
      Hello, Myself Amar Jondhalekar 
     </Card>
    </>
  )
}

export default App
