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
        <a href='https://myfremont.wildapricot.org/page-1564909'><Card title='Membership' subTitle='Join Now' image={Membership}/></a>
        <a href='https://myfremont.wildapricot.org/donate'><Card title='Support Us' subTitle='Donate' image={SupportUs}/></a>
        <a href='https://myfremont.wildapricot.org/wp-volunteer'><Card title='Take Action' subTitle='Volunteer' image={TakeAction}/></a>
      </div>
    </div>
  )
}

export default GetInvolved