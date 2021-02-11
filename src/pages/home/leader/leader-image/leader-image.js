import React from 'react'

import Astronut from '../../../../images/homepage/leader/astronut 1.png'
import Orange from './orange'
import Purple from './purple'
import Yellow from './yellow'
// import Orange from '../../../../images/homepage/leader/Vector-2.svg'
// import Yellow from '../../../../images/homepage/leader/Vector-3.svg'
// import Purple from '../../../../images/homepage/leader/Vector.svg'

import './leader-image.scss'

const LeaderImage = () => {
  return (
    <div className='leader-image'>
      <img src={Astronut} alt='astronaut' className='astronut'/>
      <Purple className='purple'/>
      <Yellow className='yellow'/>
      <Orange className='orange'/>
    </div>
  )
}

export default LeaderImage