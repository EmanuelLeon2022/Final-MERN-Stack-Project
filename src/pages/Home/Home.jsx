import React from 'react'
import './Home.css'
import * as userService from '../../utilities/users-service'

function Home(props) {
  return (
    <>
      <div className='meow'>
        <h1>&nbsp;</h1>
        <h1>&nbsp;</h1>
        {/* <h1>Welcome {props.user.name}!!!</h1>
        <img width="85%" style={{ borderRadius: '10px', opacity:'85%' }} src="https://www.hometheaterforum.com/wp-content/uploads/2023/01/Mickey-and-Minnie-V1_feat.jpg" alt="STEAMBOAT WILLIE HAHAHA PUBLIC DOMAIN DISNEY!!! WHAT ARE YOU GONNA DO... SUE ME!!!" />
        <p>Throughout this page you will see a lot of my imagination placed throughout the page, most of them being fictional items, in the inventory and materials page set as placeholders. In my website you will find some of my past projects, some new ones, my resume page, and an inventory page.</p>
        <div>
          <h1>Things you can Do</h1>
          <p>One of the great delights about theis website are the inventory lists that are available, the open source Zelda API, and my resume, and my Snail Race. The inventory page is a prototype for keeping track of all the items I have in my household such as acutal tools and food, but for now most of the items in there are fictional.</p>
        </div> */}
        <h1>&nbsp;</h1>
      <div className='main'>
        <h1>&nbsp;</h1>
      <h1 style={{ fontSize:'50px', fontFamily:'face', color:'black'}}>Welcome {props.user.name}!!!</h1>
      <p>&nbsp;</p>
        <img width="85%" style={{ borderRadius: '10px', opacity:'85%' }} src="https://www.hometheaterforum.com/wp-content/uploads/2023/01/Mickey-and-Minnie-V1_feat.jpg" alt="STEAMBOAT WILLIE HAHAHA PUBLIC DOMAIN DISNEY!!! WHAT ARE YOU GONNA DO... SUE ME!!!" />
        <p>Throughout this page you will see a lot of my imagination placed throughout the page, most of them being fictional items, in the inventory and materials page set as placeholders. In my website you will find some of my past projects, some new ones, my resume page, and an inventory page.</p>
        <div>
          <h1>Things you can Do</h1>
          <p>One of the great delights about theis website are the inventory lists that are available, the open source Zelda API, and my resume, and my Snail Race. The inventory page is a prototype for keeping track of all the items I have in my household such as acutal tools and food, but for now most of the items in there are fictional.</p>
        </div>
      <h1>&nbsp;</h1>
      <div className='pain'>
        <h1>&nbsp;</h1>
        <h1 style={{ fontSize:'50px',color:'white'}} className='manny'>PROJEX</h1>
        <p>&nbsp;</p>
      </div>
      <div className='rasp'>
      <h3><a style={{fontFamily: 'face', color:'black', fontSize:'30px'}} href='https://www.instructables.com/The-Box-of-Nostalgia-Semi-Portable-Retro-Gaming-Co/' target='_blank'>RetroPie</a></h3>
        <div className='nice'>
          <img className='image1' src="https://content.instructables.com/F2Z/MOTA/KVAYJU67/F2ZMOTAKVAYJU67.jpg?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=4a751bf5dea52de1daa84950b42fa270" alt="Small Gaming console on box" />
          <img className='image2' style={{rotate: "270deg"}} src="https://content.instructables.com/FG5/FRPQ/KVAYJU68/FG5FRPQKVAYJU68.jpg?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=c8d758db9beea5dedc197c2daf2a3f98" alt="Sonic 2 running on the Console" />
          <img className='image1' src="https://content.instructables.com/FD6/AJQ1/KUCXRN2G/FD6AJQ1KUCXRN2G.jpg?auto=webp&frame=1&width=800&height=1024&fit=bounds&md=9fc14392388f3df66e52d6cbc433d6d2" alt="Arcade" />
        </div>
      </div>
      <p>&nbsp;</p>
      <div className='snail'>
        <div className='race'>
          <h3><a style={{fontFamily: 'face', color: 'black', fontSize: '25px'}} href='https://github.com/EmanuelLeon2022/Snail-racers/tree/main' target='_blank'>Snail Race</a></h3>
          <img style={{justifyContent:'center'}} className='image3' src="https://content.instructables.com/FQM/42SF/LPV7K50Z/FQM42SFLPV7K50Z.png?auto=webp&frame=1&width=1024&fit=bounds&md=251d7cbb91a4666bcf11a028f4c9f626" alt="Snail race game in browser" />
        </div>
      </div>
      <p>&nbsp;</p>
      <div className='web'>
      <h3 ><a style={{fontFamily: 'face',fontSize:'30px', color:'black'}} href='https://github.com/EmanuelLeon2022/Final-MERN-Stack-Project' target='_blank'>Website</a></h3>
        <div className='lego'>
          <img className='image3' src="https://content.instructables.com/FZD/12Y6/LPV7K7W3/FZD12Y6LPV7K7W3.png?auto=webp&frame=1&width=1024&fit=bounds&md=4d412df54b376277d844104e75041f8e" alt="Website in Development" />
          <img className='image3' src="https://content.instructables.com/FIK/VBK6/LPV7KAT2/FIKVBK6LPV7KAT2.png?auto=webp&frame=1&crop=3:2&width=400&fit=bounds&md=5bda058e2f14bebfe3e59acaf9881d43" alt="Website in Development" />
          <img className='image3' src="https://content.instructables.com/F9Q/OVEE/LPV7KAT8/F9QOVEELPV7KAT8.png?auto=webp&frame=1&crop=3:2&width=400&fit=bounds&md=a2df0e4afee350ba34d713c56f121efa" alt="Website in Development" />
        </div>
      </div>
      <p>&nbsp;</p>
      <div className='projx'>
        <h2 style={{color: 'white',fontFamily:'face'}}>Project List</h2>
        <a href='https://www.instructables.com/The-Box-of-Nostalgia-Semi-Portable-Retro-Gaming-Co/' target="_blank"><p style={{fontFamily:'face'}} className='dojo'>Retropie</p></a>
        <a href='https://github.com/EmanuelLeon2022/Snail-racers/tree/main' target="_blank"><p style={{fontFamily:'face'}} className='dojo'
        >Snail Racers</p></a>
        <a href='https://epic-turbo-thunder-snail-racers.onrender.com/' target="_blank"><p style={{fontFamily:'face'}} className='dojo'
        >Website</p></a>
      </div>
      <p>&nbsp;</p>
      <div className='about' >
          <h1 style={{fontFamily:'face' , color:'white'}}>About</h1>
          <p>I have this website as my capstone assignment for Per Scholas, and as way of showcasing my skills to future employers, people interested in my work, my family and friends, and to myself. In the end my reason for making this assignment to fullest potential is because of this key moral, my work isn't just for those who asked for it, but also to <a style={{color:'lightBlue'}}href='https://biblehub.com/bsb/colossians/3.htm#:~:text=23Whatever%20you%20do%2C%20work%20at%20it%20with%20your%20whole%20being%2C%20for%20the%20Lord%20and%20not%20for%20men%2C%2024because%20you%20know%20that%20you%20will%20receive%20an%20inheritance%20from%20the%20Lord%20as%20your%20reward.%20It%20is%20the%20Lord%20Christ%20you%20are%20serving.'>present my best work to God</a> </p>
        </div>
        <p>&nbsp;</p>
    </div>
        <h1>&nbsp;</h1>
      </div>
    </>
  )
}

export default Home