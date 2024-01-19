import React from 'react'

function Material() {
  const Stocks = require('../../../models/item')
    return (
      <div>
        <h1>&nbsp;</h1>
        <h1>&nbsp;</h1>
        <h1>Material</h1>
        <a href='/'>Return to Home</a>
        <div className= 'stonk'>
            {" "}
            {Stocks.map((stock) => {
              return (
                <div className='tool'>
                  {" "}
                  <h3 className='sir'> {stock.name}</h3>
                  {/* <p>Type: {stocks.type}</p> */}
                  {/* <p>Battery: {stocks.battery}V</p> */}
                  {/* <img className='smile' src={stocks.image} alt={stocks.name} /> */}
                  {/* <p>Brand: {stocks.brand}</p> */}
                  {" "}
                </div>
              );
            })}
            </div>
      </div>
    )
  }
  
  export default Material