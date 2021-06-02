import React, { useState, useEffect } from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

import PageHeader from '../../components/page-header/page-header'

import CustomButton from '../../components/custom-button/custom-button'
import FormInput from '../../components/form-input/form-input'

import StripeForm from '../../stripe/stripe-form'

import './donate.scss'

const stripePromise = loadStripe('pk_test_51IsCuEBBSrRv5J3Zd5DoRDLR13q6o7wPI9fqXgdLmaqDbIc38M4dLHeiI2QXZoX42RFg1QqfM9NRKojhX6KwtIOK0074JyLeRY')

const Donate = () => {
  const [formData, setForm] = useState({
    repeat: true,
    amount: 10000,
    fName: '',
    lName: '',
    email: '',
    phone: ''
  })

  const buttonClass = {
    unselected: `custom-button high-emphasis-button`,
    selected: `custom-button high-emphasis-button blue-button`
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }))
    console.log(formData)
  }

  const setAmount = (e) => {
    setForm(prevState => ({
      ...prevState,
      amount: e
    }))
  }

  useEffect(() => {
    console.log(formData.amount)
  }, [formData])

  // console.log(amount)

  return (
    <div className='donate'>
      <PageHeader headerID={'6VtsyGKz7dyJi6mHtZH8KI'} />
      <div className='donate-button-container'>
        <h3>Donate</h3>
        <CustomButton
          onClick={() => setAmount(10000)}
          className={formData.amount === 10000 ? buttonClass.selected : buttonClass.unselected}>
          $100
          </CustomButton>
        <CustomButton
          name={7500}
          onClick={() => setAmount(7500)}
          className={formData.amount === 7500 ? buttonClass.selected : buttonClass.unselected}>
          $75
          </CustomButton>
        <CustomButton
          name={5000}
          onClick={() => setAmount(5000)}
          className={formData.amount === 5000 ? buttonClass.selected : buttonClass.unselected}>
          $50
          </CustomButton>
        <CustomButton
          name={2500}
          onClick={() => setAmount(2500)}
          className={formData.amount === 2500 ? buttonClass.selected : buttonClass.unselected}>
          $25
          </CustomButton>
        <CustomButton
          name={1500}
          onClick={() => setAmount(1500)}
          className={formData.amount === 1500 ? buttonClass.selected : buttonClass.unselected}>
          $15
          </CustomButton>
        <span>Other:</span>
        <FormInput type='number' placeholder='$  USD' />
      </div>
      <div>
        <h5>Make it monthly?</h5>
        <CustomButton
          className='custom-button high-emphasis-button'>
          One Time
        </CustomButton>
        <CustomButton
          className='custom-button high-emphasis-button'>
          Monthly
        </CustomButton>
      </div>
      <div className='information'>
        <h3>Your Information</h3>
        <FormInput
          name='fName'
          type='text'
          label='First Name'
          placeholder='First Name'
          onChange={handleChange}
        />
        <FormInput
          name='lName'
          type='text'
          label='Last Name'
          placeholder='Last Name'
          onChange={handleChange}
        />
        <FormInput
          name='email'
          type='email'
          label='Email'
          placeholder='Email'
          onChange={handleChange}
        />
        <FormInput
          name='phone'
          type='tel'
          label='Phone Number'
          placeholder='Phone Number'
          onChange={handleChange}
        />
      </div>
      <Elements stripe={stripePromise}>
        <StripeForm />
      </Elements>
    </div>
  )
}

export default Donate