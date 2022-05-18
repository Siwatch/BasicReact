import React from 'react'
import profilepic from '../img/profile.jpg'

const About = () => {
  return (
    <div className='condiv about'>
        <h1 className='subtopic'> ABOUT ME</h1>
        <img src={profilepic} className='profilepic'/>
        <h3>Siwatch Sritrakul</h3>
        <p>Currently a student at Srinakharinwirot University's Faculty of
Engineering, majoring in computer engineering and interested
in application development, websites development and
software development.</p>
    </div>
  )
}

export default About