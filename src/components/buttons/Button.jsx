import React from 'react'

function Button(props) {
  return (
    <>
    <button onClick={props.togglePic}> {props.icon} </button>
    
    </>
  )
}

export default Button
