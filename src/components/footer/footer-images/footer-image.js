import React from 'react'

import Yellow from './yellow'
import Green from './green'

import './footer-image.scss'

const FooterImage = () => {
  return (
    <div className='footer-image'>
      <Yellow className='yellow'/>
      <Green className='green'/>
    </div>
  )
}

export default FooterImage