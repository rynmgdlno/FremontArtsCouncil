import React from 'react'
import { Link } from 'react-router-dom'


import './home-event-card.scss'

const HomeEventCard = ({ image, title, date, id }) => {

  const bgStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <Link to={`/events/${id}`}>
      <div className='home-event-card'>
        <div className='home-event-card-image' style={bgStyle} />
        <div className='home-event-card-info'>
          <h4>{title}</h4>
          <h5>{date}</h5>
        </div>
      </div>
    </Link>
  )
}

export default HomeEventCard