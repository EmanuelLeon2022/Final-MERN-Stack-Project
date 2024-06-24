import Form from './Form'
import Display from './Display'
import { useState } from 'react'
import './Zelda.css'

function Zelda() {
  const [name, setName] = useState(null)
  const getName = async(searchterm) =>{
    const response = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${searchterm}`)
    const dot = await response.json()

    setName(dot);
    console.log(dot)
  }

  return (
    <div className='zelda'>
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
        <div className='Form'>
        <h1 style={{fontFamily: 'zelda'}}>ZELDA API</h1>
        <p>&nbsp;</p>
        <p style={{fontFamily: 'zelda', fontSize:'20px'}}>Here you can look up anything from the hit game</p>
        <p style={{fontFamily: 'zelda', fontSize:'20px'}}>The Legend of Zelda Breath of the Wild.</p>
        <p style={{fontFamily: 'zelda', fontSize:'20px'}}>Note you cannot look up characters, you can only look up mobs and items.</p>
        <p style={{fontFamily: 'zelda', fontSize:'20px'}}>This version does not include the Tears of the Kingdom version of the API.</p>
        <p style={{fontFamily: 'zelda', fontSize:'20px'}}>Also try not to submit a blank request as that might break the site.</p>
        <p style={{fontFamily: 'zelda', fontSize:'20px'}}>Other than that, happy searching</p>
        <p style={{fontFamily: 'zelda', fontSize:'20px'}}>Also if you are using this version https://emanuelleon.onrender.com </p>
        <p style={{fontFamily: 'zelda', fontSize:'20px'}}>do not refresh this page. It will declare "Error 404" </p>
        <Form gamesearch={getName} />
        </div>
        <div className='disp'>
        <Display currentName={name} />
        </div>
        <div className='open'>
          <p>As you can see from what is above, this is an API for the Legend of Zelda API. The site is open source meaning anyone can use it, and as a bonus the community that developed it has made so that you do not need to place an API key within it, meaning you can input any search however many times you want. Here is their link if you want to check them out.</p>
          <p>&nbsp;</p>
          <a href='https://gadhagod.github.io/Hyrule-Compendium-API/#/' /*target='_blank'*/ >Zelda Comendium</a>
        </div>
        <h1>&nbsp;</h1>
        <h1>&nbsp;</h1>
    </div>
  )
}

export default Zelda