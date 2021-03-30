import React, { useState } from 'react'

import useEvents from '../../contentful-hooks/use-events'

import EventCalendar from '../../components/event-calendar/event-calendar'
import PageHeader from '../../components/page-header/page-header'
import EventCard from '../../components/event-card/event-card'

import './upcoming-events.scss'
import ViewButton from '../../components/view-button/view-button'

const UpcomingEvents = () => {
  const [events, isLoading] = useEvents()
  const [isCalendar, setCalendar] = useState(false)

  return (
    <div>
      <PageHeader headerID={'3ACKdcppZYgrXRuYgBPcm3'} />
      <div className='display-button-container'>
        <ViewButton
          className='view-button'
          isCalendar={isCalendar}
          setCalendar={setCalendar} />
      </div>
      {
        isCalendar ?
          <EventCalendar />
          :
          <div>
            {
              isLoading ? <p>Loading...</p> :
                events.map((event) => (
                  <EventCard
                    key={event.sys.id}
                    image={event.fields.eventHeaderPhoto.fields.file.url}
                    title={event.fields.eventTitle}
                    text={event.fields.eventDescription}
                    date={event.fields.eventDate}
                    id={event.sys.id}
                  />
                ))
            }
          </div>
      }

    </div>
  )
}

export default UpcomingEvents