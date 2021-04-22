import React from 'react'
import { Link } from 'react-router-dom'

import './news-card.scss'

const NewsCard = ({ image, title, date, text, id }) => {
  const bgStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return (
    <>
      <Link to={`/post/${id}`} className='news-card'>
        <div className='news-card-image-container' style={bgStyle} />
        <div className='news-card-info-container'>
          <h3>{title}</h3>
          <span>{date}</span>
          <p>{text}</p>
        </div>
      </Link>
    </>
  )
}

export default NewsCard

  // < Link to = {`/events/${id}`}>
  //   <CustomButton className='custom-button high-emphasis-button blue-button event-card-button'>Learn More</CustomButton>
  //           </ >