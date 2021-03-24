import React from 'react'
import { Link } from 'react-router-dom'

import './press.scss'

const Press = () => {
  const eventID = '1UKT0Hhk6HHeTtqHPuW83t'
  return (
    <div>
      <p>Press</p>
      <Link to={`/events/${eventID}`}>Test</Link>
    </div>
  )
}

export default Press