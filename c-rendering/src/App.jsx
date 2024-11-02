import { useState } from 'react'
import './App.css'
import LoginBtn from './components/LoginBtn';
import LogoutBtn from './components/LogoutBtn';

function App() {
  const[isLoggedIn, setLoggedIn] = useState(false);

  if(!isLoggedIn){
    return(
      <LoginBtn/>
    )
  }

  return(
    <div>
      <h1> Welcome Everyone to Campuslight Web Dev course </h1>
      <div>
        {/* Using AND operator */}
        {isLoggedIn && <LogoutBtn/>}
      </div>
    </div>
  )

  // return(
  //   <div>
  //     {/* Using ternary operator */}
  //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
  //   </div>
  // )

  // Using if-else loop 
  // if(isLoggedIn){
  //   return (
  //     <LogoutBtn/>
  //   )
  // }else{
  //   return(
  //     <LoginBtn/>
  //   )
  // }
}

export default App
