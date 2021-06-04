import React from 'react'

import './spinner.scss'

const Spinner = ({ className }) => {
  return (
    <div className={className}>
      <svg className={` spinner`} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.32 113.34">
        <circle cx="50.65" cy="12.65" r="12.65" fill="#077fa4" />
        <circle cx="12.65" cy="34.45" r="12.65" fill="#ef303a" />
        <circle cx="12.65" cy="78.89" r="12.65" fill="#ad5fbe" />
        <circle cx="50.66" cy="100.69" r="12.65" fill="#ec9028" />
        <circle cx="88.67" cy="78.89" r="12.65" fill="#1aaf80" />
        <circle cx="88.67" cy="34.45" r="12.65" fill="#e5bc37" />
      </svg>
    </div>
  )
}

export default Spinner