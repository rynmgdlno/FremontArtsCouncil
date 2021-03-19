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
    </div>
  )
}

export default Event