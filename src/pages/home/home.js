import React from 'react'
import { Link } from 'react-router-dom'

// import events from '../../images/homepage/hero/events.png'
// import workshops from '../../images/homepage/hero/workshops.png'
// import news from '../../images/homepage/hero/news.png'

import tpn from '../../images/homepage/sponsors/tpn.png'
import nash from '../../images/homepage/sponsors/nash.png'
import fourLogo from '../../images/homepage/sponsors/4.png'
import cheer from '../../images/homepage/sponsors/cheer.png'
import mipops from '../../images/homepage/sponsors/mipops.png'


import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <div className='leader'>
        <div className='leader-text'>
          <h1>Where Everyone is an Artist</h1>
          <h3>The Fremont Arts Council engages community to cultivate the spirit of celebration where everyone is an artist.</h3>
        </div>
        <div className='leader-image'></div>
      </div>
      <div className='hero-links'>
        <div className='hero-card events'><Link to='/upcoming-events'>
          <h2>Events</h2>
        </Link></div>
        <div className='hero-card workshops'><Link to='/workshops'>
          <h2>Workshops</h2>
        </Link></div>
        <div className='hero-card news'><Link to='/latest'>
          <h2>News</h2>
        </Link></div>
      </div>
      <div className='upcoming'>

      </div>
      <div className='inspired'>

      </div>
      <div className='sponsors'>
        <h3>Our Sponsors</h3>
        <div className='sponsors-logos'>
          <img className='tpn-logo-image' alt='sponsor logo' src={tpn} />
          <img className='nash-logo-image' alt='sponsor logo' src={nash} />
          <img className='four-logo-image' alt='sponsor logo' src={fourLogo} />
          <img className='cheer-logo-image' alt='sponsor logo' src={cheer} />
          <img className='mipops-logo-image' alt='sponsor logo' src={mipops} />
        </div>
      </div>
    </div>
  )
}

export default Home