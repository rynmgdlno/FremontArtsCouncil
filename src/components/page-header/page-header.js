import React from 'react'

import useHeader from '../../contentful-hooks/use-header'

import Spinner from '../../component-svgs/spinner'

import './page-header.scss'

const PageHeader = ({headerID}) => {
  const [header, isloading] = useHeader(headerID)

  if (isloading) return <Spinner />
  // console.log(header)
  return (
    <div className='page-header'>
      <div className='page-header-text'>
        <h1 className='page-header-title'>{header[0]}</h1>
        <h3 className='page-header-subtitle'>{header[1]}</h3>
      </div>
      <img className='page-header-image' src={header[2]} alt={header[3]}/>
    </div>
  )
} 

export default PageHeader