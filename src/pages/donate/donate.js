import React, {useState} from 'react'

import PageHeader from '../../components/page-header/page-header'

import CustomButton from '../../components/custom-button/custom-button'
import FormInput from '../../components/form-input/form-input'

import './donate.scss'

const Donate = () => {
  const [formData, setForm] = useState({
    repeat: false,
    amount: 0,
    fName: '',
    lName: '',
    email: '',
    phone: '',
    address: '',
    method: '',
    cardFirstName: '',
    cardLastName: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    secCode: '',
    billAddress: '',
    billCity: '',
    billState: '',
    billCountry: ''
  })

  return ( 
    <div className='donate'>
      <PageHeader headerID={'6VtsyGKz7dyJi6mHtZH8KI'}/>
      <form>
        <div className='donate-button-container'>
          <h3>Donate</h3>
          <CustomButton>$100</CustomButton>
          <CustomButton>$75</CustomButton>
          <CustomButton>$50</CustomButton>
          <CustomButton>$25</CustomButton>
          <CustomButton>$15</CustomButton>
          <span>Other:</span>
          <FormInput type='number' placeholder='$  USD'/>
        </div>
        <div className='information'>
        <h3>Your Information</h3>
          <FormInput type='text' label='First Name' placeholder='First Name'/>
          <FormInput type='text' label='Last Name' placeholder='Last Name'/>
          <FormInput type='email' label='Email' placeholder='Email'/>
          <FormInput type='tel' label='Phone Number' placeholder='Phone Number'/>
          <FormInput type='text' label='Address' placeholder='Address'/>
        </div>
        <div className='payment-info'>
          <div className='payment-methods'>
          <p>Payment Method</p>
            <FormInput type='radio' label='American Express' />
            <FormInput type='radio' label='Discover' />
            <FormInput type='radio' label='MasterCard' />
            <FormInput type='radio' label='Visa' />
            <FormInput type='radio' label='PayPal' />
          </div>
          <FormInput type='text' label='First name on card' placeholder='First Name'/>
          <FormInput type='text' label='Last name on card' placeholder='Last Name'/>
          <FormInput type='text' label='Credit Card Number' placeholder='xxxx-xxxx-xxxx-xxxx'/>
          <FormInput type='text' label='Month' placeholder='Month'/>
          <FormInput type='text' label='Year' placeholder='Year'/>
          <FormInput type='text' label='Security Code' placeholder='Security Code'/>
          <p>Billing Address:</p>
          <FormInput type='text' label='Address' placeholder='Address'/>
          <FormInput type='text' label='City' placeholder='City'/>
          <FormInput type='text' label='State/Region' placeholder='State/Region'/>
          <FormInput type='text' label='Country' placeholder='Country'/>
        </div>
      </form>
    </div>
  )
}

export default Donate