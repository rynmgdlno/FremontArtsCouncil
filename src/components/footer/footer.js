import React from 'react'
import { Link } from 'react-router-dom'

import './footer.scss'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='about-us'>
        <h4>About Us</h4>
        <Link to='/mission'><h5>Mission</h5></Link>
        <Link to='/story'><h5>History</h5></Link>
      </div>
      <div className='get-involved'>
        <h4>Get Involved</h4>
        <Link to='/volunteer'><h5>Volunteer with us</h5></Link>
        <Link to='/membership'><h5>Become a member</h5></Link>
        <Link to='/donate'><h5>Donate Here</h5></Link>
        <Link to='/sponsor-us'><h5>Sponsor us</h5></Link>
      </div>
      <div className='contact-us'>
        <h4>Contact Us</h4>
        <h5>3940 Fremont Ave N.<br />Seattle, WA 98103</h5>
        <a href='tel:206-547-7440'><h5>206.547.7440</h5></a>
      </div>
      <div className='footer-form-container'>
        <h4>Footer Form</h4>
        <h5>Social Links</h5>
      </div>
    </div>
  )
}

export default Footer