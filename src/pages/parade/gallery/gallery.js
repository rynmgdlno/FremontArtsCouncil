import React from 'react'

import { useFlickr } from '../../../apis/flickr'

import './gallery.scss'

const Gallery = () => {
  let page = 1
  const [photos, loading] = useFlickr('fremont solstice parade', page)

  console.log(photos)
  return (
    <div>
      <p>Gallery</p>
    </div>
  )
}

export default Gallery