import React from 'react'

const CalendarButton = () => {
  return (
    <div className='calendar-button view-button'>
      <svg width="46" height="43" viewBox="0 0 46 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="5" width="46" height="8" fill="#C4C4C4" />
        <rect x="11.5" y="0.5" width="4" height="9" fill="#C4C4C4" stroke="white" />
        <rect x="31.5" y="0.5" width="4" height="9" fill="#C4C4C4" stroke="white" />
        <rect y="15" width="46" height="28" fill="#C4C4C4" />
        <rect x="11" y="21" width="5" height="5" fill="white" />
        <rect x="21" y="21" width="5" height="5" fill="white" />
        <rect x="31" y="21" width="5" height="5" fill="white" />
        <rect x="11" y="31" width="5" height="5" fill="white" />
        <rect x="21" y="31" width="5" height="5" fill="white" />
        <rect x="31" y="31" width="5" height="5" fill="white" />
      </svg>
      <span className='view-button-text'>Calendar View</span>
    </div>

  )
}

export default CalendarButton