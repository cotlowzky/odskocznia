import React from 'react'
import TopNavbar from '../../Components/TopNavbar/TopNavbar'
import "./HopManiaPage.css"
function HopManiaPage() {
    document.title = "Odskocznia - HopMania"
  return (
    <div className='background'>
        <TopNavbar />
        <div className='m-3'>
            <h2 className='text-small-caps font-montserrat-medium font-white font-38 text-shadow'>
                klub hopmania
            </h2>
            <p className='text-small-caps font-montserrat-regular font-yellow font-15'>
                Często odwiedzasz Odskocznie?
            </p>
            <p className='text-small-caps font-montserrat-regular font-yellow font-15'>
                Lubisz oderwać się u nas od grawitacji i codzienności?
            </p>
            <p className='text-small-caps font-montserrat-regular font-yellow font-15'>
                Dbasz o swoją formę i uznajesz to za normę?
            </p>
            
            <p className='font-montserrat-regular font-white font-15'>
                Zatem zostań HopManiakiem i zyskuj korzyść z uczestnictwa w naszym programie lojalnościowym - HopMania to coś dla ciebie.
            </p>
        </div>
            <div className='flex-column flex-center w-100 '>
                <div className='hop-mania-info p-3 w-100 hm-info-1'>
                    <p className='p-1 text-center text-small-caps font-violet font-20 font-montserrat-medium'>Przyjdź na 2 godziny za 47 zł!</p> 
                    <p className='p-1 text-center font-yellow font-15 font-lato-regular'>Tylko dla Klubowiczów HopMania</p> 
                </div>
                <div className='hop-mania-info p-3 w-100 hm-info-2'>
                    <p className='p-1 text-center text-small-caps font-violet font-20 font-montserrat-medium'>Urodziny w Odskoczni już od 45 zł!</p> 
                    <p className='p-1 text-center font-yellow font-15 font-lato-regular'>Tylko dla Klubowiczów HopMania</p> 
                </div>
            </div>
    </div>
  )
}

export default HopManiaPage