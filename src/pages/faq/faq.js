import React from 'react'
import Faq from 'react-faq-component'

import useElement from '../../contentful-hooks/use-element'

import Spinner from '../../component-svgs/spinner'

import { paradeFaqData, workshopFaqData } from '../../generative-assets/parade-faq'

import './faq.scss'

const FAQ = () => {
  const [paradeFaq, paradeIsLoading] = useElement('4Kiav87xAYbWddFKLcTfRS')
  const [workshopFaq, workshopIsLoading] = useElement('35tPHhoV7c9dVis9j0VPTH')

  if (paradeIsLoading || workshopIsLoading) return <Spinner />

  console.log(paradeFaq, workshopFaq)

  const paradeData = paradeFaq.fields.faqs
  const workshopData = workshopFaq.fields.faqs

  return (
    <div className='faq-page'>
      <Faq data={paradeData} />
      <Faq data={workshopData} />
      <a download='/src/images/PARADE-MAP-2019.pdf' href='/src/images/PARADE-MAP-2019.pdf'>test</a>
    </div>
  )
}

export default FAQ