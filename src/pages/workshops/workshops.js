import React from 'react'

import PageHeader from '../../components/page-header/page-header'

import lumLanWor from '../../images/workshops/Rectangle 291.png'
import larLumWor from '../../images/workshops/Rectangle 299.png'
import teach from '../../images/workshops/Rectangle 300.png'

import TopBlob from '../../component-svgs/workshops/top-blob'
import LeftBlobs from '../../component-svgs/workshops/left-blobs'
import Fan from '../../component-svgs/workshops/fan'
import BrBlobs from '../../component-svgs/workshops/br-blobs'
import BlBlobs from '../../component-svgs/workshops/bl-blobs'

import './workshops.scss'
import SimpleCard from '../../components/simple-card/simple-card'

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
        <SimpleCard
          title='Luminary Lantern Workshops'
          text='Thursdays, Fridays, Saturdays, and Sundays. Join us in making lanterns for Luminata!'
          link='/workshops/luminary-lantern-workshops'
          buttonText='More Info'
          image={lumLanWor} />
        <SimpleCard
          title='Large Luminary Workshop'
          text='Weekly Wednesday workshop series led by Sarah Lovett. Meets for 5 weeks starting 8/21, 7-10 PM'
          link='/workshops/large-luminary-workshop'
          buttonText='More Info'
          image={larLumWor} />
        <SimpleCard
          title='Teach a Workshop'
          text='Volunteers are always needed to help teach our art workshops and other FAC events.'
          link='/workshops/teach-a-workshop'
          buttonText='More Info'
          image={teach} />
      </div>
    </div>
  )
}

export default Workshops