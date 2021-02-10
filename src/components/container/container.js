import React from 'react'

import Header from '../header/header'
import Footer from '../footer/footer'

import './container.scss'

const Container = (props) => {
  const Page = props.page
  return (
    <div className='main-container'>
      <Header />
      <div className='page-container'>
        <Page />
      </div>
      <div className='footer'>
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default Container