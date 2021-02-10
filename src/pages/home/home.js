import React from 'react'
// import { Link } from 'react-router-dom'

import Leader from './leader/leader'
import HeroLinks from './hero-links/hero-links'
import OurSponsors from './our-sponsors/our-sponsors'
// import events from '../../images/homepage/hero/events.png'
// import workshops from '../../images/homepage/hero/workshops.png'
// import news from '../../images/homepage/hero/news.png'




import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Leader />
      <HeroLinks />
      {/* <OurSponsors /> */}
    </div>
  )
}

export default Home