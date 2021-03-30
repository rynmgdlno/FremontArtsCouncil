import React from 'react'

const ListButton = () => {
  return (
    <div className='list-button view-button'>
      <svg width="46" height="38" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H8V8H0V0ZM46 0H10V8H46V0ZM46 10H10V18H46V10ZM10 20H46V28H10V20ZM46 30H10V38H46V30ZM8 10.2852H0V18.2852H8V10.2852ZM0 20H8V28H0V20ZM8 30H0V38H8V30Z" fill="#C4C4C4" />
      </svg>
      <span className='view-button-text'>List View</span>
    </div>
  )
}

export default ListButton