import React from 'react'

import './event-card.scss'

const EventCard = ({className, image, title, text, date, id}) => {

  return (
    <div className={className}>
      <img src={`https:${image}`} alt=''/>
      <h2>{title}</h2>
      <span>{date}</span>
      <p>{text}</p>
      <span>{id}</span>
    </div>
  )
}

export default EventCard