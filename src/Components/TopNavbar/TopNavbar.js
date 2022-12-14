import React from 'react'
import './TopNavbar.css'
import { Link } from "react-router-dom"
import regulamin from '../../assets/pdf/regulamin_odskocznia.pdf'
import regulaminUrodzinowy from '../../assets/pdf/regulamin-urodzinowy.pdf'
import logo from '../../assets/img/logo.png'
export default function TopNavbar() {
  return (
    <header className='flex-row flex-justify-around h-5 background-navbar flex-items-center w-70 shadow p-2 navbar-wrapper'>
        <Link to="/" className='font-15 text-upper font-montserrat-medium'>
          <img src={logo} height="50px" alt="odskocznia logo"/>
        </Link>
        <Link to="/zasady" className='font-15 text-upper font-montserrat-medium'>zasady bezpieczeństwa</Link>
        <a href={regulamin} target="_blank" rel="noreferrer" className='font-15 text-upper font-montserrat-medium'>regulamin</a>
        <Link to="/faq" className='font-15 text-upper font-montserrat-medium'>faq</Link>
        <a href={regulaminUrodzinowy} target="_blank" rel="noreferrer" className='font-15 text-upper font-montserrat-medium'>regulamin urodzin</a>
        <Link to="/hop-mania" className='font-15 text-upper font-montserrat-medium'>hopmania</Link>
        <Link to="/atrakcje" className='font-15 text-upper font-montserrat-medium'>Atrakcje</Link>
        <Link to="/kontakt" className='font-15 text-upper font-montserrat-medium'>Kontakt</Link>
    </header>
  )
}
