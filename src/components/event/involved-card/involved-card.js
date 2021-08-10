import React from 'react'
import { Link } from 'react-router-dom'
import CustomButton from '../../custom-button/custom-button'

import './involved-card.scss'

const InvolvedCard = ({ buttonText, text, bgImage, link, isExternal }) => {

  const bgStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <div className='involved-card'>
      <div className='ic-image-container' style={bgStyle}></div>
      {
        isExternal ?
          <a href={link}>
            <CustomButton className='ic-card-button custom-button high-emphasis-button green-button'>{buttonText}</CustomButton>
          </a>
          :
          <Link to={link}>
            <CustomButton className='ic-card-button custom-button high-emphasis-button green-button'>{buttonText}</CustomButton>
          </Link>
      }
      {/* <CustomButton className='ic-card-button custom-button high-emphasis-button green-button'>{buttonText}</CustomButton> */}
      <div className='ic-text-container'><p>{text}</p></div>
    </div>
  )
}

export default InvolvedCard