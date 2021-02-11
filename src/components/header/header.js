import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useMediaPredicate } from 'react-media-hook'
import Hamburger from 'hamburger-react'

import {useScrollPosition} from '../../hooks/scrollHook'

import Logo from '../../component-svgs/logo'
import Menu from "../menu/menu";
import CustomButton from "../custom-button/custom-button";

import './header.scss'

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const [headerSizeOnScroll, setHeaderSize] = useState(true)

  const isMobile = useMediaPredicate('(max-width: 767px)')

  useScrollPosition(({ prevPos, currPos }) => {
    const isScrolled = currPos.y > prevPos.y 
    if (isScrolled !== headerSizeOnScroll ) setHeaderSize(isScrolled)
    console.log(currPos.y)
  }, [headerSizeOnScroll])

  return (
    <div className='header'>
      <div className='top-bar'>
        <Link to='/'><Logo /></Link>
        {
          isMobile ? <Hamburger toggled={isOpen} toggle={setOpen} /> :
        <div className='header-button-container'>
          <Link to='/donate'>
            <CustomButton className='custom-button medium-emphasis-button donate-button'>Donate</CustomButton>
          </Link>
          <Link to='volunteer'>
            <CustomButton className='custom-button medium-emphasis-button volunteer-button'>Volunteer</CustomButton>
          </Link>
        </div>
        }
        
      </div>
      <Menu />
      <div className='border'></div>
    </div>
  )
}

export default Header