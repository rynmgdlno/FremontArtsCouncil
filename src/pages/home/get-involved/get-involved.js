import React from 'react'
import { Link } from 'react-router-dom'

import Card from './card/card'

import Membership from '../../../images/homepage/involved/membership.png'
import SupportUs from '../../../images/homepage/involved/support-us.png'
import TakeAction from '../../../images/homepage/involved/take-action.png'

import './get-involved.scss'

const GetInvolved = () => {
  return (
    <div className='home-involved'>
      <h2>Get Involved with the Fremont Arts Council</h2>
      <div className='involved-card-container'>
        <Link to='/membership'><Card title='Membership' subTitle='Join Now' image={Membership}/></Link>
        <Link to='/donate'><Card title='Support Us' subTitle='Donate' image={SupportUs}/></Link>
        <Link to='/volunteer'><Card title='Take Action' subTitle='Volunteer' image={TakeAction}/></Link>
      </div>
    </div>
  )
}

export default GetInvolved