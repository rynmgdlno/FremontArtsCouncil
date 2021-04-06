import { useEffect, useState } from 'react'

import { getNews } from '../contentful'

const newsList = getNews()

export default function useNews() {
  const [news, setNews] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    newsList.then(news => {
      setNews(news)
      setLoading(false)
    })
  }, [])

  return [news, isLoading]
}