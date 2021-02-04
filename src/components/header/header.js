import React from 'react'

import Logo from "../logo/logo";
import Menu from "../menu/menu";
import CustomButton from "../custom-button/custom-button";

import './header.scss'

const Header = () => {
  return (
    <div className='header'>
      <div className='top-bar'>
        <Logo />
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