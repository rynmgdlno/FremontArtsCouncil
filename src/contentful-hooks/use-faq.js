import { useEffect, useState } from 'react'

import { getFaq } from '../apis/contentful'

const eventList = getFaq()

export default function useFaq() {
  const [faq, setFaq] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    eventList.then(events => {
      setFaq(events)
      setLoading(false)
    })
  }, [])

  return [faq, isLoading]
}