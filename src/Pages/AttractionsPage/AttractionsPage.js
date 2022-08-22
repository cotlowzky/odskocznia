import React from 'react'
import TopNavbar from '../../Components/TopNavbar/TopNavbar'

function AttractionsPage() {
  return (
    <div className='background'>
        <TopNavbar />
        <div className='m-3'>
            <h2 className='text-small-caps font-montserrat-medium font-white font-38 text-shadow'>
                Atrakcje
            </h2>
            <p className='text-small-caps font-montserrat-medium font-yellow font-18'>
                Park trampolin Odskocznia to ponad 1000 m2 atrakcji
            </p>
            <p className='text-small-caps font-montserrat-medium font-yellow font-15'>
                Przekonajcie się sami, odwiedzając nas w Opolu
            </p>
        </div>
    </div>
  )
}

export default AttractionsPage