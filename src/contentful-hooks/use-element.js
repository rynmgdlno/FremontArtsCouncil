import { useEffect, useState } from 'react'

import { getElement } from '../apis/contentful'


export default function useElement(elementID) {
  const [element, setElement] = useState([])
  const [isLoading, setLoading] = useState(true)
  
  useEffect(() => {
    const promiseElement = getElement(elementID)
    promiseElement.then(element => {
      setElement(element)
      setLoading(false)
    })
  }, [elementID])

  return [element, isLoading]
}
