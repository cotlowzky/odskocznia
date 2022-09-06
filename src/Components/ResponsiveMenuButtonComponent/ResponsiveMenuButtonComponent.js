import React from 'react'
import './ResponsiveMenu.css';
import {openMenu} from '../../Constants/functions'
function ResponsiveMenuButtonComponent() {
  return (
    <div className='menu-button-wrapper flex-column' onClick={openMenu}>
      <div className='menu-bar shadow long-bar'></div>
      <div className='menu-bar shadow medium-bar'></div>
      <div className='menu-bar shadow short-bar'></div>
    </div>
  )
}

export default ResponsiveMenuButtonComponent