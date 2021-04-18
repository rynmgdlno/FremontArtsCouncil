import React from 'react'

import './gallery-card.scss'

const GalleryCard = ({ image, description, owner, showInfo }) => {
  return (
    <div className='gallery-card'>
      <img src={image} alt={description} />
      {
        showInfo &&
        <div className='mobile-info'>
          <p>{description}</p>
          <p>{`📷 :  ${owner}`}</p>
        </div>
      }
      <div className='image-info'>
        <p>{description}</p>
        <p>{`📷 :  ${owner}`}</p>
      </div>
    </div>
  )
}

export default GalleryCard