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

  const userAmount = formData.amount / 100
  const userRepeat = formData.repeat ? 'monthly recurring' : 'one-time'

  const buttonClass = (x) => (
    formData.amount === x ?
      `custom-button high-emphasis-button blue-button` :
      `custom-button high-emphasis-button`
  )

  const monthlyButtonClass = {
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

  const setOther = (e) => {
    const re = /^[0-9/b]+$/
    if (e.target.value === '' || re.test(e.target.value)) {
      setForm(prevState => ({
        ...prevState,
        amount: parseInt(e.target.value) * 100
      }))
    }
  }

  const setRepeat = (x) => {
    setForm(prevState => ({
      ...prevState,
      repeat: x
    }))
  }

  useEffect(() => {
    if (!formData.amount) {
      setForm(prevState => ({
        ...prevState,
        amount: 10000
      }))
    }
  }, [formData.amount])


  return (
    <div className='donate'>
      <PageHeader headerID={'6VtsyGKz7dyJi6mHtZH8KI'} />
      <div className='donate-container'>
        <h3>Donate</h3>
        <span>Donation Amount:</span>
        <div className='donate-button-container'>
          <CustomButton
            onClick={() => setAmount(10000)}
            className={buttonClass(10000)}>
            $100
            </CustomButton>
          <CustomButton
            name={7500}
            onClick={() => setAmount(7500)}
            className={buttonClass(7500)}>
            $75
            </CustomButton>
          <CustomButton
            name={5000}
            onClick={() => setAmount(5000)}
            className={buttonClass(5000)}>
            $50
            </CustomButton>
          <CustomButton
            name={2500}
            onClick={() => setAmount(2500)}
            className={buttonClass(2500)}>
            $25
            </CustomButton>
          <CustomButton
            name={1500}
            onClick={() => setAmount(1500)}
            className={buttonClass(1500)}>
            $15
            </CustomButton>
        </div>
        <div className='other'>
          <span>Other:</span>
          <FormInput type='number' placeholder='$  USD' onChange={setOther} />
        </div>
        <div>
          <h5>Make it monthly?</h5>
          <CustomButton
            onClick={() => setRepeat(false)}
            className={formData.repeat ? monthlyButtonClass.unselected : monthlyButtonClass.selected}>
            One Time
          </CustomButton>
          <CustomButton
            onClick={() => setRepeat(true)}
            className={!formData.repeat ? monthlyButtonClass.unselected : monthlyButtonClass.selected}>
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
        <span>{`By clicking "Pay" you agree to a ${userRepeat} payment of $${userAmount}.00`}</span>
      </div>
    </div>
  )
}

export default Donate