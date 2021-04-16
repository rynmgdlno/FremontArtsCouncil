import { useEffect, useState } from 'react'

const key = '35f2b97aa4d71d2dde9316744b4eb552'
// const code = 'f7df2b5e679153be'

export const getFlickr = async (query, page) => {
  const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&text=${query}&page=${page}&tag_mode=all&safe_search=1&extras=url_l,owner_name&per_page=100&format=json&nojsoncallback=1`)
  const photos = await response.json()
  return photos
}

export const useFlickr = (query, page) => {
  const [photos, setPhotos] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const getPhotos = getFlickr(query, page)
    getPhotos.then(photos => {
      setPhotos(photos)
      setLoading(false)
    })
  }, [query, page])

  return [photos, isLoading]
}
