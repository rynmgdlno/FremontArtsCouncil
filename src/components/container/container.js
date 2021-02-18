import React from 'react'
import { useMediaPredicate } from 'react-media-hook'

import Header from '../header/header'
import Footer from '../footer/footer'

import './container.scss'

const Container = (props) => {
  const isMobile = useMediaPredicate('(max-width: 769px)')
  const Page = props.page
  return (
    <div className='main-container'>
      <Header isMobile={isMobile}/>
      <div className='page-container'>
        <Page />
      </div>
      <div className='footer'>
        <Footer isMobile={isMobile}/>
      </div>
    </div>
  )
}

export default Container