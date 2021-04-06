import React from 'react'
import { Link } from 'react-router-dom'
import { useMediaPredicate } from 'react-media-hook'

import CustomButton from '../custom-button/custom-button'
import Divider from './divider'

import './event-card.scss'

const EventCard = ({ image, title, text, date, id }) => {
  const isMobile = useMediaPredicate('(max-width: 769px)')

  const bgStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <>
      {
        isMobile ?
          <div className='event-card'>
            <h3 className='event-card-date'>{date}</h3>
            <h2 className='event-card-title'>{title}</h2>
            <div className='event-card-image' style={bgStyle} />
            <p className='event-card-text'>{text}</p>
            <Link to={`/events/${id}`}>
              <CustomButton className='custom-button high-emphasis-button blue-button event-card-button'>Learn More</CustomButton>
            </Link>
          </div>
          :
          <div className='event-card'>
            <div className='event-card-image' style={bgStyle} />
            <Divider className='event-divider' />
            <div className='event-card-info-container'>
              <span className='event-card-date'>{date}</span>
              <h2 className='event-card-title'>{title}</h2>
              <p className='event-card-text'>{text}</p>
              {
                id === '61oWXVlzBWbbMVrZNp9cw6' ?
                  <Link to={`/parade`}>
                    <CustomButton className='custom-button high-emphasis-button blue-button event-card-button'>Learn More</CustomButton>
                  </Link>
                  :
                  <Link to={`/events/${id}`}>
                    <CustomButton className='custom-button high-emphasis-button blue-button event-card-button'>Learn More</CustomButton>
                  </Link>
              }
            </div>
          </div>
      }
    </>
  )
}

export default EventCard

