import React from 'react'
import '../../App.css'
function Card(props) {
  return (
    <>
    <img className='magic' src={props.currentPic}/>
    </>
  )
}

export default Card