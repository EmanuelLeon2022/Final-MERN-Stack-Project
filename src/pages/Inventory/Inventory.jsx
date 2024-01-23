import React from 'react'
import './Inventory.css'


function Inventory(props) {
  return (
    <div className='stash'>
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
      <h1>Inventory Page</h1>
      <a href='/'>Return to Home</a>
      <div className= 'stonk'>
          <div className= 'stank'>
          {""}
          {props.stocks.map((stock, i) => {
            return (
              <div className='tool'>
                {" "}
                <h3 className='sir'>{stock.name} :</h3>
                <p>Type: {stock.type}</p>
                <p>Amount: {stock.strength}</p>
                <img className='smile' src={stock.image} alt={stock.name} style={{height:'50px', width:'50px'}} />
                <p>Brand: {stock.brand}</p>
                {""}
              </div>
            )
          })}
          </div>
        </div>
        <p>&nbsp;</p>
    </div>
  )
}

export default Inventory