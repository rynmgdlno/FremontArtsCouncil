import React, { useState, useEffect } from 'react'

import NewsCard from '../../components/news-card/news-card'

import PageHeader from '../../components/page-header/page-header'
import useNews from '../../contentful-hooks/use-news'

import './latest.scss'

const Latest = () => {
  const [news, isLoading] = useNews('event')
  const [newNews, setNews] = useState()
  const [recent, setRecent] = useState()

  useEffect(() => {
    setRecent(news[0])
    setNews(news.slice(1))
  }, [news])

  return (
    <div>
      <PageHeader headerID={'JIiZ8itrU7Lx2dqDXbOpr'} />
      <div className='news-page'>
        {
          recent &&
          <div className='most-recent'>

            <div className='recent-header'>
              <img className='recent-image' src={recent.fields.newsEntryImage.fields.file.url} alt='' />
              <h2 className='recent-title'>{recent.fields.newsTitle}</h2>
            </div>
            <p>{recent.fields.newsText}</p>

          </div>
        }
        <h2>More News...</h2>
        <div className='news-card-container'>
          {
            isLoading ? <p>Loading...</p> :
              newNews.map((entry) => (
                <NewsCard
                  key={entry.sys.id}
                  image={entry.fields.newsEntryImage.fields.file.url}
                  title={entry.fields.newsTitle}
                  text={`${entry.fields.newsText.slice(0, 100)}...`}
                />
              ))
          }
        </div>
      </div>
    </div>
  )
}

export default Latest