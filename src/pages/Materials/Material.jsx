import React from 'react'
import './Material.css'

function Material(props) {
    return (
      <div>
        <h1>&nbsp;</h1>
        <h1>&nbsp;</h1>
        <h1>Material</h1>
        <a href='/'>Return to Home</a>
        <div className= 'stonks' style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
          <div>
          {""}
          {props.items.map((item, i) => {
            return (
              <div className='tools'>
                {" "}
                <h3 className='sirs'>{item.name} :</h3>
                <p>Type: {item.type}</p>
                <p>Battery: {item.battery}V</p>
                <img className='smiles' src={item.image} alt={item.name} />
                <p>Brand: {item.brand}</p>
                {""}
              </div>
            )
          })}
          </div>
        </div>
      </div>
    )
  }
  
  export default Material