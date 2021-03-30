import React from 'react'
import CustomButton from '../../../custom-button/custom-button'

import './month-event-card.scss'

const MonthEventCard = ({ image, date, title, id }) => {
  const bgStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  // const eventImage = `https:${image}`
  return (
    <div className='month-event-card'>
      <div style={bgStyle} className='card-event-image' />
      {/* <img alt='' src={eventImage} className='card-event-image'/> */}
      <span className='card-event-date'>{date}</span>
      <h3 className='card-event-title'>{title}</h3>
      <CustomButton className='custom-button low-emphasis-button'>Learn More</CustomButton>
    </div>
  )
}

export default MonthEventCard