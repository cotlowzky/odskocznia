import React from 'react'
import AttractionComponent from '../../Components/AttractionComponent/AttractionComponent'
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
            <div className=' flex-center flex-column'>
            <AttractionComponent name="Arena główna z trampolinami poziomymi i basenami z gąbkami"/>
            <AttractionComponent name="Arena dodgeball z arenami skośnymi"/>
            <AttractionComponent name="Strefa kangura z trampolinami olimpijskimi, wieżą i dmuchaną poduszką"/>
            <AttractionComponent name="Strefa ninja"/>

            </div>
        </div>
    </div>
  )
}

export default AttractionsPage