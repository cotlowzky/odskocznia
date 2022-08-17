import React from 'react';
import FaqComponentA from '../../Components/FaqComponentA/FaqComponentA';
import FaqComponentQ from '../../Components/FaqComponentQ/FaqComponentQ';
import TopNavbar from '../../Components/TopNavbar/TopNavbar';
import './FaqPage.css';
function FaqPage() {
    
  return (
    <div className='background'>
        <TopNavbar />
        <div className='m-3'>
            <h2 className='text-upper font-montserrat-medium font-white font-38 text-shadow'>
                Pytania i odpowiedzi
            </h2>
            <FaqComponentQ question="Co trzeba wiedzieć przed pierwszą wizytą w parku trampolin?"/>
            <FaqComponentQ question="Od jakiego wieku dzieci mogą korzystać z parku trampolin?"/>
            <FaqComponentA answer="kaka" />
            <FaqComponentQ question="Czy można zarezerwować miejsce w Odskoczni na konkretną godzinę?"/>
            <FaqComponentQ question="Jak długo macie otwarte?"/>
        </div>
    </div>
  )
}

export default FaqPage