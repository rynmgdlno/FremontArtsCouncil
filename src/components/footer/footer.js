import React from 'react'
import { Link } from 'react-router-dom'

import FooterForm from './footer-form/footer-form'

import Facebook from '../../component-svgs/facebook'
import Instagram from '../../component-svgs/instagram'

import './footer.scss'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='about-us footer-section'>
        <h4>About Us</h4>
        <Link to='/mission'><h5>Mission</h5></Link>
        <Link to='/story'><h5>History</h5></Link>
      </div>
      <div className='get-involved footer-section'>
        <h4>Get Involved</h4>
        <Link to='/volunteer'><h5>Volunteer with us</h5></Link>
        <Link to='/membership'><h5>Become a member</h5></Link>
        <Link to='/donate'><h5>Donate Here</h5></Link>
        <Link to='/sponsor-us'><h5>Sponsor us</h5></Link>
      </div>
      <div className='contact-us footer-section'>
        <h4>Contact Us</h4>
        <h5>3940 Fremont Ave N.<br />Seattle, WA 98103</h5>
        <a href='tel:206-547-7440'><h5>206.547.7440</h5></a>
        <div className='socials'>
          <a href="https://www.facebook.com"><Facebook className='social-icon' /></a>
          <a href="https://www.instagram.com"><Instagram className='social-icon' /></a>
        </div>
      </div>
      <div className='footer-form-container footer-section'>
        <h4>Get Our Newsletter</h4>
        <FooterForm />
      </div>
    </div>
  )
}

export default Footer