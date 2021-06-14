import React, { useState, useEffect } from 'react'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import * as EmailValidator from 'email-validator'

import Spinner from '../component-svgs/spinner'
import Success from '../component-svgs/success'
import CustomButton from '../components/custom-button/custom-button'

import './stripe-form.scss'

const StripeForm = ({ formData, isDonation, product, clicked, setClicked, fixForm, setFixForm, setConfirmation }) => {
  const stripe = useStripe()
  const elements = useElements()
  const { fName, lName, email, phone, amount, repeat } = formData
  const userRepeat = repeat ? 'monthly recurring' : 'one-time'
  const [elementDisabled, setElementDisabled] = useState(true)
  const [submitDisabled, setSubmitDisabled] = useState(true)
  const [paymentStatus, setPaymentStatus] = useState('waiting')
  const elementClass = elementDisabled && clicked && submitDisabled ? 'card-element-disabled' : 'card-element'
  const submitClass = (
    !submitDisabled ?
      'custom-button high-emphasis-button green-button' :
      'custom-button high-emphasis-button disabled-button'
  )

  const handleSubmit = async (e) => {
    setPaymentStatus('pending')
    setClicked(true)
    if (!submitDisabled) {
      setFixForm(false)
      e.preventDefault()
      const { paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement)
      })
      const { id } = paymentMethod
      try {
        const fetchParams = {
          crossDomain: true,
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            'id': id,
            'amount': amount,
            'description': product,
            'receipt_email': formData.email
          })
        }
        const data = await fetch('http://api.rnmtest.com/stripe', fetchParams)
        const result = await data.json()
        setPaymentStatus(result.status)
        setConfirmation(true)
        console.log(result.status)
      } catch (error) {
        console.log(error)
        return error
      }
    } else {
      setFixForm(true)
    }
  }

  const cardChange = (e) => {
    if (e.complete) {
      setElementDisabled(false)
    } else {
      setElementDisabled(true)
    }
  }

  useEffect(() => {
    if (fName && lName && EmailValidator.validate(email) && phone && !elementDisabled) {
      setSubmitDisabled(false)
    } else {
      setSubmitDisabled(true)
    }
  }, [fName, lName, email, phone, elementDisabled])

  return (
    <div className='stripe-container'>
      <form onSubmit={handleSubmit} className='stripe-form'>
        <CardElement
          className={elementClass}
          onChange={cardChange}
          options={{
            iconStyle: 'solid',
            style: {
              base: {
                iconColor: 'grey',
                fontSize: '16px'
              }
            }
          }}
        />
      </form>
      <span>{`By clicking "Pay" you agree to a ${userRepeat} ${isDonation ? 'donation' : `payment for a ${product}`} of $${amount / 100}.00`}</span>
      {
        paymentStatus === 'waiting' ? 
      <CustomButton onClick={handleSubmit}
        className={submitClass}>Pay</CustomButton> :
        paymentStatus === 'pending' ?
        <Spinner className='spinner-payment'/> :
        <Success />
      }
      {
        clicked && submitDisabled && fixForm && <span className='form-alert'>Please check the form for errors.</span>
      }
    </div>
  )
}

export default StripeForm