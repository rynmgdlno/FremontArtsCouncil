import { useEffect, useState } from 'react'

import { getHeader } from '../contentful'


export default function useHeader(headerID) {
  const [header, setHeader] = useState([])
  const [isLoading, setLoading] = useState(true)
  
  useEffect(() => {
    const promiseHeader = getHeader(headerID)
    promiseHeader.then(header => {
      setHeader(header)
      setLoading(false)
    })
  }, [headerID])

  return [header, isLoading]
}

