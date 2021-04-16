import React from 'react'

import './gallery-card.scss'

const GalleryCard = ({ image, description, owner}) => {
  return (
    <div className='gallery-card'>
      <img src={image} alt={description} />
      <div className='image-info'>
        <p>{description}</p>
        <p>{`📷 :  ${owner}`}</p>
      </div>
    </div>
  )
}

export default GalleryCard