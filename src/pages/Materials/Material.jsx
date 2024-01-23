import React from 'react'
import './Material.css'
import New from '../../components/Tem/New'

function Material(props) {
    return (
      <div>
        <h1>&nbsp;</h1>
        <h1>&nbsp;</h1>
        <h1>Material</h1>
        <a href='/'>Return to Home</a>
        <p>&nbsp;</p>
        <div>
          <div className='gizmo'>
          {""}
          {props.items.map((item, i) => {
            return (
              <div className='tools'>
                {" "}
                <div className='sirs'>
                <h3>{item.name} :</h3>
                <p>Type: {item.type}</p>
                <p>Battery: {item.battery} V</p>
                <p>Brand: {item.brand}</p>
                <p>ID: {item._id}</p>
                </div>
                <img className='smiles' src={item.image} alt={item.name} />
                {""}
              </div>
            )
          })}
          </div>
        </div>
        <New/>
      </div>
    )
  }
  
  export default Material