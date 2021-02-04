import React from 'react'

import Logo from '../logo/logo'
import Menu from '../menu/menu'
import CustomButton from '../custom-button/custom-button'
import Footer from '../footer/footer'

import './container.scss'

const Container = (props) => {
  const Page = props.page
  return (
    <div className='main-container'>
      <div className='header'>
        <Logo />
        <Menu />
        <CustomButton />
        <CustomButton />
      </div>
      <div className='page-container'>
        <Page/>
      </div>
      <div className='footer'>
        <Footer/>
      </div>
    </div>
  )
}

export default Container