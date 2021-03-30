import React, { useState } from 'react'

import PageHeader from '../../components/page-header/page-header'

import FormInput from '../../components/form-input/form-input'
import CustomButton from '../../components/custom-button/custom-button'
import EmailIcon from '../../component-svgs/email-icon'
import Green1 from '../../component-svgs/green-numbers/1'
import Green2 from '../../component-svgs/green-numbers/2'
import Green3 from '../../component-svgs/green-numbers/3'
import Events from '../../images/volunteer/events.png'
import Workshops from '../../images/volunteer/workshops.png'
import Opportunities from '../../images/volunteer/opportunities.png'

import './volunteer.scss'

const Volunteer = () => {
  const [regPage, setRegPage] = useState(false)
  const [regSuccess, setSuccess] = useState(false)

  return (
    <div>
      <PageHeader headerID={'cgwKEKraq0iHBmI8QjjO9'} />
      {
        !regPage ?
          <div className='volunteer'>
            <h3 className='vol-title'>There are 3 Ways You Can Help</h3>
            <div className='volunteer-card'>
              <div className='vol-card-header'>
                <Green1 />
                <h3>Volunteer for an event</h3>
              </div>
              <div className='vol-card-main'>
                <img className='vol-card-image' alt='' src={Events} />
                <div className='vol-card-content'>
                  <p>Help is always needed on the day of events such as the Fremont Solstice Parade. You can plan and organize these events or provide artistic support. Please consider volunteering year-round!</p>
                  <CustomButton onClick={() => setRegPage(true)} className='custom-button high-emphasis-button blue-button event-card-button'>Sign Up</CustomButton>
                </div>
              </div>
            </div>
            <div className='volunteer-card'>
              <div className='vol-card-header'>
                <Green2 />
                <h3>Volunteer for a workshop</h3>
              </div>
              <div className='vol-card-main'>
                <img className='vol-card-image' alt='' src={Workshops} />
                <div className='vol-card-content'>
                  <p>Want to work on art projects for our events? Have personal passion projects? Want to teach? Come to a workshop.</p>
                  <CustomButton onClick={() => setRegPage(true)} className='custom-button high-emphasis-button blue-button event-card-button'>Sign Up</CustomButton>
                </div>
              </div>
            </div>
            <div className='volunteer-card'>
              <div className='vol-card-header'>
                <Green3 />
                <h3>Volunteer with the organization</h3>
              </div>
              <div className='vol-card-main'>
                <img className='vol-card-image' alt='' src={Opportunities} />
                <div className='vol-card-content'>
                  <p>Would you like to join our circle of friends who are committed to supporting the FAC year-round? This is your chance to meet a parade of new friends and help make community art happen and thrive.</p>
                  <CustomButton onClick={() => setRegPage(true)} className='custom-button high-emphasis-button blue-button event-card-button'>Sign Up</CustomButton>
                </div>
              </div>
            </div>
            <div className='vol-bottom'>
              <p>Any questions?</p>
              <p>Please don’t hesitate to email us!</p>
              <div className='vol-email-container'>
                <EmailIcon /><span className='vol-email'>volunteer@fremontartscouncil.org</span>
              </div>
            </div>
          </div>
          : regSuccess ?
            <div className='reg-success'>
              <h1>Thanks for volunteering!</h1>
              <p>An email confirmation will be sent to you shortly.</p>
            </div>
            :
            <div className='reg-form'>
              <h2>Sign Up To Volunteer</h2>
              <h3>Your Information</h3>
              <div className='reg-form-container'>
                <FormInput className='reg-form-input' type='text' label='First Name' placeholder='First Name' name='First Name' />
                <FormInput className='reg-form-input' type='text' label='Last Name' placeholder='Last Name' name='Last Name' />
                <FormInput className='reg-form-input' type='email' label='Email' placeholder='Email' name='Email' />
                <FormInput className='reg-form-input' type='text' label='Phone Number:' placeholder='Phone Number:' name='Phone Number:' />
                <CustomButton onClick={() => setSuccess(true)} className='custom-button high-emphasis-button blue-button'>Volunteer Now</CustomButton>
              </div>
            </div>
      }
    </div>
  )
}

export default Volunteer