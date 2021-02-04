import React from 'react'

import CustomButton from '../custom-button/custom-button'

import './menu-item.scss'

const MenuItem = ({ subMenu }) => {
  return (
    <div>
      {subMenu.map((link) => (
        <div key={link.id}>{link.name}</div>
      ))}
    </div>
  )
}

export default MenuItem