import React from 'react'
import './Inventory.css'
import New from '../../components/Stk/New'

function Inventory(props) {
  return (
    <div className='stash'>
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
      <h1 style={{fontFamily:'face', color:'white'}}>Inventory Page</h1>
      <a href='/'>Return to Home</a>
      <p>&nbsp;</p>
      <div>
          <div className= 'stank'>
          {""}
          {props.stocks.map((stock, i) => {
            return (
              <div className='tool'>
                {" "}
                <h3 className='sir'>{stock.name} :</h3>
                <p>Type: {stock.usage}</p>
                <p>Amount: {stock.strength}</p>
                <img className='smile' src={stock.image} alt={stock.name} />
                {""}
              </div>
            )
          })}
          </div>
        </div>
        <New/>
        <p>&nbsp;</p>
    </div>
  )
}

export default Inventory