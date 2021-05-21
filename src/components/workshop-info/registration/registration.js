import React, { useState } from 'react'

import FormInput from '../../form-input/form-input'

import './registration.scss'

const Registration = () => {
  const [regForm, setRegForm] = useState({
    name: '',
    email: '',
    phone: '',
    workshop: ''
  })

  return (
    <div>
      <h2>Registration</h2>
      <span>Name:</span>
      <FormInput 
        name=''
        type=''
        placeholder=''
        label=''
        onChange=''
        value=''
        className=''
      />
      <span>Email:</span>
      <FormInput 
        name=''
        type=''
        placeholder=''
        label=''
        onChange=''
        value=''
        className=''
      />
      <span>Phone:</span>
      <FormInput 
        name=''
        type=''
        placeholder=''
        label=''
        onChange=''
        value=''
        className=''
      />
      <span>Workshop:</span>
      <FormInput 
        name=''
        type=''
        placeholder=''
        label=''
        onChange=''
        value=''
        className=''
      />
    </div>
  )
}

export default Registration