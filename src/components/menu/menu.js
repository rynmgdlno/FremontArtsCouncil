import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import MenuItem from '../menu-item/menu-item'
import CustomButton from '../custom-button/custom-button'

import menuTree from '../../generative-assets/menu'

import './menu.scss'

const Menu = ({ isMobile }) => {
  const [menuToggle, setMenuToggle] = useState(null)

  const toggleMenu = (id) => {
    if (menuToggle != null && menuToggle === id) {
      setMenuToggle(null)
    } else {
      setMenuToggle(id)
    }
  }

  return (
    <div className='menu'>
      {menuTree.map((menuEntry) => (
        <div className='entry' key={menuEntry.id} id={menuEntry.name}>
          <CustomButton className='custom-button low-emphasis-button' onClick={() => {
            toggleMenu(menuEntry.id)
            // setIsOpen(!isOpen)
          }}>{menuEntry.name}</CustomButton>
          <div className='sub-menu-container'>
            {
              menuToggle === menuEntry.id &&
              <MenuItem isMobile={isMobile} title={menuEntry.name} subMenu={menuEntry.subMenu} menuToggle={menuToggle} setMenuToggle={setMenuToggle}></MenuItem>
            }
          </div>
        </div>
      ))}
    </div>
  )
}

export default Menu