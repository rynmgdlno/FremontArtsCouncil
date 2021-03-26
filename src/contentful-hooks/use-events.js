import { useEffect, useState } from 'react'

import { getEvents } from '../contentful'

const eventList = getEvents()

export default function useEvents() {
  const [events, setEvents] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    eventList.then(events => {
      setEvents(events)
      setLoading(false)
    })
  }, [])

  return [events, isLoading]
}