import React from 'react'

import usePress from '../../contentful-hooks/use-press'

import PressCard from '../../components/press-card/press-card'
import Spinner from '../../component-svgs/spinner'

import './press.scss'

const Press = () => {
  const [press, isLoading] = usePress()

  if (isLoading) return <Spinner className='spinner-standard'/>

  return (
    <div className='press'>
      <h1>Press</h1>
      {
        press &&
        press.map((item) => (
          <PressCard 
            key={item.sys.id}
            image={item.fields.pressImage.fields.file.url}
            title={item.fields.pressTitle}
            text={item.fields.pressSynopsis}
            link={item.fields.pressLink}
          />
        ))
      }
    </div>
  )
}

export default Press