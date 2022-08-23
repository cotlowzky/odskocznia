import React from 'react'
import TopNavbar from '../../Components/TopNavbar/TopNavbar'
import "./HopManiaPage.css"
import kdr from "../../assets/img/kdr.png"
function HopManiaPage() {
    document.title = "Odskocznia - HopMania"
  return (
    <div className='background p-5up'>
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
                <img src={kdr} alt="Karta Dużej Rodziny" />
                <p className='font-white font-montserrat-medium font-32 m-1updwn'>Honorujemy Kartę Dużej Rodziny</p>
            </div>
            <p className='text-small-caps font-montserrat-regular font-yellow font-32 m-3'>
                Co zyskujesz dołączając do HopManii?
            </p>
            <div className='flex-row hop-mania-advantege m-3lftrght'>
                <div className='hop-mania-info p-3 flex-center  hm-info-1'>
                        <p className='p-1 text-center text-small-caps font-white font-18 font-montserrat-medium'>Karta HopManii upoważnia do zniżek na bilety do Hoplandii i Odskoczni - cennik</p> 
                </div>
                <div className='hop-mania-info p-3 flex-center hm-info-2 m-3lftrght'>
                        <p className='p-1 text-center text-small-caps font-white font-18 font-montserrat-medium'>Tylko HopManiacy mogą korzystać ze specjalnych promocji (wprowadzamy je co jakiś czas)</p> 
                </div>
                <div className='hop-mania-info p-3 flex-center hm-info-1 m-3lftrght'>
                        <p className='p-1 text-center text-small-caps font-white font-18 font-montserrat-medium'>Tylko HopManiacy mogą korzystać z dodatkowych zniżek przy organizacji urodzin</p> 
                </div>
                <div className='hop-mania-info p-3 flex-center hm-info-2 m-3lftrght w-33 text-wrap'>
                        <p className='p-1 text-center text-small-caps font-white font-18 font-montserrat-medium'>Tylko HopManiacy otrzymują kartę członkowską (jedna karta upoważnia do korzystania z promocji w Hoplandii, Odskoczni, Parku Linowym KanYon i Chacie Zagadek).</p> 
                </div>
            </div>
            <div>
                <p className='text-small-caps font-montserrat-regular font-yellow font-32 m-3'>
                    O czym trzeba pamiętać po dołączeniu do klubu HopMania
                </p>
                <ul className='font-lato-medium font-white font-18'>
                    <li>Karta lojalnościowa jest ważna do końca 2022 roku (później trzeba ją przedłużyć)</li>
                    <li>Zgubienie karty uniemożliwia wystawienie duplikatu</li>
                </ul>
                <p className='text-small-caps font-montserrat-regular font-blue font-32 m-3'>
                    Dołączysz do Klubu Hopmanii?
                </p>
                <div className='flex-row flex-justify-around m-1'>
                    <button className='first-button p-2'><p className='font-white font-montserrat-medium text-small-caps font-18'>Tak, chcę dołączyć!</p></button>
                    <button className='second-button p-2'><p className='font-white font-montserrat-medium text-small-caps font-18'>Jeszcze nie chce, chce przeczytać regulamin</p></button>
                </div>
                <div className='background-tel p-3'>
                    <p className='text-small-caps font-montserrat-semi-bold font-white font-38 text-center'>Masz pytania? Zadzwoń - Tel.733 60 80 80!</p>
                </div>
            </div>
        <p className='font-white font-montserrat-medium font-15'>
            &copy; FILIP KOTŁOWSKI 2022 ALL RIGHT RESERVED
          </p>  
    </div>
  )
}

export default HopManiaPage