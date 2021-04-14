import { useEffect, useState } from 'react'

import { getPress } from '../apis/contentful'


export default function usePress(pressID) {
  const [press, setPress] = useState([])
  const [isLoading, setLoading] = useState(true)
  
  useEffect(() => {
    const promiseElement = getPress(pressID)
    promiseElement.then(press => {
      setPress(press)
      setLoading(false)
    })
  }, [pressID])

  return [press, isLoading]
}
