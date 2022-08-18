import React from 'react'

function FaqComponentA(props) {
  return (
    <div className='faq-wrapper'>
        <div className='faq faq-answer answer'>
            <p className='font-15 font-white font-lato-bold'>{props.answer}</p>
        </div>
    </div>
  )
}

export default FaqComponentA