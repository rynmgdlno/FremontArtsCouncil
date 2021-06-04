import React, { useState, useEffect } from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import * as EmailValidator from 'email-validator'

import useElement from '../../contentful-hooks/use-element'
import StripeForm from '../../stripe/stripe-form'

import FormInput from '../../components/form-input/form-input'
import MembershipCard from '../../components/membership-card/membership-card'
import Spinner from '../../component-svgs/spinner'
import Success from '../../component-svgs/success'
import PageHeader from '../../components/page-header/page-header'
import CustomButton from '../../components/custom-button/custom-button'

import './membership.scss'

const stripePromise = loadStripe('pk_test_51IsCuEBBSrRv5J3Zd5DoRDLR13q6o7wPI9fqXgdLmaqDbIc38M4dLHeiI2QXZoX42RFg1QqfM9NRKojhX6KwtIOK0074JyLeRY')


const Membership = () => {
  const [data, isLoading] = useElement('30OC59fYh1zLsGqdXES5mH')
  const [level, setLevel] = useState('')
  const [living, setLiving] = useState(false)
  const [displayForm, setForm] = useState(false)
  const [confirmation, setConfirmation] = useState(false)
  const [money, setMoney] = useState('money-popup-closed')

  const [formData, setFormData] = useState({
    amount: 0,
    fName: '',
    lName: '',
    email: '',
    phone: ''
  })

  const [clicked, setClicked] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [fixForm, setFixForm] = useState(false)

  if (isLoading) return <Spinner className='spinner-standard' />

  const moneyTitle = data.fields.title
  const moneyText = data.fields.content

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const setAmount = (e) => {
    setFormData(prevState => ({
      ...prevState,
      amount: e
    }))
  }

  return (
    <div>
      <PageHeader headerID={'1qvzCME4OZARJ8yz3IfN6u'} />
      {
        !displayForm ?
          <div className='membership'>
            <div className='membership-text'>
              <p className='mem-text-line'><span className='mem-text-bold'>Connect</span> with our eclectic community.</p>
              <p className='mem-text-line'><span className='mem-text-bold'>Stay in the loop</span> about our upcoming events and workshops.</p>
              <p className='mem-text-line'><span className='mem-text-bold'>Sustain</span> our legendary events.</p>
              <p className='mem-text-line'><span className='mem-text-bold'>Support us</span> in providing art supplies, keeping the lights on, and residents entertained.</p>
            </div>
            <h2 className='mem-header'>Our Supporters</h2>
            <div className='membership-card-container'>
              <div className='patron-headers'>
                <p className='mem-text-line'><span className='mem-text-bold'>Patrons.</span> For our most generous members</p>
                <p className='mem-text-line'><span className='mem-text-bold'>Living Lightly.</span> Support us however you can.</p>
              </div>
              <div className='individual-cards'>
                <MembershipCard
                  amount={5000}
                  setAmount={setAmount}
                  level='Individual'
                  setLevel={setLevel}
                  setForm={setForm}
                  setLiving={setLiving}
                />
                <MembershipCard
                  amount={10000}
                  setAmount={setAmount}
                  level='Family'
                  setLevel={setLevel}
                  setForm={setForm}
                  setLiving={setLiving}
                />
                <MembershipCard
                  amount={50000}
                  setAmount={setAmount}
                  level='Patrons'
                  setLevel={setLevel}
                  setForm={setForm}
                  setLiving={setLiving}
                />
              </div>
              <h3 className='mem-header'>Business Patronage</h3>
              <div className='business-cards'>
                <div
                  onClick={() => {
                    setAmount(50000)
                    setLevel('Business')
                    setForm(true)
                  }}
                  className='biz-mem-card'>
                  <h1 className='amount'>$500</h1>
                  <p className='renew'>Join Or Renew</p>
                </div>
                <div
                  onClick={() => {
                    setAmount(100000)
                    setLevel('Business')
                    setForm(true)
                  }}
                  className='biz-mem-card'>
                  <h1 className='amount'>$1000</h1>
                  <p className='renew'>Join Or Renew</p>
                </div>
                <div
                  onClick={() => {
                    setAmount(250000)
                    setLevel('Business')
                    setForm(true)
                  }}
                  className='biz-mem-card'>
                  <h1 className='amount'>$2500</h1>
                  <p className='renew'>Join Or Renew</p>
                </div>
                <div
                  onClick={() => {
                    setAmount(500000)
                    setLevel('Business')
                    setForm(true)
                  }}
                  className='biz-mem-card'>
                  <h1 className='amount'>$5000</h1>
                  <p className='renew'>Join Or Renew</p>
                </div>
              </div>
            </div>
            <CustomButton
              onClick={() => setMoney('money-popup')}
              className='custom-button low-emphasis-button money'>
              <h3>Where your money is going</h3>
            </CustomButton>
            <div className={money}>
              <CustomButton
                onClick={() => {
                  setMoney('money-popup-closed')
                  console.log('test')
                }}
                className='custom-button low-emphasis-button close-money'>X</CustomButton>
              {
                isLoading ? <Spinner className='spinner-standard' /> :
                  <div>
                    <h4>{moneyTitle}</h4>
                    <p>{moneyText}</p>
                  </div>
              }
            </div>
          </div>
          :
          confirmation ?
            <div className='confirmation'>
              <div className='confirmation-header'>
                <Success />
                <h5>Payment Success!</h5>
              </div>
              <p>Thank you for your support! Check your email for a receipt and confirmation.</p>
            </div>
            :
            <div className='membership-form'>
              <div className='information'>
                <h5>{`Fill out the form to purchase a ${living ? 'Living Lightly' : ''} ${level} membership for $${formData.amount / 100}`}</h5>
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
                  isDonation={false}
                  product={living ? `living lightly ${level} membership` : `${level} membership`}
                  clicked={clicked}
                  setClicked={setClicked}
                  fixForm={fixForm}
                  setFixForm={setFixForm}
                  setConfirmation={setConfirmation} />
              </Elements>
            </div>
      }
    </div>
  )
}

export default Membership