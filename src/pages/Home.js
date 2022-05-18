import React from 'react'
import Social from '../component/Social'
import profilepic from '../img/profile.jpg'
import ReactTypingEffect from 'react-typing-effect'


const Home = () => {
  return (
    //              2 class
    <div className='condiv home'>
        <img src={profilepic} alt="profile" className='profilepic' />
        <ReactTypingEffect text={['SIWATCH SRITRAKUL','INTEREST IN SOFTWARE DEVELOPER']} speed={80} eraseDelay={200} className='typingeffect'></ReactTypingEffect>
    </div>
  )
}

export default Home