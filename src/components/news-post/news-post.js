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
      <div className='most-recent'>
        <div className='recent-header'>
          <img className='recent-image' src={image} alt='' />
          <h2 className='recent-title'>{newsTitle}</h2>
          <span>{date}</span>
        </div>
        <ReactMarkdown source={newsText} plugins={[gfm]}/>
      </div>
    </div>
  )
}

export default NewsPost