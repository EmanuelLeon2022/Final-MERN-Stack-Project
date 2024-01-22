import React from 'react'
import { useState, useEffect } from 'react';
import * as itemsapi from '../../utilities/items-api'
import './Material.css'

function Material() {
  // Abdul heldped me get this section setup
  const [items, setItems] = useState();
  useEffect( ()=>{
    async function fetchData(){
      try {
        const data = await itemsapi.getAll();
        setItems(data)
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
        <h1>Material</h1>
        <a href='/'>Return to Home</a>
        <div className= 'stonks'>
          <div>
          {""}
          {items.map((item, i) => {
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