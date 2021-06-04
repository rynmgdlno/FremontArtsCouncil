import React, { useState } from 'react'

import useElement from '../../../contentful-hooks/use-element'

import Spinner from '../../../component-svgs/spinner'
import GalleryModal from '../../../components/gallery-modal/gallery-modal'

import './get-inspired.scss'

const GetInspired = () => {
  const [element, isLoading] = useElement('5rbK1d3d9GPmNY4pmCu9eJ')
  const [currentImage, setImage] = useState(null)

  if (isLoading) return <Spinner className='spinner-standard'/>

  const inspiredGallery = element.fields.gallery
  const gallery = []

  inspiredGallery.forEach(image => {
    gallery.push(`https:${image.fields.file.url}`)
  })

  return (
    <div className='home-inspired'>
      <h2>Get Inspired</h2>
      <a href='https://www.instagram.com/fremontartscouncil/'>
        <h4 className='ig-link'>See Our Instagram Feed</h4>
      </a>
      <div className='inspired-gallery-container'>
        {
          gallery.map(((image, i) => {
            const bgStyle = {
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }
            return (
              <div onClick={() => setImage(image)} className='inspired-image-container' key={i} style={bgStyle} />
            )
          }))
        }
      </div>
      {
        currentImage && <GalleryModal image={currentImage} setImage={setImage} />
      }
    </div>
  )
}

export default GetInspired