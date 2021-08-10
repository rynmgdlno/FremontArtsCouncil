import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import CustomButton from '../custom-button/custom-button'

import './menu-item.scss'

const MenuItem = ({ isMobile, title, subMenu }) => {
  const dropdownRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const pageClick = (e) => {
      if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      window.addEventListener('click', pageClick);
    }
    return () => {
      window.removeEventListener('click', pageClick);
    }
  }, [isOpen, setIsOpen])


  return (
    <div className='sub-menu' ref={dropdownRef}>
      <CustomButton
        className='custom-button low-emphasis-button'
        onClick={() => setIsOpen(!isOpen)}>{title}
      </CustomButton>
      <CSSTransition
        in={isOpen}
        timeout={200}
        classNames='sub-menu-transitions'
        unmountOnExit>
        <div className='sub-menu-list'>
          {
            isMobile && <p className='title'>{title}</p>
          }
          {subMenu.map((item) => (
            item.isExternal ?
              <div className='sub-menu-item'>
                <a key={item.id} href={item.link}>{item.name}</a>
              </div>
              :
              <Link key={item.id} to={`${item.link}`}>
                <div className='sub-menu-item'>
                  <p>{item.name}</p>
                </div>
              </Link>
          ))}
          {
            isMobile &&
            <CustomButton
              className='custom-button back-button'
              onClick={() => setIsOpen(!isOpen)}>❮
            </CustomButton>
          }
        </div>
      </CSSTransition>
    </div>
  )
}

export default MenuItem