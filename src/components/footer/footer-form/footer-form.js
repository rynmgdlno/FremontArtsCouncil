import React from 'react'

import FormInput from '../../form-input/form-input'
import CustomButton from '../../custom-button/custom-button'

import './footer-form.scss'

const FooterForm = () => {
  return (
    <div className='footer-form'>
      <div className='form-names'>
        <FormInput
          name='first name'
          type='text'
          placeholder='first name'
          label='first name'
          onChange=''
          className='first-name' />
        <FormInput
          name='last name'
          type='text'
          placeholder='last name'
          label='last name'
          onChange=''
          className='last-name' />
      </div>

      <FormInput
        name='email'
        type='email'
        placeholder='email'
        label='email'
        onChange=''
        className='email' />

      <CustomButton type='submit' className='custom-button medium-emphasis-button sign-up-button'>Sign Up</CustomButton>
    </div>
  )
}

export default FooterForm