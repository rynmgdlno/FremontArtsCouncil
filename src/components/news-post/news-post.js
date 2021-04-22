import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import useElement from '../../contentful-hooks/use-element'

import Spinner from '../../component-svgs/spinner'

import './news-post.scss'

const NewsPost = ({ postID }) => {
  const [news, isLoading] = useElement(postID)

  if (isLoading) return <Spinner />

  const {
    newsTitle,
    date,
    newsText,
    newsEntryImage
  } = news.fields

  const image = newsEntryImage.fields.file.url

  return (
    <div className='news-post'>
      <div className='post-header'>
        <img className='post-image' src={image} alt='' />
        <div className='post-header-text'>
          <h2 className='post-title'>{newsTitle}</h2>
          <span className='post-date'>{date}</span>
        </div>
      </div>
      <ReactMarkdown source={newsText} plugins={[gfm]} className='post-text' />
    </div>
  )
}

export default NewsPost