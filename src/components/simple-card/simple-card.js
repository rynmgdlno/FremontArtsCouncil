import React from 'react'
import { Link } from 'react-router-dom'

import CustomButton from '../custom-button/custom-button'

import './simple-card.scss'

const SimpleCard = ({ title, text, link, buttonText, image }) => {
  return (
    <div className='simple-card'>
      <img className='s-card-image' src={image} alt='' />
          <div className='s-card-info-container'>
            <h3 className='s-card-title'>{title}</h3>
            <p className='s-card-info'>{text}</p>
            <Link to={link}>
              <CustomButton className='custom-button high-emphasis-button blue-button'>{buttonText}</CustomButton>
            </Link>
          </div>
    </div>
  )
}

export default SimpleCard