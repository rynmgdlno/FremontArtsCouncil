import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useMediaPredicate } from 'react-media-hook'
import Hamburger from 'hamburger-react'

// import Logo from "../logo/logo";
import Logo from '../../component-svgs/logo'
import Menu from "../menu/menu";
import CustomButton from "../custom-button/custom-button";

import './header.scss'

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const mobileQuery = useMediaPredicate('(max-width: 767px)')

  return (
    <div className='header'>
      <div className='top-bar'>
        <Link to='/'><Logo /></Link>
        {
          mobileQuery ? <Hamburger toggled={isOpen} toggle={setOpen} /> :
        <div className='header-button-container'>
          <CustomButton className='custom-button medium-emphasis-button donate-button'>Donate</CustomButton>
          <CustomButton className='custom-button medium-emphasis-button volunteer-button'>Volunteer</CustomButton>
        </div>
        }
        
      </div>
      <Menu />
      <div className='border'></div>
    </div>
  )
}

export default Header