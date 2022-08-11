import React from 'react'
import './CategoryComponent.css'
function CategoryComponent(props) {
  return (
    <div className='category-wrapper flex-column flex-center shadow h-15'>
      <div className='category-icon'></div>
        <p className='font-montserrat-semi-bold font-white font-20 text-shadow category-name text-upper'>{props.name}</p>    
    </div>
  )
}

export default CategoryComponent