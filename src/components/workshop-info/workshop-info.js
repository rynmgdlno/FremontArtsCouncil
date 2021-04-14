import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import useElement from '../../contentful-hooks/use-element'

import CustomButton from '../custom-button/custom-button'
import Blobs from '../../component-svgs/workshop-info/blobs'
import Fan2 from '../../component-svgs/workshop-info/fan2'
import BrBlob2 from '../../component-svgs/workshop-info/brblob2'

import './workshop-info.scss'

const WorkshopInfo = ({ id, isTeach, isParade }) => {
  const [workshop, isLoading] = useElement(id)

  if (isLoading) return <p>Loading...</p>

  const {
    dateTime,
    location,
    info
  } = workshop.fields

  return (
    <div className='workshop-info'>
      <Blobs />
      <Fan2 />
      <BrBlob2 />
      <div className='workshop-info-page-container'>
        {
          !isTeach &&
          <div className='wip-sidebar'>
            <h3>Date & Time</h3>
            <ReactMarkdown plugins={[gfm]} source={dateTime} />
            <h3>Location</h3>
            <ReactMarkdown plugins={[gfm]} source={location} />
          </div>
        }
        <div className='wip-info'>
          <ReactMarkdown className='wip-main-text' plugins={[gfm]} source={info} />
          {
            !isParade ?
              <>
                <CustomButton className='custom-button high-emphasis-button blue-button'>Register</CustomButton>
                <h3 className='faq'>FAQ</h3>
                <p>Luminata and workshop FAQs</p>
                <CustomButton className='custom-button high-emphasis-button blue-button'>Learn More</CustomButton>
              </>
              :
              <>
                <CustomButton className='custom-button medium-emphasis-button'>Register</CustomButton>
                <h3 className='faq'>FAQ</h3>
                <p>All you need to know about ensemble logistics</p>
                <CustomButton className='custom-button medium-emphasis-button'>Learn More</CustomButton>
              </>
          }
        </div>
      </div>
    </div>
  )
}

export default WorkshopInfo