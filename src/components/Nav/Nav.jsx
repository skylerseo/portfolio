import React, { useState } from 'react'
import '../../main.css'
import { Link } from 'react-scroll'
import logo_image_skyler from '../../assets/image/logo_image_skyler.jpg'
import MobileMenu from './Sections/MobileMenu'
import MobileDrawer from './Sections/MobileDrawer'

const NavBar = (props) => {
  const [visible, setVisible] = useState(false)

  const showDrawerHandler = () => {
    setVisible(!visible)
  }

  return (
    <nav className='navbar'>
      <div className='navbar_wrapper'>
        <a href='/portfolio/' className='home_link'>
          <img src={logo_image_skyler} alt='logo' />
        </a>
        {window.innerWidth > 428 ? (
          <ul className='navbar_menu'>
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
        ) : (
          <>
            <MobileMenu isVisible={visible} showDrawerHandler={showDrawerHandler} />
            <MobileDrawer isVisible={visible} />
          </>
        )}
      </div>
    </nav>
  )
}

export default NavBar
