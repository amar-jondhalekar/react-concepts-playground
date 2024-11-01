import React from 'react'

const Button = (props) => {
  return (
    <>
    <div>
        {props.children}
    </div>
         <button onClick={props.handleClick}>
        {props.text}
    </button>
    <p>{props.count}</p>
    </>
  )
}

export default Button