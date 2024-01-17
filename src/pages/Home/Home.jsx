import React from 'react'
import './Home.css'
import * as userService from '../../utilities/users-service'

function Home(props, user, userService) {
  return (
    <>
      <div>
        <h1>&nbsp;</h1>
        <h1>&nbsp;</h1>
        <h1>Welcome {props.user.name}!!!</h1>
        <img width="85%" style={{ borderRadius: '10px', opacity:'85%' }} src="https://www.hometheaterforum.com/wp-content/uploads/2023/01/Mickey-and-Minnie-V1_feat.jpg" alt="STEAMBOAT WILLIE HAHAHA PUBLIC DOMAIN DISNEY!!! WHAT ARE YOU GONNA DO... SUE ME!!!" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas a aperiam cupiditate quam, ipsa repellat dicta aliquid laborum dignissimos. Placeat animi deleniti quis quia doloribus dolores recusandae aliquid laborum eligendi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam quia rem, expedita facere omnis repellendus accusamus. Tempore nemo totam id dolore ab, vero saepe harum quis autem vitae odit dolores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias officia consequatur fuga, facilis minima veritatis repellendus dolor, perspiciatis vitae eos tempore deserunt! Porro quis dolore fuga autem rem molestiae explicabo!</p>
        <div>
          <h1>Things you can Do</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores voluptatum, velit exercitationem beatae asperiores quam aliquam fugit enim. Facere quas, ratione repudiandae cumque ipsum inventore saepe? Ipsum, quidem illum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum consequuntur atque nihil commodi nisi? Ea necessitatibus delectus sapiente non ipsa maxime, aliquid nam quia in vero. Fugiat eius placeat facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. In sed harum neque omnis ullam cumque quis quos voluptas ut fugit, corporis excepturi voluptates vitae? Aperiam quia officiis deserunt earum vel.</p>
        </div>
        <div className='about'>
          <h1>About</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem eius odio aliquam neque officia illum pariatur id, ullam rerum possimus at modi architecto obcaecati laboriosam quis quisquam. Commodi, accusamus cum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, ullam illo quia eos, fuga minima odit voluptas impedit quo quae rem! Ab nihil consequatur aliquam eos ducimus mollitia, rem impedit!</p>
        </div>
      </div>
    </>
  )
}

export default Home