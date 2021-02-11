import React from 'react'

import LeaderImage from './leader-image/leader-image'

import './leader.scss'

const Leader = () => {
  return (
    <div className='leader'>
      <div className='leader-text'>
        <h1>Where Everyone is an Artist</h1>
        <h3>The Fremont Arts Council engages community to cultivate the spirit of celebration where everyone is an artist.</h3>
      </div>
      <LeaderImage />
    </div>
  )
}

export default Leader