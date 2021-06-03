import React, { useState, useEffect } from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import * as EmailValidator from 'email-validator'

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

  const [clicked, setClicked] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [fixForm, setFixForm] = useState(false)

  const buttonClass = (x) => (
    formData.amount === x ?
      `custom-button high-emphasis-button blue-button disabled-button-selected` :
      `custom-button medium-emphasis-button `
  )

  const monthlyButtonClass = {
    unselected: `custom-button medium-emphasis-button`,
    selected: `custom-button high-emphasis-button blue-button disabled-button-selected`
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }))
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
            onClick={() => setRepeat(true)}
            className={!formData.repeat ? monthlyButtonClass.unselected : monthlyButtonClass.selected}>
            Monthly
          </CustomButton>
          <CustomButton
            onClick={() => setRepeat(false)}
            className={formData.repeat ? monthlyButtonClass.unselected : monthlyButtonClass.selected}>
            One Time
          </CustomButton>
        </div>
        <div className='information'>
          <h3>Your Information</h3>
          <div className='inputs'>
            <FormInput
              className={clicked && buttonDisabled && fixForm && !formData.fName && 'form-error'}
              name='fName'
              type='text'
              label='First Name'
              placeholder='First Name'
              onChange={handleChange}
            />
            <FormInput
              className={clicked && buttonDisabled && fixForm && !formData.lName && 'form-error'}
              name='lName'
              type='text'
              label='Last Name'
              placeholder='Last Name'
              onChange={handleChange}
            />
            <FormInput
              className={clicked && buttonDisabled && fixForm && !EmailValidator.validate(formData.email) && 'form-error'}
              name='email'
              type='email'
              label='Email'
              placeholder='Email'
              onChange={handleChange}
            />
            <FormInput
              className={clicked && buttonDisabled && fixForm && !formData.phone && 'form-error'}
              name='phone'
              type='tel'
              label='Phone Number'
              placeholder='Phone Number'
              onChange={handleChange}
            />
            <span>{alert}</span>
          </div>
        </div>
        <Elements stripe={stripePromise}>
          <StripeForm
            formData={formData}
            isDonation={true}
            product='donation'
            clicked={clicked}
            setClicked={setClicked}
            fixForm={fixForm}
            setFixForm={setFixForm} />
        </Elements>
      </div>
    </div>
  )
}

export default Donate