import React, { useState, useEffect } from 'react'
import * as EmailValidator from 'email-validator'

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

  const [regForm, setRegForm] = useState({
    name: '',
    email: '',
    phone: '',
    volunteer: ''
  })

  const [submitDisabled, setDisabled] = useState(true)
  const [fixForm, setFixForm] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [success, setSuccess] = useState(false)
  const buttonClass = !submitDisabled ? `custom-button high-emphasis-button green-button` : `custom-button high-emphasis-button disabled-button`

  const clearForm = () => {
    setRegForm({
      name: '',
      email: '',
      phone: '',
      volunteer: ''
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setRegForm(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  useEffect(() => {
    if (regForm.name && regForm.email && regForm.phone && regForm.volunteer && EmailValidator.validate(regForm.email)) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [regForm])

  const fetchParams = {
    crossDomain: true,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      'name': regForm.name,
      'email': regForm.email,
      'subject': `Workshop Registration - ${regForm.workshop}`,
      'message': regForm.phone,
      'recipient': 'henrylarspeterson@gmail.com'
    })
  }

  const sendForm = async () => {
    setClicked(true)
    if (!submitDisabled) {
      setFixForm(false)
      try {
        let response = await fetch('http://api.rnmtest.com/mail', fetchParams)
        if (response.ok === true) {
          clearForm()
          setSuccess(true)
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      setFixForm(true)
    }
  }



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
                  <a href="https://myfremont.wildapricot.org/wp-volunteer">
                    <CustomButton className='custom-button high-emphasis-button blue-button event-card-button'>Sign Up</CustomButton>
                  </a>
                  {/* <CustomButton onClick={() => setRegPage(true)} className='custom-button high-emphasis-button blue-button event-card-button'>Sign Up</CustomButton> */}
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
                  <a href="https://myfremont.wildapricot.org/wp-volunteer">
                    <CustomButton className='custom-button high-emphasis-button blue-button event-card-button'>Sign Up</CustomButton>
                  </a>
                  {/* <CustomButton onClick={() => setRegPage(true)} className='custom-button high-emphasis-button blue-button event-card-button'>Sign Up</CustomButton> */}
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
                  <a href="https://myfremont.wildapricot.org/wp-volunteer">
                    <CustomButton className='custom-button high-emphasis-button blue-button event-card-button'>Sign Up</CustomButton>
                  </a>
                  {/* <CustomButton onClick={() => setRegPage(true)} className='custom-button high-emphasis-button blue-button event-card-button'>Sign Up</CustomButton> */}
                </div>
              </div>
            </div>
            <div className='vol-bottom'>
              <p>Any questions?</p>
              <p>Please don’t hesitate to email us!</p>
              <div className='vol-email-container'>
                <EmailIcon /><a href="mailto:volunteer@fremontartscouncil.org"><span className='vol-email'>volunteer@fremontartscouncil.org</span></a>
              </div>
            </div>
          </div>
          : success ?
            <div className='reg-success'>
              <h1>Thanks for volunteering!</h1>
              <p>An email confirmation will be sent to you shortly.</p>
            </div>
            :
            <div className='reg-form'>
              <h2>Sign Up To Volunteer</h2>
              <h3>Your Information</h3>
              <div className='reg-form-container'>
                <span>Name:</span>
                <FormInput
                  className={
                    clicked && submitDisabled && fixForm && !regForm.name && 'form-error'
                  }
                  type='text'
                  label='Name'
                  placeholder='Name'
                  name='name'
                  onChange={handleChange} />
                <span>Email:</span>
                <FormInput
                  className={
                    clicked && submitDisabled && fixForm && !EmailValidator.validate(regForm.email) && 'form-error'
                  }
                  type='email'
                  label='Email'
                  placeholder='Email'
                  name='email'
                  onChange={handleChange} />
                <span>Phone:</span>
                <FormInput
                  className={
                    clicked && submitDisabled && fixForm && !regForm.phone && 'form-error'
                  }
                  type='text'
                  label='Phone Number:'
                  placeholder='Phone:'
                  name='phone'
                  onChange={handleChange} />
                <span>How would you like to help?</span>
                <textarea
                  name='volunteer'
                  maxLength={500}
                  onChange={handleChange}
                  className={
                    clicked && submitDisabled && fixForm && !regForm.volunteer && 'textarea-error'
                  }
                />
                <CustomButton onClick={sendForm} className={buttonClass}>Submit</CustomButton>
                {
                  fixForm && clicked && submitDisabled && <span className='form-alert'>Please fill out the form correctly.</span>
                }
              </div>
            </div>
      }
    </div>
  )
}

export default Volunteer