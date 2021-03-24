import React from 'react'

import Event from '../../components/event/event'

import './secondary-event.scss'

const SecondaryEvent = (eventID) => {
  // let {eventID} = props.match.params
  // eventID = eventID.substring(1)
  
  return (
    <div>
      <Event isParade={false} eventID={eventID} />
    </div>
  )
}

export default SecondaryEvent

