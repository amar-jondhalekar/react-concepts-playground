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
    </div>
    </>
  )
}

export default Button