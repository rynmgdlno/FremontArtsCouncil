import React, { useRef, useEffect } from 'react'
import { useMediaPredicate } from 'react-media-hook'
import ScrollSnap from 'scroll-snap'
import EasingFunctions from '../../../global/EasingFunctions'

import useEvents from '../../../contentful-hooks/use-events'

import Spinner from '../../../component-svgs/spinner'
import HomeEventCard from '../../../components/home-event-card/home-event-card'

import './upcoming-events-workshops.scss'

const UpcomingEventsWorkshops = () => {
  const [events, isLoading] = useEvents('event')
  const isMobile = useMediaPredicate('(max-width: 769px)')
  const snapSize = !isMobile ? '396px' : '70%'
  const container = useRef()

  useEffect(() => {
    const element = container.current
    const snapElement = new ScrollSnap(element, {
      snapDestinationX: snapSize,
      timeout: 100,
      duration: 300,
      threshold: .2,
      easing: EasingFunctions.easeInQuad
    })
    snapElement.bind()
  }, [snapSize])

  return (
    <div className='home-upcoming'>
      <h2>Upcoming Events and Workshops</h2>
      <div className='home-event-card-container' ref={container}>
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