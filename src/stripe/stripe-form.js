import React from 'react'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"

import CustomButton from '../components/custom-button/custom-button'

import './stripe-form.scss'

const StripeForm = ({ isDonation, product, frequency, amount }) => {
  const stripe = useStripe()
  const elements = useElements()

  const testParams = {
    crossDomain: true,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      'name': 'ryan',
      'number': 12345
    })
  }

  const handleSubmit = async (e) => {
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
          'amount': 12345
        })
      }

      const data = await fetch('http://localhost:5000/stripe', fetchParams)
      console.log('success')
      console.log(data)
    } catch (error) {
      console.log('fail')
      console.log(error)
    }
  }

  const test = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:5000/test', testParams)
    console.log(response)
  }

  return (
    <div className='stripe-container'>
      <form onSubmit={handleSubmit} className='stripe-form'>
        <CardElement />
      </form>
      <CustomButton onClick={handleSubmit} className='custom-button high-emphasis-button green-button'>Pay</CustomButton>
      <CustomButton onClick={test} className='custom-button high-emphasis-button green-button'>Test</CustomButton>
    </div>
  )
}

export default StripeForm