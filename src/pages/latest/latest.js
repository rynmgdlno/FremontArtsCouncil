import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import NewsCard from '../../components/news-card/news-card'
import PageHeader from '../../components/page-header/page-header'
import Spinner from '../../component-svgs/spinner'

import useNews from '../../contentful-hooks/use-news'

import './latest.scss'

const Latest = () => {
  const [news, isLoading] = useNews()
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
              <div className='recent-header-text'>
                <h2 className='recent-title'>{recent.fields.newsTitle}</h2>
                <span>{recent.fields.date}</span>
              </div>
            </div>
            <ReactMarkdown source={recent.fields.newsText} plugins={[gfm]} />
          </div>
        }
        <h2>More News...</h2>
        {
          news ?
            <div className='news-card-container'>
              {
                isLoading ? <Spinner /> :
                  newNews.map((entry) => (
                    <NewsCard
                      key={entry.sys.id}
                      image={entry.fields.newsEntryImage.fields.file.url}
                      title={entry.fields.newsTitle}
                      date={entry.fields.date}
                      text={`${entry.fields.newsText.slice(0, 100)}...`}
                      id={entry.sys.id}
                    />
                  ))
              }
            </div>
            :
            <h2>Nothing to see here, check back later for updates!</h2>
        }
      </div>
    </div>
  )
}

export default Latest