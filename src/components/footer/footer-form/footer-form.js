import React, { useState } from 'react'

// import FormInput from '../../form-input/form-input'
import CustomButton from '../../custom-button/custom-button'
// import Close from '../../../component-svgs/close'

import './footer-form.scss'

const FooterForm = () => {
  // const [form, setForm] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: ''
  // })

  // const [success, setSuccess] = useState(false)

  // const clearForm = () => {
  //   setForm({
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //   })
  // }

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setForm(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }))
  // }

  // const fetchParams = {
  //   crossDomain: true,
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     'name': `${form.firstName} ${form.lastName}`,
  //     'email': form.email,
  //     'subject': 'Newsletter Signup Request',
  //     'message': 'N/A',
  //     'recipient': 'henrylarspeterson@gmail.com'
  //   })
  // }

  // const sendForm = async () => {
  //   try {
  //     let response = await fetch('http://api.rnmtest.com/mail', fetchParams)
  //     if (response.ok === true) {
  //       clearForm()
  //       setSuccess(true)
  //       console.log(response)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <div className='footer-form'>
      <a href="https://myfremont.wildapricot.org/Subscribe">
        <CustomButton
          className='custom-button medium-emphasis-button sign-up-button'
        >
          Sign Up
        </CustomButton>
      </a>
      {/* <div className='form-names'>
        <FormInput
          name='firstName'
          type='text'
          placeholder='first name'
          label='first name'
          onChange={handleChange}
          value={form.firstName}
          className='first-name' />
        <FormInput
          name='lastName'
          type='text'
          placeholder='last name'
          label='last name'
          onChange={handleChange}
          value={form.lastName}
          className='last-name' />
      </div>
      <FormInput
        name='email'
        type='email'
        placeholder='email'
        label='email'
        onChange={handleChange}
        value={form.email}
        className='email' />
      <CustomButton
        type='submit'
        className='custom-button medium-emphasis-button sign-up-button'
        onClick={sendForm}
      >
        Sign Up
      </CustomButton>
      {
        success &&
        <div className='success'>
          <CustomButton
            className='close-button custom-button low-emphasis-button'
            onClick={() => setSuccess(false)} >
            <Close className='close' />
          </CustomButton>
          <h2>Thank You!</h2>
        </div>
      } */}
    </div>
  )
}

export default FooterForm