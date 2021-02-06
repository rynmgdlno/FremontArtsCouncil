import React, {useState} from 'react'

import MenuItem from '../menu-item/menu-item'
import CustomButton from '../custom-button/custom-button'
import Highlight from '../../component-svgs/highlight'

import menuTree from '../../generative-assets/menu'

import './menu.scss'

const Menu = () => {
  const [ menuToggle, setMenuToggle ] = useState(null)
  const toggleMenu = (id) => {
    if (menuToggle != null && menuToggle === id) {
      setMenuToggle(null)
    } else {
      setMenuToggle(id)
    }
    console.log(menuToggle)
  }

  return (
    <div className='menu'>
      {menuTree.map((menuEntry) => (
        <div className='entry' key={menuEntry.id}>
          <CustomButton className='custom-button low-emphasis-button' onClick={() => toggleMenu(menuEntry.id)}>{menuEntry.name}</CustomButton>
          {/* <Highlight /> */}
          <div className='sub-menu-container'>
            {
              menuToggle === menuEntry.id ? 
              <MenuItem subMenu={menuEntry.subMenu}></MenuItem>
              : ''
            }
          </div>
        </div>
      ))}
    </div>
  )
}

export default Menu