import React, {  useState } from 'react'
import Navitems from './Navitems'

const Navbar = (props) => {
    const [NavItem,setNavItem] = useState('');


  return (
    <nav>
        <ul>
            <Navitems item="Home" tolink='/'  ></Navitems>
            <Navitems item="About" tolink='/about'></Navitems>
            <Navitems item="Education" tolink='/education' ></Navitems>
            <Navitems item="Skill" tolink='/skill' ></Navitems>
            <Navitems item="Contact" tolink='/contact' ></Navitems>
        </ul>
    </nav>
  )
}

export default Navbar