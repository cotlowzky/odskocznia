import React from 'react'
import './TopNavbar.css'
import { Link } from "react-router-dom"
export default function TopNavbar() {
  return (
    <header className='flex-row flex-justify-around h-5 background-navbar flex-items-center w-70 shadow p-2'>
        <p>logo</p>
        <a href="#" className='font-15 text-upper font-montserrat-medium'>zasady bezpieczeństwa</a>
        <a href="#" className='font-15 text-upper font-montserrat-medium'>regulamin</a>
        <Link to="/faq" className='font-15 text-upper font-montserrat-medium'>faq</Link>
        <a href="#" className='font-15 text-upper font-montserrat-medium'>regulamin urodzin</a>
        <a href="#" className='font-15 text-upper font-montserrat-medium'>HopMania</a>
        <a href="#" className='font-15 text-upper font-montserrat-medium'>Atrakcje</a>
        <a href="#" className='font-15 text-upper font-montserrat-medium'>Kontakt</a>
    </header>
  )
}
