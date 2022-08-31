import React from 'react'
import './AttractionComponent.css'
function AttractionComponent(props) {
  return (
    <div className={`flex-justify-btwn attraction-wrapper ${props.className}`}>
        <p className='font-montserrat-medium font-26 font-white text-small-caps attraction-font text-shadow'>{props.name}</p>
        <div className='attraction-image'>
            <img src={props.image} height="100%" width="100%" alt='atrakcja' className='attraction-image'/>
        </div>
    </div>
  )
}

export default AttractionComponent