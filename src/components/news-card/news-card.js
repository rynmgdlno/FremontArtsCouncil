import React from 'react'

import './news-card.scss'

const NewsCard = ({image, title, text}) => {
  const bgStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return (
    <div className='news-card'>
      <div className='news-card-image-container' style={bgStyle}/>
      <div className='news-card-info-container'>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default NewsCard