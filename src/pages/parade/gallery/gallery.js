import React, { useState, useEffect } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import { useFlickr } from '../../../apis/flickr'

import GalleryCard from '../../../components/gallery-card/gallery-card'
import Spinner from '../../../component-svgs/spinner'

import './gallery.scss'
import CustomButton from '../../../components/custom-button/custom-button'
import GalleryModal from '../../../components/gallery-modal/gallery-modal'

const Gallery = () => {
  const [page, setPage] = useState(1)
  const [photos, isLoading] = useFlickr('fremont solstice parade seattle', page)
  const [currentImage, setImage] = useState(null)
  console.log(page)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [photos])

  if (isLoading) return <Spinner />

  const photoList = photos.photos.photo
  const pages = photos.pages

  const handlePage = () => {
    if (page === 3) {
      setPage(5)
    } else if (page === pages) {
      setPage(1)
    } else {
      setPage(page + 1)
    }
  }


  return (
    <div className='gallery-page'>
      <h3 id='top' className='gallery-title'>Parade Gallery</h3>
      <ResponsiveMasonry>
        <Masonry >
          {
            photoList.map(((photo) => {
              return (
                photo.url_l &&
                <div onClick={() => setImage(photo.url_l)}>
                  <GalleryCard image={photo.url_l} owner={photo.ownername} description={photo.title} id={photo.id} />
                </div>
              )
            }))
          }
        </Masonry>
      </ResponsiveMasonry>
      {
        currentImage && <GalleryModal image={currentImage} setImage={setImage} />
      }
      <CustomButton onClick={() => handlePage()}>Load More Photos</CustomButton>
    </div>
  )
}

export default Gallery