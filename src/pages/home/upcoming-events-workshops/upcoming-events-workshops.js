import React, { useState } from 'react'
import { useMediaPredicate } from 'react-media-hook'

import useEvents from '../../../contentful-hooks/use-events'

import Spinner from '../../../component-svgs/spinner'
import HomeEventCard from '../../../components/home-event-card/home-event-card'

import './upcoming-events-workshops.scss'

const UpcomingEventsWorkshops = () => {
  const [events, isLoading] = useEvents('event')
  const isMobile = useMediaPredicate('(max-width: 769px)')

  const mobileList = () => {
    if (isMobile) {
      while (events.length > 2) {
        events.pop()
      }
    }
  }

  mobileList()

  console.log(events)

  return (
    <div className='home-upcoming'>
      <h2>Upcoming Events and Workshops</h2>
      <div className='home-event-card-container'>
        {
          isLoading ? <Spinner /> :
            events.map((event) => (
              <HomeEventCard
                key={event.sys.id}
                image={event.fields.eventHeaderPhoto.fields.file.url}
                title={event.fields.eventTitle}
                date={event.fields.eventDate}
                id={event.sys.id}
              />
            ))
        }
      </div>
    </div>
  )
}

export default UpcomingEventsWorkshops