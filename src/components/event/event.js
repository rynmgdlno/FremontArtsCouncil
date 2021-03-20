import React from 'react'

import useElement from '../../contentful-hooks/use-element'

import './event.scss'

const Event = ({ eventID }) => {
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
        <img className='event-header-image' src={event[6]} alt='' />
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
          <img className='location-map' src={event[8]} alt='a map' />
        </div>
      </div>
      <div className='event-involved'>
        <h2>Get Involved in {event[11]}</h2>
        <span>Help make the Magic Happen</span>
        <div className='event-involved-card-container'>

        </div>
      </div>
      <div className='event-previous'>
        <h2>Previous {event[11]}</h2>
        <div className='prev-event-video-container'></div>
        <div className='prev-event-gallery-container'>
          {
            event[14].map((image => {
              return <img src={image} alt=''/>
            }))
          }
        </div>
      </div>
    </div>
  )
}

export default Event