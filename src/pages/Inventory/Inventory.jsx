import React from 'react'
import { useState, useEffect } from 'react';
import * as stocksAPI from '../../utilities/stocks-api'
import './Inventory.css'


function Inventory() {
  // Abdul heldped me get this section setup
  const [stocks, setStocks] = useState();
  useEffect( ()=>{
    async function fetchData(){
      try {
        const data = await stocksAPI.getAll();
        setStocks(data)
        console.log(data)
      } catch(e){
        console.log("didn't fetch the items", e.message)
      }
    }
    fetchData();
  },[])
  // End
  return (
    
    <div>
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
      <h1>Inventory Page</h1>
      <a href='/'>Return to Home</a>
      <div className= 'stonk' style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
          <div>
          {""}
          {stocks.map((stock, i) => {
            return (
              <div className='tool'>
                {" "}
                <h3 className='sir'>{stock.name} :</h3>
                <p>Type: {stock.type}</p>
                <p>Strength: {stock.strength}V</p>
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