import React from 'react'

import './press-card.scss'

const PressCard = ({ image, title, text, link }) => {
  const bgStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <div className='press-card'>
      <div className='press-header'>
        <div className='press-image' style={bgStyle} />
        <div className='press-header-text'>
          <h3>{title}</h3>
          <a href={link}>
            <p>{link}</p>
          </a>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default PressCard