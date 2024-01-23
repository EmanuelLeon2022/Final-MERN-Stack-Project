import React from 'react'
// import Checker from './Checker.mp3'
import './Retro.css'
import Sprites from '../../components/medols/Sprites'
import Seeds from '../../components/medols/Seeds'
import { useState } from 'react'
import Carol from './Carol'

function Retro() {
  //Calls back to Sonic's Spritesheet
  const [count, setSprite] = useState(0);
  const [currentSprite, setCurrentSprite] = useState(Sprites[count]);

  //Idle animation
  const idle = () =>{
    setCurrentSprite(Sprites[0])
  }
  //Run animation
  const run = () =>{
    setCurrentSprite(Sprites[1])
  }
  //Push animation
  const push = () =>{
    setCurrentSprite(Sprites[2])
  }
  //Taunt animation
  const taunt = () =>{
    setCurrentSprite(Sprites[3])
  }

  //Calls back to Link's
  const [runt, setSeed] = useState(0);
  const [currentSeed, setCurrentSeed] = useState(Seeds[runt]);

  const wait = () =>{
    setCurrentSeed(Seeds[0])
  }
  const walk = () =>{
    setCurrentSeed(Seeds[1])
  }
  const nudge = () =>{
    setCurrentSeed(Seeds[1])
  }
  const pose = () =>{
    setCurrentSeed(Seeds[2])
  }


//Sonic's Pushing Animation
window.addEventListener('keydown', e =>{
    if(e.keyCode === 39){
        push();
    }
})
//This resets Sonic's animation to default
window.addEventListener('keyup', e =>{
  if(e.keyCode === 39){
      idle();
  }
})

//Sonic's Taunt Animation
window.addEventListener('keydown', e =>{
    if(e.keyCode === 38){
        taunt();
    }
})
//This resets Sonic's animation to default 
window.addEventListener('keyup', e =>{
  if(e.keyCode === 38){
      idle();
  }
})

//Link's Pushing Animation
window.addEventListener('keydown', e =>{
  if(e.keyCode === 68){
      nudge();
  }
})
//This resets Link's animation to default
window.addEventListener('keyup', e =>{
if(e.keyCode === 68){
    wait();
}
})

//Link's Taunt Animation
window.addEventListener('keydown', e =>{
  if(e.keyCode === 87){
      pose();
  }
})
//This resets Link's animation to default 
window.addEventListener('keyup', e =>{
if(e.keyCode === 87){
    wait();
}
})


  return (
    <div className='grade'>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h1 className='nam' style={{ fontFamily: 'face' }}>Emanuel's Cooler Resume</h1>
      <div className='steam'>
        <img className='hedge' src={currentSprite} alt="Sonic the Hedgehog" />
        <div className='prof'>
          <h1 style={{ fontFamily: 'face', color: 'white' }}>Professional Summary</h1>
          <p> A rising software engineer with extensive training in Javascript(ES6), HTML5 & CSS3, React, and SQL. Able to utilize PostgreSQL, Git, Github, Node.js, set up firewalls, and databases. Experience in problem solving with a background in construction, and some knowledge in mechanical engineering. Solution drive candidate who is seeking to join a software engineering team within an organization.</p>
        </div>
      </div>
      <h2>&nbsp;</h2>
      <div className='hyrule'>
        <img className='het' src={currentSeed} alt='Link from the Legend of Zelda' />
        <div className='exp'>
          <h1 style={{ fontFamily: 'face', color: 'white' }}>Professional Experience</h1>
          <p>&nbsp;</p>
          <div>
            <h3 style={{ fontFamily: 'sans-serif' }}>Leones Construction - Construction Worker  - Pittsburgh, PA 06/2023 - 08/2023</h3>
            <p>&nbsp;</p>
            <p style={{ fontFamily: 'cursive' }}> Drywall Installation - requires measurement of the workspace, framing 2x4 beams, and drilling the drywall onto the frame to keep it locked in place. Once that is complete, the wall needs to be taped (a process in which you use joint compound to seal crevices in the wall), then painted with a coat of primer.</p>
            <p>&nbsp;</p>
            <p style={{ fontFamily: 'cursive' }}> Decking Installation - requires measurement of where the platform will be placed, placing multiple 2x8 boards in a row form and jointing them with solid brackets and decking screws, and lastly pacing out the decking floor boards in a way where they are properly spaced between to walk on.</p>
          </div>
          <p>&nbsp;</p>
          <div>
            <h3 style={{ fontFamily: 'sans-serif' }}> Cornerstone Christian Preparatory Academy- Custodial - Pittsburgh, PA 05/2023 - 06/2023</h3>
            <p>&nbsp;</p>
            <p style={{ fontFamily: 'cursive' }}> School maintenance- the job was restocking the school bathrooms, restocking classroom cleaning supplies, and cleaning up cafeterias. Cataloging items - required me to identify what items were in stock such as toilet paper, paper towels, soap, rags and record what items were needed.</p>
          </div>
        </div>
      </div>
      <p>&nbsp;</p>
      <div className='skool'>
        <img className='plumb' src="https://i.gifer.com/origin/01/01d0e306b2110cc78690210e92c65eae_w200.gif" alt="Mario Mario" />
        <div className='tawt'>
          <h2 style={{ fontFamily: 'face', color: 'white' }}>Educational Background</h2>
          <p>&nbsp;</p>
          <div>
            <h3 style={{ fontFamily: 'sans-serif' }}>Per Scholas - Software Engineering- Remote 01/2024</h3>
            <p>&nbsp;</p>
            <p>Software Engineering student - Took a span of four months and taught me HTML5, CSS3, JavaScript(ES6), and React. I also learned how to use Github to upload files and work, and how to use backend frameworks with API’s. They also taught me how to work as a team, and individually as well. It also helped me to learn project management under pressure.</p>
          </div>
          <p>&nbsp;</p>
          <div>
            <h3 style={{ fontFamily: 'sans-serif' }}>Bob Jones University  -	Greenville, SC 08/2022 - 05/2023</h3>
            <p>&nbsp;</p>
            <p>Some College: Earned 22 Credits towards a Bachelors in Mechanical Engineering</p>
          </div>
        </div>
      </div>
      <Carol/>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h1>Favorite Book of the Bible</h1>
      <h4>Proverbs</h4>
      <p>Favorite Chapter: Proverbs 17</p>
      <p>Favorite verse: 17</p>
      <p>&nbsp;</p>
      <h4 style={{fontFamily: 'face', color: 'white'}}>Current Favorite Music Piece</h4>
      <iframe style={{width: '50%',height:'20%'}} src="https://open.spotify.com/embed/track/2QuWhgE51Nb61v0EtD6NrL?utm_source=generator" width="50%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <p>&nbsp;</p>
    </div>
  )
}

export default Retro