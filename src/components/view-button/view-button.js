import React from 'react'

import CustomButton from '../custom-button/custom-button'
import ListButton from './list-button'
import CalendarButton from './calendar-button'

const ViewButton = ({ className, isCalendar, setCalendar }) => {
  return (
    <div className={className}>
      <CustomButton
        className='custom-button low-emphasis-button view-button'
        onClick={() => setCalendar(!isCalendar)}>
        {
          isCalendar ? <ListButton /> : <CalendarButton />
        }
      </CustomButton>

    </div>
  )
}

export default ViewButton