import React from 'react'
import './TopNavbar.css'
export default function TopNavbar() {
  return (
    <header className='flex-row flex-justify-around h-5 background-navbar flex-items-center'>
        <p>logo</p>
        <a href="#">zasady bezpieczeństwa</a>
        <a href="#">regulamin</a>
        <a href="#">faq</a>
        <a href="#">regulamin urodzin</a>
        <a href="#">HopMania</a>
        <a href="#">Atrakcje</a>
        <a href="#">Kontakt</a>
    </header>
  )
}
