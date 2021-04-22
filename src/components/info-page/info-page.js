import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import useElement from '../../contentful-hooks/use-element'

import Spinner from '../../component-svgs/spinner'

import './info-page.scss'

const InfoPage = ({ elementID }) => {
  const [element, isLoading] = useElement(elementID)

  if (isLoading) return <Spinner />

  const {
    infoTextOne,
    infoTextTwo,
    infoTextThree,
    optionalImage,
    pageHeaderImage,
    pageTitle
  } = element.fields

  const headerImage = `https:${pageHeaderImage.fields.file.url}`
  const secondaryImage = optionalImage && `https:${optionalImage.fields.file.url}`

  console.log(element)

  return (
    <div className='info-page'>
      <div className='info-page-header'>
        <div className='info-page-header-text'>
          <h1 className='info-page-header-title'>{pageTitle}</h1>
        </div>
        <img className='info-page-header-image' src={headerImage} alt='' />
      </div>
      <div className='info-page-body'>
        <ReactMarkdown source={infoTextOne} plugins={[gfm]} />
        <div className='text-image-container'>
          {
            optionalImage && <img className='mid-image' src={secondaryImage} alt='' />
          }
          {
            infoTextTwo && <ReactMarkdown className='mid-text' source={infoTextTwo} plugins={[gfm]} />
          }
        </div>
        {
          infoTextThree && <ReactMarkdown source={infoTextThree} plugins={[gfm]} />
        }
      </div>
    </div>
  )
}

export default InfoPage