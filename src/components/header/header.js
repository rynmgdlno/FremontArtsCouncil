import React from 'react'
import {Link} from 'react-router-dom'

// import Logo from "../logo/logo";
import Logo from '../../component-svgs/logo'
import Menu from "../menu/menu";
import CustomButton from "../custom-button/custom-button";

import './header.scss'

const Header = () => {
  return (
    <div className='header'>
      <div className='top-bar'>
        <Link to='/'><Logo /></Link>
        <div className='header-button-container'>
          <CustomButton>Donate</CustomButton>
          <CustomButton>Volunteer</CustomButton>
        </div>
      </div>
      <Menu />
    </div>
  )
}

export default Header