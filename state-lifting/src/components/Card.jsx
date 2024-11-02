import React from 'react'

const Card = (props, {title}) => {
  return (
    <div>
        <input type="text" onChange={(e) => props.setName(e.target.value)}/>
        <p> Name state variable value inside {title} : {props.name} </p>
    </div>
  )
}

export default Card