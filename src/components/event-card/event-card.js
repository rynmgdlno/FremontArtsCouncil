import React from 'react'
import { useMediaPredicate } from 'react-media-hook'

import CustomButton from '../custom-button/custom-button'

import './event-card.scss'

const EventCard = ({ className, image, title, text, date, id }) => {
  const isMobile = useMediaPredicate('(max-width: 769px)')

  return (
    <>
      {
        !isMobile ?
          <div className={className}>
            <img className='event-card-image' src={`https:${image}`} alt='' />
            <div className='event-card-info-container'>
              <span>{date}</span>
              <h2>{title}</h2>
              <p>{text}</p>
              <CustomButton>{id}</CustomButton>
            </div>
          </div>
          :
          <div>
            <span>{date}</span>
            <h2>{title}</h2>
            <img className='event-card-image' src={`https:${image}`} alt='' />
            <p>{text}</p>
            <CustomButton>{id}</CustomButton>
          </div>
      }
    </>
  )
}

export default EventCard

