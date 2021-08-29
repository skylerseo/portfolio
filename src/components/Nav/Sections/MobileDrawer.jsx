import React from 'react'
import '../../../main.css'
import { Link } from 'react-scroll'

const MobileDrawer = ({ isVisible }) => {
  return (
    <ul className={isVisible ? 'menu_drawer active' : 'menu_drawer'}>
      <Link to='home' spy={true} smooth={true} offset={-150} duration={500} delay={50}>
        <li>Home</li>
      </Link>
      <Link to='about' spy={true} smooth={true} offset={-150} duration={500} delay={50}>
        <li>About</li>
      </Link>
      <Link to='skills' spy={true} smooth={true} offset={-150} duration={500} delay={50}>
        <li>Skills</li>
      </Link>
      <Link to='work' spy={true} smooth={true} offset={-150} duration={500} delay={50}>
        <li>Work</li>
      </Link>
      <Link to='faq' spy={true} smooth={true} offset={-150} duration={500} delay={50}>
        <li>FAQ</li>
      </Link>
      <Link to='contact' spy={true} smooth={true} offset={-150} duration={500} delay={50}>
        <li>Contact</li>
      </Link>
    </ul>
  )
}

export default MobileDrawer
