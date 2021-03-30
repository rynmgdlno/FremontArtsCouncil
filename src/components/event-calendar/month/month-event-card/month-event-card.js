import React from 'react'

import './month-event-card.scss'

const MonthEventCard = ({ image, date, title, id }) => {
  const eventImage = `https:${image}`
  return (
    <div className='month-event-card'>
      <img alt='' src={eventImage} />
      <span>{date}</span>
      <h3>{title}</h3>
    </div>
  )
}

export default MonthEventCard