import React from 'react'
import { useParams } from 'react-router-dom'

import Event from '../../components/event/event'

import './secondary-event.scss'

const SecondaryEvent = () => {
  const { eventID } = useParams()

  return (
    <div>
      <Event isParade={false} eventID={eventID} />
    </div>
  )
}

export default SecondaryEvent

