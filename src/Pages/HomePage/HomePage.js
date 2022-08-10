import React from 'react'
import TopNavbar from '../../Components/TopNavbar/TopNavbar'
import './HomePage.css'
export default function HomePage() {
  
  return (
      <div className='background w-100 h-100 m-5'>
        <TopNavbar />
        <div className='h-95 background-hero flex-row'>
          <div className='w-50 flex-column flex-center'>
            <div className='m-1'>
              <span className='font-montserrat-medium font-white font-64 m-title'>Z</span>
              <span className='font-montserrat-medium font-white font-64 m-title'>A</span>
              <span className='font-montserrat-medium font-white font-64 m-title'>P</span>
              <span className='font-montserrat-medium font-white font-64 m-title'>R</span>
              <span className='font-montserrat-medium font-white font-64 m-title'>A</span>
              <span className='font-montserrat-medium font-white font-64 m-title'>S</span>
              <span className='font-montserrat-medium font-white font-64 m-title'>Z</span>
              <span className='font-montserrat-medium font-white font-64 m-title'>A</span>
              <span className='font-montserrat-medium font-white font-64 m-title'>M</span>
              <span className='font-montserrat-medium font-white font-64 m-title'>Y</span>
            </div>
            <h2 className='font-lato-bold font-white font-38 m-1'>Jesteśmy otwarci codziennie od 10 do 20</h2>
            <div className='flex-column m-1 flex-center'>
              <button className='button button-first p-2 m-1'><p>kup/zarezerwuj bilet</p></button>
              <button className='button button-second p-2 m-1'><p>sprawdz zasady bezpieczeństwa</p></button>
              <button className='button button-first p-2 m-1'><p>od poniedziałku do piatku w godz. 8:00 - 15:30 zapraszamy grupy zorganizowane <br />(min. 10 osób)</p></button>
            </div>
          </div>
          <div className='w-50 hero-image flex-row'>
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
      </div>
  )
}
