import React from 'react'

import './gallery-modal.scss'

const GalleryModal = ({ image, setImage }) => {
  return (
    <div onClick={() => setImage(null)} className='gallery-modal'>
      <img className='gallery-modal-image' src={image} alt=''/>
    </div>
  )
}

export default GalleryModal