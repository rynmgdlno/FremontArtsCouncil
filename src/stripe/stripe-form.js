import React, { useState } from 'react'
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js"

import CustomButton from '../components/custom-button/custom-button'

import './stripe-form.scss'

const StripeForm = ({ isDonation, product, frequency, amount }) => {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    })

    if (!error) {
      const { id } = paymentMethod

      try {
        const fetchParams = {
          crossDomain: true,
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({
            'id': id,
            'amount': 12345
          })
        }

        const {data} = await fetch('http://localhost:5000/stripe', fetchParams)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className='stripe-container'>
      <form onSubmit={handleSubmit} className='stripe-form'>
        <CardElement />
        <CustomButton className='custom-button high-emphasis-button green-button'>Pay</CustomButton>
      </form>
    </div>
  )
}

export default StripeForm