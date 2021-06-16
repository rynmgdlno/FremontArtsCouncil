import React, { useState, useEffect } from 'react'

import CustomButton from '../custom-button/custom-button'

import './membership-card.scss'

const MembershipCard = ({ amount, setAmount, level, setLevel, setForm, living, setLiving }) => {
  const [checked, setChecked] = useState(false)
  const [radioStyle, setRadioStyle] = useState('radio-unchecked')
  const [newAmount, setNewAmount] = useState(amount)

  useEffect(() => {
    if (!checked) {
      setRadioStyle('radio-unchecked')
    } else {
      setRadioStyle('radio-checked')
      setLiving(true)
      setNewAmount(amount / 2)
    }
  }, [amount, checked, setLiving])

  const userAmount = amount / 100


  return (
    <div
      className='mem-card'>
      <h3>{level}</h3>
      <h1 className='amount'>{`$${userAmount}`}</h1>
      <div className='liv-light'>
        <p>{`Select for Living Lightly - $${userAmount / 2}`}</p>
        <div
          onClick={() => {
            setChecked(!checked)
            setLiving(!setLiving)
          }}
          className={radioStyle} />
      </div>
      <CustomButton
        className='custom-button low-emphasis-button'
        onClick={() => {
          setAmount(newAmount)
          setLevel(level)
          setForm(true)
        }}>
        <p className='renew'>Join Or Renew</p>
      </CustomButton>
    </div>
  )
}

export default MembershipCard