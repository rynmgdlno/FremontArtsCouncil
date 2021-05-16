import React from 'react'

// import './card.scss'

const Card = ({ title, subTitle, image }) => {
  const background = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%' 
  }

  return (
    <div
      className='involved-card'
      style={background}
    >
      <h3 className='involved-card-title'>{title}</h3>
      <h4>{subTitle}</h4>
    </div>
  )
}

export default Card