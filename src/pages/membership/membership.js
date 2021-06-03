import React, { useState } from 'react'

import useElement from '../../contentful-hooks/use-element'

import MembershipCard from '../../components/membership-card/membership-card'
import Spinner from '../../component-svgs/spinner'
import PageHeader from '../../components/page-header/page-header'
import CustomButton from '../../components/custom-button/custom-button'

import './membership.scss'

const Membership = () => {
  const [data, isLoading] = useElement('30OC59fYh1zLsGqdXES5mH')
  const [level, setLevel] = useState('')
  const [amount, setAmount] = useState(0)
  const [living, setLiving] = useState(false)
  const [displayForm, setForm] = useState(false)
  const [confirmation, setConfirmation] = useState(false)
  const [money, setMoney] = useState('money-popup-closed')

  if (isLoading) return <Spinner />

  const moneyTitle = data.fields.title
  const moneyText = data.fields.content
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
                {/* <div
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
                </div> */}
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
                isLoading ? <Spinner /> :
                  <div>
                    <h4>{moneyTitle}</h4>
                    <p>{moneyText}</p>
                  </div>
              }
            </div>
          </div>
          :
          <div className='membership-form'>{level}{amount}</div>
      }
    </div>
  )
}

export default Membership