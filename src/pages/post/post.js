import React from 'react'
import { useParams } from 'react-router-dom'

import NewsPost from '../../components/news-post/news-post'

import './post.scss'

const Post = () => {
  const { postID } = useParams()
  return (
    <div>
      <NewsPost postID={postID} />
    </div>
  )
}

export default Post