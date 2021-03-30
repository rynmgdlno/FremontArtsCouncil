import React from 'react'

import './arrow-button.scss'

const ArrowButton = ({ className }) => {
  return (
    <svg className={className} width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32.4999" cy="32.4997" r="28.1667" fill="#1AAF80" />
      <circle cx="32.5" cy="32.5" r="31.5972" stroke="#1AAF80" stroke-width="1.80556" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.128 32.0283C20.1656 31.2493 20.4821 30.4813 21.0774 29.8867L36.4071 14.5751C37.677 13.3066 39.7348 13.3078 41.0033 14.5778C42.2717 15.8477 42.2705 17.9055 41.0006 19.174L27.97 32.1891L40.9852 45.2197C42.2537 46.4896 42.2524 48.5474 40.9825 49.8159C39.7125 51.0843 37.6547 51.0831 36.3863 49.8131L21.0747 34.4835C20.4217 33.8297 20.1052 32.9672 20.125 32.1111C20.1257 32.0835 20.1266 32.0559 20.128 32.0283Z" fill="white" />
    </svg>
  )
}

export default ArrowButton