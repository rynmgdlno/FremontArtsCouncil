import React from 'react'

import tpn from '../../../images/homepage/sponsors/tpn.png'
import nash from '../../../images/homepage/sponsors/nash.png'
import fourLogo from '../../../images/homepage/sponsors/4.png'
import cheer from '../../../images/homepage/sponsors/cheer.png'
import mipops from '../../../images/homepage/sponsors/mipops.png'

import './our-sponsors.scss'

const OurSponsors = () => {
  return (
    <div className='sponsors'>
      <h3>Our Sponsors</h3>
      <div className='sponsors-logos'> 
        <a href="https://www.tpnevents.com"><img className='tpn-logo-image sponsor-link' alt='sponsor logo' src={tpn} /></a>
        <a href="https://nwartstream.org"><img className='nash-logo-image sponsor-link' alt='sponsor logo' src={nash} /></a>
        <a href="https://www.4culture.org"><img className='four-logo-image sponsor-link' alt='sponsor logo' src={fourLogo} /></a>
        <a href="https://www.cheerseattle.org"><img className='cheer-logo-image sponsor-link' alt='sponsor logo' src={cheer} /></a>
        <a href="https://www.mipops.org"><img className='mipops-logo-image sponsor-link' alt='sponsor logo' src={mipops} /></a>
      </div>
    </div>
  )
}

export default OurSponsors