import React, { useState } from 'react'

import PageHeader from '../../components/page-header/page-header'

import './membership.scss'

const Membership = () => {
  const [level, setLevel] = useState('')
  const [amount, setAmount] = useState(0)
  const [displayForm, setForm] = useState(false)
  const [confirmation, setConfirmation] = useState(false)

  console.log(level, amount)
  console.log(displayForm)

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
                <div
                  onClick={() => {
                    setAmount(50)
                    setLevel('Individual')
                    setForm(true)
                  }}
                  className='mem-card'>
                  <h3>Individual</h3>
                  <h1 className='amount'>$50</h1>
                  <div className='liv-light'>
                    <p>Living Lightly - $25</p>
                    <div className='mem-card-dot' />
                  </div>
                  <p className='renew'>Join Or Renew</p>
                </div>
                <div
                  onClick={() => {
                    setAmount(100)
                    setLevel('Family')
                    setForm(true)
                  }}
                  className='mem-card'>
                  <h3>Family</h3>
                  <h1 className='amount'>$100</h1>
                  <div className='liv-light'>
                    <p>Living Lightly - $60</p>
                    <div className='mem-card-dot'></div>
                  </div>
                  <p className='renew'>Join Or Renew</p>
                </div>
                <div
                  onClick={() => {
                    setAmount(500)
                    setLevel('Patrons')
                    setForm(true)
                  }}
                  className='mem-card'>
                  <h3>Patrons</h3>
                  <h1 className='amount'>$500</h1>
                  <div className='liv-light'>
                    <p>Living Lightly - $ 250</p>
                    <div className='mem-card-dot'></div>
                  </div>
                  <p className='renew'>Join Or Renew</p>
                </div>
              </div>
              <h3 className='mem-header'>Business Patronage</h3>
              <div className='business-cards'>
                <div
                  onClick={() => {
                    setAmount(500)
                    setLevel('Business')
                    setForm(true)
                  }}
                  className='biz-mem-card'>
                  <h1 className='amount'>$500</h1>
                  <p className='renew'>Join Or Renew</p>
                </div>
                <div
                  onClick={() => {
                    setAmount(1000)
                    setLevel('Business')
                    setForm(true)
                  }}
                  className='biz-mem-card'>
                  <h1 className='amount'>$1000</h1>
                  <p className='renew'>Join Or Renew</p>
                </div>
                <div
                  onClick={() => {
                    setAmount(2500)
                    setLevel('Business')
                    setForm(true)
                  }}
                  className='biz-mem-card'>
                  <h1 className='amount'>$2500</h1>
                  <p className='renew'>Join Or Renew</p>
                </div>
                <div
                  onClick={() => {
                    setAmount(5000)
                    setLevel('Business')
                    setForm(true)
                  }}
                  className='biz-mem-card'>
                  <h1 className='amount'>$5000</h1>
                  <p className='renew'>Join Or Renew</p>
                </div>
              </div>
            </div>
            <h3 className='money'>Where your money is going</h3>
          </div>
          :
          <div className='membership-form'>{level}{amount}</div>
      }
    </div>
  )
}

export default Membership