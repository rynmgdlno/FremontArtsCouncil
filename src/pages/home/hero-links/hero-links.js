import React from 'react'
import { Link } from 'react-router-dom'


import './hero-links.scss'

const HeroLinks = () => {
  return (
    <div className='hero-links'>
      <Link className='card-container news-area' to='/latest'>
        <div className='news card'>
          <h2 className='card-title'>News</h2>
        </div>
      </Link>
      <Link className='card-container workshops-area' to='/workshops'>
        <div className='workshops card'>
          <h2 className='card-title'>Workshops</h2>
        </div>
      </Link>
      <Link className='card-container events-area' to='/events'>
        <div className='events card'>
          <h2 className='card-title'>Events</h2>
        </div>
      </Link>
    </div>
  )
}

export default HeroLinks