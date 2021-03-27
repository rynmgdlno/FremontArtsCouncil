import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import useElement from '../../contentful-hooks/use-element'

import GalleryModal from '../gallery-modal/gallery-modal'
import InvolvedCard from './involved-card/involved-card'
import CustomButton from '../custom-button/custom-button'

import Squiggle1 from './graphic-components/squiggle1'
import Squiggle2 from './graphic-components/squiggle2'
import Squiggle3 from './graphic-components/squiggle3'
import Squiggle4 from './graphic-components/squiggle4'


import './event.scss'

const Event = ({ isParade, eventID }) => {
  const [event, isLoading] = useElement(eventID)
  const [isOpen, setIsOpen] = useState(false)
  const [currentImage, setImage] = useState(null)

  if (isLoading) return <p>Loading...</p>

  const {
    appleCalendar,
    eventAboutText,
    eventAboutTitle,
    eventAddress,
    eventDate,
    eventDescription,
    eventDonateImage,
    eventDonateText,
    eventHeaderPhoto,
    eventLocation,
    eventMapImage,
    registerImage,
    registerText,
    eventRsvpText,
    eventRsvpTitle,
    eventTime,
    eventTitle,
    eventVolunteerImage,
    eventVolunteerText,
    googleCalendarLink,
    newEvent,
    outlookCalendar,
    previousEventGallery,
    previousEventMainMedia
  } = event.fields

  const headerImage = `https:${eventHeaderPhoto.fields.file.url}`
  const mapImage = `https:${eventMapImage.fields.file.url}`
  const apple = appleCalendar && `https:${appleCalendar.fields.file.url}`
  const outlook = outlookCalendar && `https:${outlookCalendar.fields.file.url}`
  const donateImage = `https:${eventDonateImage.fields.file.url}`
  const volunteerImage = `https:${eventVolunteerImage.fields.file.url}`
  const regImage = registerImage && `https:${registerImage.fields.file.url}`
  const mainMedia = previousEventMainMedia && `https:${previousEventMainMedia.fields.file.url}`
  const gallery = []

  previousEventGallery.forEach(image => {
    gallery.push(`https:${image.fields.file.url}`)
  });

  return (
    <div className='event'>
      <div className='event-header'>
        <div className='event-header-text'>
          <h1 className='event-header-title'>{eventTitle}</h1>
          <h3 className='event-header-subtitle'>{eventDescription}</h3>
        </div>
        <img className='event-header-image' src={headerImage} alt='' />
      </div>
      <div className='event-body'>
        <div className='event-info'>
          <span>Time:</span>
          <h3 className='event-date'>{eventDate}</h3>
          <h3 className='event-time'>{eventTime}</h3>
          <span>Location:</span>
          <h3 className='event-location'>{eventLocation}</h3>
          <a className='event-address' href={`https://www.google.com/maps/place/${eventAddress}`}><ReactMarkdown plugins={[gfm]} source={eventAddress} /></a>
        </div>
        <div className='event-description'>
          <h3 className='event-about-title'>{eventAboutTitle}</h3>
          <p>{eventAboutText}</p>
        </div>
        <Squiggle1 />
        <Squiggle2 />
        <Squiggle3 />
        <Squiggle4 />
        <div className='event-location-container'>
          <div className='location-description-container'>
            <h2 className='location-title'>{eventRsvpTitle}</h2>
            <p className='rsvp-text'>{eventRsvpText}</p>
            <div className='location-button-container'>
              <CustomButton
                className='custom-button high-emphasis-button green-button'>
                {isParade ? 'Tickets' : 'RSVP'}
              </CustomButton>
              <CustomButton
                onClick={() => setIsOpen(!isOpen)}
                className='custom-button low-emphasis-button rsvp-button'>
                Add to Calendar {isOpen ? '-' : '+'}
              </CustomButton>
              {
                isOpen &&
                <div className='calendar-select'>
                  <a href={apple} download={apple}>
                    <CustomButton
                      className='custom-button low-emphasis-button rsvp-button'>
                      Apple
                          </CustomButton>
                  </a>
                  <a target='_blank' rel='noreferrer' href={googleCalendarLink}>
                    <CustomButton
                      className='custom-button low-emphasis-button rsvp-button'>
                      Google
                          </CustomButton>
                  </a>
                  <a href={outlook} download={outlook}>
                    <CustomButton
                      className='custom-button low-emphasis-button rsvp-button'>
                      Outlook
                          </CustomButton>
                  </a>
                </div>
              }
            </div>
          </div>
          <div className='map-container'>
            <img className='location-map' src={mapImage} alt='a map' />
          </div>
        </div>
        <div className='event-involved'>
          <h2 className='event-get-involved'>Get Involved in {eventTitle}</h2>
          <span>Help make the Magic Happen</span>
          <div className='event-involved-card-container'>
            <InvolvedCard buttonText='Donate Now' text={eventDonateText} bgImage={donateImage} link='/donate' />
            <InvolvedCard buttonText='Volunteer Now' text={eventVolunteerText} bgImage={volunteerImage} link='/volunteer' />
            {
              isParade && <InvolvedCard buttonText='Register Now' text={registerText} bgImage={regImage} link='/parade/register' />
            }
          </div>
        </div>
        {
          !newEvent &&
          <div className='event-previous'>
            <h2 className='prev-event-title'>Previous {eventTitle}</h2>
            <div className='prev-event-video-container'>
              <video controls width='100%'>
                <source src={mainMedia} />
              </video>
            </div>
            <h2>Gallery</h2>
            <div className='prev-event-gallery-container'>
              {
                gallery.map(((image, i) => {
                  const bgStyle = {
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }
                  return (
                    <div onClick={() => setImage(image)} className='event-image-container' key={i} style={bgStyle} />
                  )
                }))
              }
            </div>
            {
              currentImage && <GalleryModal image={currentImage} setImage={setImage} />
            }
          </div>
        }
      </div>
    </div>
  )
}

export default Event