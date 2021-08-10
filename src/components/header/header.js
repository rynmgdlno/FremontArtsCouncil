import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useMediaPredicate } from 'react-media-hook'
import { CSSTransition } from 'react-transition-group'

import { useScrollPosition } from '../../hooks/scrollHook'

import Hamburger from 'hamburger-react'
import Logo from '../../component-svgs/logo'
import Menu from "../menu/menu";
import CustomButton from "../custom-button/custom-button";

import './header.scss'

const Header = ({ isMobile }) => {
  const [isOpen, setOpen] = useState(false)
  const [headerSizeOnScroll, setHeaderSize] = useState(true)

  // const isMobile = useMediaPredicate('(max-width: 769px)')

  // const animate = isOpen && 'open'

  useScrollPosition(({ prevPos, currPos }) => {
    const isScrolled = currPos.y > prevPos.y
    if (isScrolled !== headerSizeOnScroll) setHeaderSize(isScrolled)
  }, [headerSizeOnScroll])

  return (
    <div className='header'>
      <div className='top-bar'>
        <Link to='/'><Logo /></Link>
        {
          isMobile ?
            <div>
              <Hamburger toggled={isOpen} toggle={setOpen} color='#ef303a' size={26} />
              <CSSTransition
                in={isOpen}
                timeout={300}
                classNames='menu-transitions'
                unmountOnExit
              >
                <Menu isMobile={isMobile} />
              </CSSTransition>
            </div>
            :
            <div className='header-button-container'>
              <a href='https://myfremont.wildapricot.org/donate'>
                <CustomButton className='custom-button medium-emphasis-button donate-button'>Donate</CustomButton>
              </a>
              <a href='https://myfremont.wildapricot.org/wp-volunteer'>
                <CustomButton className='custom-button medium-emphasis-button volunteer-button'>Volunteer</CustomButton>
              </a>
            </div>
        }

      </div>
      {
        !isMobile && <Menu />
      }
      <div className='border'></div>
    </div>
  )
}

export default Header