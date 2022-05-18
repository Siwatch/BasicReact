import React from 'react'
import Widecard from '../component/Widecard'
import swupic from '../img/swu.png'
import thanyapic from '../img/thanyaburi.png'

const Education = () => {
  return (
    <div className='condiv'>
        <h1 className='subtopic'>Education History</h1>
        <Widecard title="Bachelor Degree In Computer Engineering" where="Srinakharinwirot University" from="2018" to="Present" gpax=" 3.60" />
        <Widecard title="Intensive MATH-SCI" where="Thanyaburi School" from="2015" to="2018" gpa=" 3.73"  />
    </div>
  )
}

export default Education