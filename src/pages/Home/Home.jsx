import React from 'react'
import './Home.css'
import * as userService from '../../utilities/users-service'

function Home(props) {
  return (
    <>
      <div>
        <h1>&nbsp;</h1>
        <h1>&nbsp;</h1>
        <h1>Welcome {props.user.name}!!!</h1>
        <img width="85%" style={{ borderRadius: '10px', opacity:'85%' }} src="https://www.hometheaterforum.com/wp-content/uploads/2023/01/Mickey-and-Minnie-V1_feat.jpg" alt="STEAMBOAT WILLIE HAHAHA PUBLIC DOMAIN DISNEY!!! WHAT ARE YOU GONNA DO... SUE ME!!!" />
        <p>Throughout this page you will see a lot of my imagination placed throughout the page, most of them being fictional items, in the inventory and materials page set as placeholders. In my website you will find some of my past projects, some new ones, my resume page, and</p>
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