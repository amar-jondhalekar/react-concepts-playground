import React from 'react'

const Button = (props) => {
  return (
    <>
    <div>
    <h2>Click the button : </h2>
    {/* <h3> {children}</h3> */}
    <button onClick={props.clickMe}>
        I don't do anything 
    </button>
    <input type="text" onChange={props.clickMe}/>
    <p onMouseOver={props.clickMe} style={{border:"1px solid black"}}> I am a Para </p>
    </div>
    </>
  )
}

export default Button