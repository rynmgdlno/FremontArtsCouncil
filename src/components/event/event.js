import React from 'react'

import useElement from '../../contentful-hooks/use-element'

import './event.scss'

const Event = ({eventID}) => {
  const [event, isLoading] = useElement(eventID)

  if (isLoading) return <p>Loading...</p>
  console.log(event)
  return (
    <div>
      henlo
    </div>
  )
}

export default Event