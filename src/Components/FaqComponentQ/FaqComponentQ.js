import React from 'react'

function FaqComponentQ(props) {
  return (
    <div className='faq-wrapper question'>
        <div className='faq faq-question'>
            <p className='font-20'>{props.question}</p>
        </div>
    </div>
  )
}

export default FaqComponentQ