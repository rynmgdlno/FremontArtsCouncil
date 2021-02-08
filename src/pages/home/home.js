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
        <Link className='hero-card events' to='/upcoming-events'><div>
          <h2 className='card-container'>Events</h2>
        </div></Link>
        <Link className='hero-card workshops' to='/workshops'><div>
          <h2 className='card-container'>Workshops</h2>
        </div></Link>
        <Link className='hero-card news' to='/latest'><div>
          <h2 className='card-container'>News</h2>
        </div></Link>
      </div>
      <div className='upcoming'>

      </div>
      <div className='inspired'>

      </div>
      <div className='sponsors'>
        <h3>Our Sponsors</h3>
        <div className='sponsors-logos'>
          <a href="https://www.tpnevents.com"><img className='tpn-logo-image' alt='sponsor logo' src={tpn} /></a>
          <a href="https://nwartstream.org"><img className='nash-logo-image' alt='sponsor logo' src={nash} /></a>
          <a href="https://www.4culture.org"><img className='four-logo-image' alt='sponsor logo' src={fourLogo} /></a>
          <a href="https://www.cheerseattle.org"><img className='cheer-logo-image' alt='sponsor logo' src={cheer} /></a>
          <a href="https://www.mipops.org"><img className='mipops-logo-image' alt='sponsor logo' src={mipops} /></a>
        </div>
      </div>
    </div>
  )
}

export default Home