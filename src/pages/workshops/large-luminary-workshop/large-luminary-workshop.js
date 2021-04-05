import React from 'react'

import PageHeader from '../../../components/page-header/page-header'
import WorkshopInfo from '../../../components/workshop-info/workshop-info'

const LargeLuminary = () => {
  return ( 
    <div>
      <PageHeader headerID={'4tsA9hb88PqmcfiRwe0gIh'}/>
      <WorkshopInfo id='5TGkt2rxmzQaneH1eQAY2y'/>
      {/* <div className='workshop-info-page-container'>
        <div className='wip-sidebar'>
          <h3>Date & Time</h3>
          <ReactMarkdown plugins={[gfm]} source={dateTime} />
          <h3>Location</h3>
          <ReactMarkdown plugins={[gfm]} source={location} />
        </div>
        <div className='wip-info'>
          <ReactMarkdown className='wip-main-text' plugins={[gfm]} source={info} />
          <CustomButton className='custom-button high-emphasis-button blue-button'>Register</CustomButton>
          <h3 className='faq'>FAQ</h3>
          <p>Luminata and workshop FAQs</p>
          <CustomButton className='custom-button high-emphasis-button blue-button'>Learn More</CustomButton>
        </div>
      </div> */}
    </div>
  )
}

export default LargeLuminary