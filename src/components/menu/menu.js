import React from 'react'

import MenuItem from '../menu-item/menu-item'
import CustomButton from '../custom-button/custom-button'

import menuTree from '../../generative-assets/menu'

import './menu.scss'

const Menu = () => {
  // console.log(menuTree)
  return (
    <div className='menu'>
      {menuTree.map((menuEntry) => (
        <div key={menuEntry.id}>
          <CustomButton>{menuEntry.name}</CustomButton>
          <MenuItem subMenu={menuEntry.subMenu}></MenuItem>
        </div>
      ))}
    </div>
  )
}

export default Menu