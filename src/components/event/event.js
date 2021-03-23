import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import CustomButton from '../custom-button/custom-button'
import useElement from '../../contentful-hooks/use-element'

import './event.scss'

const Event = ({ isParade, eventID }) => {
  const [event, isLoading] = useElement(eventID)

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
    eventRegisterImage,
    eventRegisterText,
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
  console.log(googleCalendarLink)

  const headerImage = `https:${eventHeaderPhoto.fields.file.url}`
  const mapImage = `https:${eventMapImage.fields.file.url}`
  const apple = `https:${appleCalendar.fields.file.url}`
  const outlook = `https:${outlookCalendar.fields.file.url}`
  const donateImage = `https:${eventDonateImage.fields.file.url}`
  const volunteerImage = `https:${eventVolunteerImage.fields.file.url}`
  const registerImage = eventRegisterImage && `https:${eventRegisterImage.fields.file.url}`
  const mainMedia = `https:${previousEventMainMedia.fields.file.url}`
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
        <div className='event-location-container'>
          <div className='location-description-container'>
            <h2 className='location-title'>{eventRsvpTitle}</h2>
            <p>{eventRsvpText}</p>
            {
              isParade ?
                <div className='location-button-container'>
                  <CustomButton>Tickets</CustomButton>
                  <CustomButton>Add to Calendar</CustomButton>
                  <CustomButton>Add to Calendar</CustomButton>
                </div> :
                <div className='location-button-container'>
                  <CustomButton>RSVP</CustomButton>
                  <CustomButton>Add to Calendar</CustomButton>
                </div>
            }
          </div>
          <div className='map-container'>
            <img className='location-map' src={mapImage} alt='a map' />
          </div>
        </div>
        <div className='event-involved'>
          <h2 className='event-get-involved'>Get Involved in {eventTitle}</h2>
          <span>Help make the Magic Happen</span>
          <div className='event-involved-card-container'>
          </div>
        </div>
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
                  <div className='event-image-container' key={i} style={bgStyle} />
                )
              }))
            }
          </div>
        </div>
      </div>
    </div >
  )
}

export default Event