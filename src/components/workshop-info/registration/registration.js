import React, { useState, useEffect } from 'react'
import * as EmailValidator from 'email-validator'

import CustomButton from '../../custom-button/custom-button'
import FormInput from '../../form-input/form-input'

import './registration.scss'

const Registration = ({ isParade }) => {
  const [regForm, setRegForm] = useState({
    name: '',
    email: '',
    phone: '',
    workshop: ''
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
      workshop: isParade ? 'Parade Registration' : ''
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
    if (isParade && regForm.name && regForm.email && regForm.phone && EmailValidator.validate(regForm.email)) {
      setDisabled(false)
    } else if (regForm.name && regForm.email && regForm.phone && regForm.workshop && EmailValidator.validate(regForm.email)) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [regForm, isParade])

  const fetchParams = {
    crossDomain: true,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      'name': regForm.name,
      'email': regForm.email,
      'subject': `Workshop Registration - ${regForm.workshop}`,
      'message': regForm.phone,
      'recipient': 'ryannmagdaleno@icloud.com'
    })
  }

  const sendForm = async () => {
    setClicked(true)
    if (!submitDisabled) {
      setFixForm(false)
      try {
        let response = await fetch('http://localhost:5000/mail', fetchParams)
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
    <div className='workshop-registration'>
      {
        !success ?
          <>
            <h2>Registration</h2>
            <span>Name:</span>
            <FormInput
              name='name'
              type='text'
              placeholder='Name'
              label='Name'
              onChange={handleChange}
              value={regForm.name}
              className={
                clicked && submitDisabled && fixForm && !regForm.name && 'form-error'
              }
            />
            <span>Email:</span>
            <FormInput
              name='email'
              type='email'
              placeholder='Email'
              label='Email'
              onChange={handleChange}
              value={setRegForm.email}
              className={
                clicked && submitDisabled && fixForm && !EmailValidator.validate(regForm.email) && 'form-error'
              }
            />
            <span>Phone:</span>
            <FormInput
              name='phone'
              type='text'
              placeholder='Phone'
              label='Phone'
              onChange={handleChange}
              value={regForm.phone}
              className={
                clicked && submitDisabled && fixForm && !regForm.phone && 'form-error'
              }
            />
            {
              !isParade &&
              <>
                <span>Workshop:</span>
                <FormInput
                  name='workshop'
                  type='text'
                  placeholder='Workshop'
                  label='Workshop'
                  onChange={handleChange}
                  value={regForm.workshop}
                  className={
                    clicked && submitDisabled && fixForm && !regForm.workshop && 'form-error'
                  }
                />
              </>
            }
            <CustomButton
              onClick={sendForm}
              type='submit'
              className={buttonClass}>
              Submit
            </CustomButton>
            {
              fixForm && clicked && submitDisabled && <span className='form-alert'>Please check the form for errors.</span>
            }
          </>
          :
          <div>
            <h4>Thank you for signing up!</h4>
            <span>We'll be in touch soon.</span>
          </div>
      }
    </div>
  )
}

export default Registration