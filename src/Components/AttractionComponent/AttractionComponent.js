import React from 'react'
import './AttractionComponent.css'
function AttractionComponent(props) {
  return (
    <div className='flex-row flex-justify-btwn attraction-wrapper'>
        <p className='font-montserrat-medium font-26 font-white text-small-caps attraction-font'>{props.name}</p>
        <div className='attraction-image'>

        </div>
    </div>
  )
}

export default AttractionComponent