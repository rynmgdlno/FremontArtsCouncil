import React, { useState, useEffect } from 'react'

import CustomButton from '../custom-button/custom-button'

import './membership-card.scss'

const MembershipCard = ({ amount, setAmount, level, setLevel, setForm, setLiving }) => {
  // const [radio, setRadio] = useState(false)
  const [checked, setChecked] = useState(false)
  const [radioStyle, setRadioStyle] = useState('radio-unchecked')

  useEffect(() => {
    if (!checked) {
      setRadioStyle('radio-unchecked')
    } else {
      setRadioStyle('radio-checked')
      setLiving(true)
    }
  }, [checked, setLiving])

  const userAmount = amount / 100

  console.log(checked, radioStyle)

  return (
    <div
      className='mem-card'>
      <h3>{level}</h3>
      <h1 className='amount'>{`$${userAmount}`}</h1>
      <div className='liv-light'>
        <p>{`Select for Living Lightly - $${userAmount / 2}`}</p>
        <div 
        onClick={() => setChecked(!checked)}
        className={radioStyle} />
      </div>
      <CustomButton
        className='custom-button low-emphasis-button'
        onClick={() => {
          setAmount(amount)
          setLevel(level)
          setForm(true)
        }}>
        <p className='renew'>Join Or Renew</p>
      </CustomButton>
    </div>
  )
}

export default MembershipCard