import React from 'react'

import useEvents from '../../contentful-hooks/use-events'
import PageHeader from '../../components/page-header/page-header'
import EventCard from '../../components/event-card/event-card'

import './upcoming-events.scss'

const UpcomingEvents = () => {
  const [events, isLoading] = useEvents()

  return (
    <div>
      <PageHeader headerID={'3ACKdcppZYgrXRuYgBPcm3'} />
      {
        isLoading ? <p>Loading...</p> :
          events.map((event) => (
            <EventCard 
              key={event.sys.id}
              className='event-card'
              image={event.fields.eventHeaderPhoto.fields.file.url}
              title={event.fields.eventTitle}
              text={event.fields.eventDescription}
              date={event.fields.eventDate}
              id={event.sys.id}
            />
          ))
      }
    </div>
  )
}

export default UpcomingEvents