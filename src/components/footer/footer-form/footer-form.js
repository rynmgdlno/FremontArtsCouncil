import React, { useState } from 'react'

import FormInput from '../../form-input/form-input'
import CustomButton from '../../custom-button/custom-button'

import './footer-form.scss'

const FooterForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setForm( prevState => ({
      ...prevState,
      [name] : value
    }))
  }

  const sendForm = () => {

  }

  console.log(form)

  return (
    <div className='footer-form'>
      <div className='form-names'>
        <FormInput
          name='firstName'
          type='text'
          placeholder='first name'
          label='first name'
          onChange={handleChange}
          className='first-name' />
        <FormInput
          name='lastName'
          type='text'
          placeholder='last name'
          label='last name'
          onChange={handleChange}
          className='last-name' />
      </div>

      <FormInput
        name='email'
        type='email'
        placeholder='email'
        label='email'
        onChange={handleChange}
        className='email' />

      <CustomButton
        type='submit'
        className='custom-button medium-emphasis-button sign-up-button'
        onClick={() => sendForm()}
      >
        Sign Up
      </CustomButton>
    </div>
  )
}

export default FooterForm