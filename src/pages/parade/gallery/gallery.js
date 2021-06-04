import React, { useState, useEffect } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useMediaPredicate } from 'react-media-hook'

import { useFlickr } from '../../../apis/flickr'

import GalleryCard from '../../../components/gallery-card/gallery-card'
import Spinner from '../../../component-svgs/spinner'
import Arrow from '../../../component-svgs/arrow/arrow'

import './gallery.scss'
import CustomButton from '../../../components/custom-button/custom-button'
import GalleryModal from '../../../components/gallery-modal/gallery-modal'

const Gallery = () => {
  const [page, setPage] = useState(1)
  const [photos, isLoading] = useFlickr('fremont solstice parade seattle', page)
  const [currentImage, setImage] = useState(null)
  const isMobile = useMediaPredicate('(max-width: 769px)')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [photos])

  if (isLoading) return <Spinner className='spinner-standard'/>

  const photoList = photos.photos.photo
  const pages = photos.photos.pages

  const nextPage = () => {
    if (page === 3) {
      setPage(5)
    } else if (page === pages) {
      setPage(1)
    } else {
      setPage(page + 1)
    }
  }

  const prevPage = () => {
    if (page === 5) {
      setPage(3)
    } else if (page === 1) {
      setPage(pages)
    } else {
      setPage(page - 1)
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
                <div
                  onClick={() => {
                    setImage(photo.url_l)
                  }}
                  key={photo.id}
                >
                  <GalleryCard image={photo.url_l} owner={photo.ownername} description={photo.title} />
                </div>
              )
            }))
          }
        </Masonry>
      </ResponsiveMasonry>
      {
        currentImage && <GalleryModal image={currentImage} setImage={setImage} />
      }
      {
        isMobile ?
          <div className='page-buttons'>
            <CustomButton
              className='custom-button low-emphasis-button'
              onClick={() => prevPage()}>
              <div className='arrow-container'>
                <Arrow className='arrow'/>
                <span>Previous</span>
              </div>
            </CustomButton>
            <CustomButton
              className='custom-button low-emphasis-button'
              onClick={() => nextPage()}>
              <div className='arrow-container'>
                <span>Next</span>
                <Arrow className='arrow right'/>
              </div>
            </CustomButton>
          </div>
          :
          <div className='page-buttons'>
            <CustomButton
              className='custom-button high-emphasis-button blue-button'
              onClick={() => prevPage()}>
              Previous Page
            </CustomButton>
            <CustomButton
              className='custom-button high-emphasis-button blue-button'
              onClick={() => nextPage()}>
              Next Page
        </CustomButton>
          </div>
      }
    </div>
  )
}

export default Gallery