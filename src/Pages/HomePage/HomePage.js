import React from 'react'
import CategoryComponent from '../../Components/CategoryComponent/CategoryComponent'
import TopNavbar from '../../Components/TopNavbar/TopNavbar'
import './HomePage.css'
function HomePage() {
  
  return (
      <div className='background w-100'>
        <TopNavbar />
        <div className='background-hero flex-row'>
          <div className='h-95 w-50 flex-column flex-center'>
            <div className='m-1'>
              <span className='font-montserrat-medium font-white font-64 m-title text-shadow'>Z</span>
              <span className='font-montserrat-medium font-white font-64 m-title text-shadow'>A</span>
              <span className='font-montserrat-medium font-white font-64 m-title text-shadow'>P</span>
              <span className='font-montserrat-medium font-white font-64 m-title text-shadow'>R</span>
              <span className='font-montserrat-medium font-white font-64 m-title text-shadow'>A</span>
              <span className='font-montserrat-medium font-white font-64 m-title text-shadow'>S</span>
              <span className='font-montserrat-medium font-white font-64 m-title text-shadow'>Z</span>
              <span className='font-montserrat-medium font-white font-64 m-title text-shadow'>A</span>
              <span className='font-montserrat-medium font-white font-64 m-title text-shadow'>M</span>
              <span className='font-montserrat-medium font-white font-64 m-title text-shadow'>Y</span>
            </div>
            <h2 className='font-lato-bold font-white font-38 m-1 text-shadow'>Jesteśmy otwarci codziennie od 10 do 20</h2>
            <div className='flex-column m-1 flex-center'>
              <button className='button button-first p-3 m-1'>
                <p className='font-montserrat-regular font-15 font-black'>kup/zarezerwuj bilet</p>
              </button>
              <button className='button button-second p-3 m-1'>
                <p className='font-montserrat-regular font-15 '>sprawdz zasady bezpieczeństwa</p>
              </button>
              <button className='button button-first p-3 m-1'>
                <p className='font-montserrat-regular font-15 font-black'>od poniedziałku do piatku w godz. 8:00 - 15:30 zapraszamy grupy zorganizowane <br />(min. 10 osób)</p>
              </button>
            </div>
          </div>
          <div className='h-95 w-50 hero-image flex-row'>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
          </div>
        </div>
        <div className='home-image'></div>
        <div>
          <p className='font-white font-montserrat-semi-bold m-3 font-20'>Park trampolin na Opolszczyźnie. <span className='text-upper'>odskocznia</span> w Opolu zaprasza. 1200m2 atrakcji i miejsca do zabawy i aktywnego spędzania czasu. Trampoliny klasyczne, skośne, olimpijskie, arena dodgeball, strefa ninja, wieża do skoków na dmuchana poduchę, baseny z gąbkami, kosze do wsadów z trampolin.
          </p>
          <div className='w-100 flex-row flex-center'>
              <div className='flex-row w-80  m-3'>
                <div className='w-33 flex-column flex-center'>
                  <CategoryComponent name="zasady bezpieczeństwa"/>
                  <CategoryComponent name="zgoda rodzica pdf"/>
                </div>
                <div className='w-33 flex-column flex-center'>
                  <CategoryComponent name="regulamin"/>
                  <CategoryComponent name="regulamin urodzin"/>
                </div>
                <div className='w-33 flex-column flex-center'>
                  <CategoryComponent name="pytania i odpowiedzi"/>
                  <CategoryComponent name="zgoda grupowa pdf"/>
                </div>
            </div>
          </div>
          <div className='hopmania-wrapper h-30 flex-column flex-center'>
            <div className='hopmania-inner-wrapper flex-column flex-center'>
              <p className='font-black font-montserrat-semi-bold font-38 text-upper text-center'>dołącz do klubu hopmaniaków i skorzystaj z mega promocji!</p>
              <button className='hopmania-button p-2 m-3'><p className='font-white font-montserrat-semi-bold text-upper'>dowiedz się więcej</p></button>
            </div>
          </div>
          <p>&copy; FILIP KOTŁOWSKI 2022 ALL RIGHT RESERVED</p>
        </div>
      </div>
  )
}
export default HomePage