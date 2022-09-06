import React from 'react'
import CategoryComponent from '../../Components/CategoryComponent/CategoryComponent'
import TopNavbar from '../../Components/TopNavbar/TopNavbar'
import './HomePage.css'
import {faDoorOpen, faLocationDot, faPhone, faFileMedical, faQuestion, faShieldBlank, faFileLines,faFile} from '@fortawesome/free-solid-svg-icons'
import ResponsiveMenuButtonComponent from '../../Components/ResponsiveMenuButtonComponent/ResponsiveMenuButtonComponent'
function HomePage() {
  document.title = "Odskocznia - Strona główna"
  return (
      <div className='background w-100 '>
        <div className='hero-image h-100'>
          <ResponsiveMenuButtonComponent />
          <TopNavbar />
          <div className='background-hero flex-row'>
            <div className='h-80 w-70 flex-column flex-end hero-title'>
              <div className='m-3updwn'>
                  <h2 className='font-montserrat-medium font-white font-32 m-3lftrght text-shadow text-small-caps'>Największy park trampolin na Opolszczyźnie</h2>
                  <span className='text-upper font-82 m-3lftrght font-white font-montserrat-semi-bold'>odskocznia</span>
              </div>
            </div>
             <div className='h-80 w-30 flex-column flex-end hero-buttons'>
                  <button className='button button-first p-3 m-1'>
                    <p className='font-montserrat-regular font-15 font-white text-shadow text-upper'>kup/zarezerwuj bilet</p>
                  </button>
                  <button className='button button-second p-3 m-1'>
                    <p className='font-montserrat-regular font-15 font-white text-shadow text-upper'>sprawdz zasady bezpieczeństwa</p>
                  </button>
                  <button className='button button-first p-3 m-1'>
                    <p className='font-montserrat-regular font-15 font-white text-shadow text-upper'>od poniedziałku do piatku w godz. 8:00 - 15:30 zapraszamy grupy zorganizowane <br />(min. 10 osób)</p>
                  </button>
                </div>
          </div>
        </div>
        <div className='flex-row m-3 info-wrapper'>
          <CategoryComponent  name="Jesteśmy otwarci od 10-20" icon={faDoorOpen}/>
          <CategoryComponent  name="ul. Kowalczyków 60, 45-594 Opole"  icon={faLocationDot}/>
          <CategoryComponent  name="733 608 80 80" icon={faPhone}/>
        </div>
        <div className='home-image'></div>
        <div>
          <p className='font-white font-montserrat-semi-bold m-3 font-20'>Park trampolin na Opolszczyźnie. <span className='text-upper'>odskocznia</span> w Opolu zaprasza. 1200m2 atrakcji i miejsca do zabawy i aktywnego spędzania czasu. Trampoliny klasyczne, skośne, olimpijskie, arena dodgeball, strefa ninja, wieża do skoków na dmuchana poduchę, baseny z gąbkami, kosze do wsadów z trampolin.
          </p>
          <div className='w-100 flex-row flex-center '>
              <div className='flex-row w-80  m-3 categories-wrapper'>
                <div className='w-33 flex-column flex-center db-category'>
                  <CategoryComponent name="zasady bezpieczeństwa" icon={faShieldBlank}/>
                  <CategoryComponent name="zgoda rodzica pdf" icon={faFileMedical}/>
                </div>
                <div className='w-33 flex-column flex-center db-category'>
                  <CategoryComponent name="regulamin" icon={faFile}/>
                  <CategoryComponent name="regulamin urodzin" icon={faFile}/>
                </div>
                <div className='w-33 flex-column flex-center db-category'>
                  <CategoryComponent name="pytania i odpowiedzi" icon={faQuestion}/>
                  <CategoryComponent name="zgoda grupowa pdf" icon={faFileLines}/>
                </div>
            </div>
          </div>
          <div className='hopmania-wrapper h-60 flex-column flex-center'>
            <div className='hopmania-inner-wrapper flex-column flex-center'>
              <p className='font-black font-montserrat-semi-bold font-38 text-upper text-center'>dołącz do klubu hopmaniaków i skorzystaj z mega promocji!</p>
              <button className='hopmania-button p-2 m-3'><p className='font-white font-montserrat-semi-bold text-upper'>dowiedz się więcej</p></button>
            </div>
          </div>
          <p className='font-white font-montserrat-medium font-15'>
            &copy; FILIP KOTŁOWSKI 2022 ALL RIGHT RESERVED
          </p>
        </div>
      </div>
  )
}
export default HomePage