import React, { useState, useEffect, useMemo } from 'react'
import { useMediaPredicate } from 'react-media-hook'

import MonthEventCard from './month/month-event-card/month-event-card'
import CustomButton from '../custom-button/custom-button'
import ArrowButton from '../arrow-button/arrow-button'

import './event-calendar.scss'
// import Month from './month/month'

const EventCalendar = ({ events }) => {
  const months = useMemo(() => [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ], [])

  const [counter, setCounter] = useState(0)
  const [month, setMonth] = useState(months[counter])
  const isMobile = useMediaPredicate('(max-width: 769px)')

  useEffect(() => {
    setMonth(months[counter])
  }, [months, counter])

  const monthPlus = () => {
    if (counter < 11) {
      setCounter(counter + 1)
    } else if (counter === 11) {
      setCounter(0)
    }
  }

  const monthMinus = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    } else if (counter === 0) {
      setCounter(11)
    }
  }

  return (
    <div className='event-calendar'>
      <div className='month-panel'>
        {
          isMobile ?
            <div className='month-header'>
              <CustomButton
                onClick={() => monthMinus()}
                className='custom-button low-emphasis-button'>
                <ArrowButton className='arrow-button' />
              </CustomButton>
              <h2 className='month-title'>{month}</h2>
              <CustomButton
                onClick={() => monthPlus()}
                className='custom-button low-emphasis-button'>
                <ArrowButton className='arrow-button right-button' />
              </CustomButton>
            </div> :
            <div className='month-header'>
              <h2 className='month-title'>{month}</h2>
            </div>
        }
        <div className='month-window'>
          {
            events.map((event) => (
              counter === parseInt((event.fields.sortDate).slice(5, 7)) - 1 &&
              <MonthEventCard
                key={event.sys.id}
                image={event.fields.eventHeaderPhoto.fields.file.url}
                date={event.fields.eventDate}
                title={event.fields.eventTitle}
                id={event.sys.id}
              />
            ))
          }
        </div>
      </div>
      {
        !isMobile &&
        <div className='month-button-container'>
          <CustomButton
            onClick={() => monthMinus()}
            className='custom-button low-emphasis-button'>
            <ArrowButton className='arrow-button' />
          </CustomButton>
          <CustomButton
            onClick={() => monthPlus()}
            className='custom-button low-emphasis-button'>
            <ArrowButton className='arrow-button right-button' />
          </CustomButton>
        </div>
      }
    </div>
  )
}

export default EventCalendar