import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
// import { CSSTransition } from 'react-transition-group'

import './menu-item.scss'

const MenuItem = ({ isMobile, title, subMenu, menuToggle, setMenuToggle }) => {
  const dropdownRef = useRef(null)

  useEffect(() => {
    const pageClick = (e) => {
      if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
        setMenuToggle(null)
      }
    }
    if (menuToggle) {
      window.addEventListener('click', pageClick);
    }
    return () => {
      window.removeEventListener('click', pageClick);
    }
  }, [menuToggle, setMenuToggle])

  return (
    <div className='sub-menu' ref={dropdownRef}>
      {/* {
        isMobile && <h3>{title}</h3>
      } */}
      {subMenu.map((item) => (
        <Link key={item.id} to={`${item.link}`}>
          <div className='sub-menu-item'>
            <p>{item.name}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default MenuItem