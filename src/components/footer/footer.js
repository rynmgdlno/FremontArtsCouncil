import React from 'react'

import './footer.scss'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='about-us'>
        <h4>About Us</h4>
        <p>Mission</p>
        <p>History</p>
      </div>
      <div className='get-involved'>
        <h4>Get Involved</h4>
        <p>Volunteer with us</p>
        <p>Become a member</p>
        <p>Donate Here</p>
        <p>Sponsor us</p>
      </div>
      <div className='contact-us'>
        <h4>Contact Us</h4>
        <p>3940 Fremont Ave N.<br />Seattle, WA 98103</p>
        <p>206.547.7440</p>
      </div>
      <div className='footer-form-container'>
        <h4>Footer Form</h4>
        <p>Social Links</p>
      </div>
    </div>
  )
}

export default Footer