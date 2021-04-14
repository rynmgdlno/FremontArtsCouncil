import React from 'react'

import PageHeader from '../../../components/page-header/page-header'
import SimpleCard from '../../../components/simple-card/simple-card'

import register from '../../../images/parade/participate/register.png'
import float from '../../../images/parade/participate/float.png'
import powerhouse from '../../../images/parade/participate/powerhouse.png'
import volunteer from '../../../images/parade/participate/volunteer.png'
import grants from '../../../images/parade/participate/grants.png'
import faq from '../../../images/parade/participate/faq.png'

import './participate.scss'

const Participate = () => {
  return ( 
    <div>
      <PageHeader headerID={'6WFXB1Pd0xhA8bnrYqT4Yb'}/>
      <div className='participate-container'>
        <h2 className='participate-title'>2021 Fremont Solstice Parade</h2>
        <SimpleCard
          title='Register to be in the Parade'
          text='In a marching band? Dance group? We want to see you. Register now!'
          link='/parade/register'
          buttonText='Register'
          image={register} />
        <SimpleCard
          title='Reserve a Float'
          text='Create a float and then ride it out. Whatever floats your boat. Reserve your float now!'
          link=''
          buttonText='Reserve'
          image={float} />
        <SimpleCard
          title='Powerhouse Art Studio'
          text='Make parade art, giant puppets, and costumes with our Artists in Residence'
          link='/workshops'
          buttonText='Sign Up'
          image={powerhouse} />
        <SimpleCard
          title='Volunteer at the Parade'
          text="Don't want to be in the parade but still want to help? We want to hear from you!"
          link='/volunteer'
          buttonText='Volunteer'
          image={volunteer} />
        <SimpleCard
          title='McKay Grants'
          text='Submit a proposal for development of parade ensembles and be awarded a McKay Grant.'
          link=''
          buttonText='Submit'
          image={grants} />
        <SimpleCard
          title='FAQ'
          text='Learn more about ensemble logistics.'
          link=''
          buttonText='Learn More'
          image={faq} />
      </div>
    </div>
  )
}

export default Participate