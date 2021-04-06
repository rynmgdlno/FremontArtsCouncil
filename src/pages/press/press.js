import React from 'react'

import usePress from '../../contentful-hooks/use-press'

import PressCard from '../../components/press-card/press-card'

import './press.scss'

const Press = () => {
  const [press, isLoading] = usePress()

  if (isLoading) return <p>Loading...</p>

  console.log(press, isLoading)
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