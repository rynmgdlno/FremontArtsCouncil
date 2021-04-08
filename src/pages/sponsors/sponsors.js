import React from 'react'
import { Link } from 'react-router-dom'

import tpn from '../../images/homepage/sponsors/tpn.png'
import nash from '../../images/homepage/sponsors/nash.png'
import fourLogo from '../../images/homepage/sponsors/4.png'
import cheer from '../../images/homepage/sponsors/cheer.png'
import mipops from '../../images/homepage/sponsors/mipops.png'

import './sponsors.scss'

const Sponsors = () => {
  return (
    <div className='sponsors-page'>
      <h1>Thank You to our 2020 Virtual Parade Sponsors!</h1>
      <span>Interested in <Link to='/sponsor-us'>Sponsoring the Parade</Link>?</span>
      <h3>A Huge Thank You to our ‘Interstellar Explorer’ Sponsors! This historic celebration of Art event was made possible with the following organizations:</h3>
      <div className='sponsors-container'>
        <span>Event platform and marketing support:</span>
        <a href="https://www.tpnevents.com"><img className='tpn-logo-image sponsor-link' alt='sponsor logo' src={tpn} /></a>
        <a href="https://nwartstream.org"><img className='nash-logo-image sponsor-link' alt='sponsor logo' src={nash} /></a>
        <span>Grant relief:</span>
        <a href="https://www.4culture.org"><img className='four-logo-image sponsor-link' alt='sponsor logo' src={fourLogo} /></a>
        <span>Green Hat Go-Getters:</span>
        <a href="https://www.cheerseattle.org"><img className='cheer-logo-image sponsor-link' alt='sponsor logo' src={cheer} /></a>
        <span>Historical footage preservation:</span>
        <a href="https://www.mipops.org"><img className='mipops-logo-image sponsor-link' alt='sponsor logo' src={mipops} /></a>
      </div>
    </div>
  )
}

export default Sponsors