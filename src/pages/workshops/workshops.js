import React from 'react'
import { Link } from 'react-router-dom'

import PageHeader from '../../components/page-header/page-header'
import CustomButton from '../../components/custom-button/custom-button'

import lumLanWor from '../../images/workshops/Rectangle 291.png'
import larLumWor from '../../images/workshops/Rectangle 299.png'
import teach from '../../images/workshops/Rectangle 300.png'

import TopBlob from '../../component-svgs/workshops/top-blob'
import LeftBlobs from '../../component-svgs/workshops/left-blobs'
import Fan from '../../component-svgs/workshops/fan'
import BrBlobs from '../../component-svgs/workshops/br-blobs'
import BlBlobs from '../../component-svgs/workshops/bl-blobs'

import './workshops.scss'

const Workshops = () => {
  return (
    <div className='our-workshops'>
      <PageHeader headerID={'5ilpvgxauhJNZjqbBGSrHn'} />
      <TopBlob />
      <LeftBlobs />
      <Fan />
      <BlBlobs />
      <BrBlobs />
      <div className='workshop-page-container'>
        <div className='workshop-entry'>
          <img className='workshop-image' src={lumLanWor} alt='' />
          <div className='workshop-info-container'>
            <h3 className='workshop-title'>Luminary Lantern Workshops</h3>
            <p className='workshop-info'>Thursdays, Fridays, Saturdays, and Sundays. Join us in making lanterns for Luminata!</p>
            <Link to='/workshops/luminary-lantern-workshops'>
              <CustomButton className='custom-button high-emphasis-button blue-button'>More Info</CustomButton>
            </Link>
          </div>
        </div>
        <div className='workshop-entry'>
          <img className='workshop-image' src={larLumWor} alt='' />
          <div className='workshop-info-container'>
            <h3 className='workshop-title'>Large Luminary Workshop</h3>
            <p className='workshop-info'>Weekly Wednesday workshop series led by Sarah Lovett. Meets for 5 weeks starting 8/21, 7-10 PM</p>
            <Link to='/workshops/large-luminary-workshop'>
              <CustomButton className='custom-button high-emphasis-button blue-button'>More Info</CustomButton>
            </Link>
          </div>
        </div>
        <div className='workshop-entry'>
          <img className='workshop-image' src={teach} alt='' />
          <div className='workshop-info-container'>
            <h3 className='workshop-title'>Teach a Workshop</h3>
            <p className='workshop-info'>Volunteers are always needed to help teach our art workshops and other FAC events. </p>
            <Link to='/workshops/teach-a-workshop'>
              <CustomButton className='custom-button high-emphasis-button blue-button'>More Info</CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Workshops