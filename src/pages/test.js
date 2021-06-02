import React, {useState} from 'react'

import CustomButton from '../components/custom-button/custom-button'

const Test = () => {
  const [formData, setFormData] = useState({
    name: 'Ryan',
    amount: 999
  })

  const setAmount = (x) => {
    setFormData(prevState => ({
      ...prevState,
      amount: x
    }))
  }

  return (
    <div>
      <h1>Test</h1>
      <CustomButton onClick={() => setAmount(100)}>100</CustomButton>
      <CustomButton onClick={() => setAmount(200)}>200</CustomButton>
      <CustomButton onClick={() => setAmount(300)}>300</CustomButton>
      <h5>{`${formData.name} is buying ${formData.amount}`}</h5>
    </div>
  )
}

export default Test