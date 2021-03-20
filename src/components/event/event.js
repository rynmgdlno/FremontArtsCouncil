import React from 'react'

import useElement from '../../contentful-hooks/use-element'

import './event.scss'

const Event = ({eventID}) => {
  const [event, isLoading] = useElement(eventID)

  if (isLoading) return <p>Loading...</p>
  console.log(event)
  return (
    <div className='event'>
      <div className='event-header'>
        <div className='event-header-text'>
          <h1 className='event-header-title'>{event[11]}</h1>
          <h3 className='event-header-subtitle'>{event[3]}</h3>
        </div>
        <img className='event-header-image' src={event[6]} alt=''/>
      </div>
      <div className='event-info'>
        <span>Time</span>
        <h2>{event[2]}</h2>
        <h2>1 PM  - 4 PM</h2>
        <span>Location</span>
        <h4>{event[7]}</h4>
        <h4>{event[1]}</h4>
      </div>
      <div className='event-description'>
        <h2>About {event[11]}</h2>
        <p>{event[0]}</p>
      </div>
      <div className='event-location'>
        <div className='location-description-container'>
          <h2 className='location-title'>{event[10]}</h2>
          <p>{event[9]}</p>
        </div>
        <div className='map-container'>
          <img className='location-map' src={event[8]} alt=''/>
        </div>
      </div>
      <div className='event-involved'></div>
      <div className='event-previous'></div>
    </div>
  )
}

export default Event