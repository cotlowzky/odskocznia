import React from 'react'
import '../ResponsiveMenuButtonComponent/ResponsiveMenu.css';

import { Link } from "react-router-dom"
import regulamin from '../../assets/pdf/regulamin_odskocznia.pdf'
import regulaminUrodzinowy from '../../assets/pdf/regulamin-urodzinowy.pdf'
export default function ResponsiveMenuComponent() {
  return (
    <div id="responsive-menu" className='flex-column flex-items-center flex-justify-btwn p-30updwn'>
      <Link to="/" className='font-32 text-upper font-montserrat-medium'>
        strona główna
      </Link>
      <Link to="/zasady" className='font-32 text-upper font-montserrat-medium'>zasady bezpieczeństwa</Link>
      <a href={regulamin} target="_blank" rel="noreferrer" className='font-32 text-upper font-montserrat-medium'>regulamin</a>
      <Link to="/faq" className='font-32 text-upper font-montserrat-medium'>faq</Link>
      <a href={regulaminUrodzinowy} target="_blank" rel="noreferrer" className='font-32 text-upper font-montserrat-medium'>regulamin urodzin</a>
      <Link to="/hop-mania" className='font-32 text-upper font-montserrat-medium'>hopmania</Link>
      <Link to="/atrakcje" className='font-32 text-upper font-montserrat-medium'>Atrakcje</Link>
      <Link to="/kontakt" className='font-32 text-upper font-montserrat-medium'>Kontakt</Link>
      
    </div>
  )
}
