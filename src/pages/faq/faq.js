import React from 'react'
import Faq from 'react-faq-component'

import { paradeFaqData, workshopFaqData } from '../../generative-assets/parade-faq'

import './faq.scss'

const FAQ = () => {
  
  return (
    <div className='faq-page'>
      <Faq className='test' data={paradeFaqData} />
      <Faq data={workshopFaqData} />
    </div>
  )
}

export default FAQ