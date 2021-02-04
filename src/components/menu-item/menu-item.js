import React from 'react'
import {Link} from 'react-router-dom'

// import CustomButton from '../custom-button/custom-button'

import './menu-item.scss'

const MenuItem = ({ subMenu }) => {
  return (
    <div className='sub-menu'>
      {subMenu.map((item) => (
        <Link key={item.id} to={`${item.link}`}><p>{item.name}</p></Link>
      ))}
    </div>
  )
}

export default MenuItem