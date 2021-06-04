import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import useElement from '../../contentful-hooks/use-element'

import Spinner from '../../component-svgs/spinner'

import './general-page.scss'

const GeneralPage = ({ id }) => {

  const [data, isLoading] = useElement(id)
  if (isLoading) return <Spinner className='spinner-standard'/>
  const {
    title,
    headerImage,
    subTitle,
    content
  } = data.fields

  const header = `https:${headerImage.fields.file.url}`

  return (
    <div className='general-page'>
      <div className='general-header'>
        <div className='general-header-text'>
          <h1 className='general-title'>{title}</h1>
          <h3 className='general-subtitle'>{subTitle}</h3>
        </div>
        <img className='general-header-image' src={header} alt='' />
      </div>
      <div>
        <ReactMarkdown className='general-content' source={content} plugins={[gfm]} />
      </div>
    </div>
  )
}

export default GeneralPage