import React, { useState } from 'react'

import CustomButton from '../../custom-button/custom-button'
import FormInput from '../../form-input/form-input'

import './registration.scss'

const Registration = () => {
  const [regForm, setRegForm] = useState({
    name: '',
    email: '',
    phone: '',
    workshop: ''
  })

  // const [success, setSuccess] = useState(false)

  const clearForm = () => {
    setRegForm({
      firstName: '',
      lastName: '',
      email: ''
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setRegForm(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

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
    try {
      let response = await fetch('http://localhost:5000/mail', fetchParams)
      if (response.ok === true) {
        clearForm()
        // setSuccess(true)
      }
    } catch {
      console.log('error')
    }
  }

  console.log(regForm.name)

  return (
    <div className='workshop-registration'>
      <h2>Registration</h2>
      <span>Name:</span>
      <FormInput 
        name='name'
        type='text'
        placeholder='Name'
        label='Name'
        onChange={handleChange}
        value={regForm.name}
        className=''
      />
      <span>Email:</span>
      <FormInput 
        name='email'
        type='email'
        placeholder='Email'
        label='Email'
        onChange={handleChange}
        value={setRegForm.email}
        className=''
      />
      <span>Phone:</span>
      <FormInput 
        name='phone'
        type='text'
        placeholder='Phone'
        label='Phone'
        onChange={handleChange}
        value={regForm.phone}
        className=''
      />
      <span>Workshop:</span>
      <FormInput 
        name='workshop'
        type='text'
        placeholder='Workshop'
        label='Workshop'
        onChange={handleChange}
        value={regForm.workshop}
        className=''
      />
      <CustomButton onClick={sendForm} className='custom-button high-emphasis-button green-button'>Submit</CustomButton>
    </div>
  )
}

export default Registration