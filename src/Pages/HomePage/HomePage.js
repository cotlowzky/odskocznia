import React from 'react'
import TopNavbar from '../../Components/TopNavbar/TopNavbar'

export default function HomePage() {
  return (
      <div className='background w-100 h-100'>
        <TopNavbar />
        <h1>Zapraszamy</h1>
        <h2>Jesteśmy otwarci codziennie od 10 do 20</h2>
        <div className='flex-column'>
          <button>kup/zarezerwuj bilet</button>
          <button>sprawdz zasady bezpieczeństwa</button>
          <button>od poniedziałku do piatku w godz. 8:00 - 15:30 zapraszamy grupy zorganizowane (min. 10 osób)</button>
        </div>
      </div>
  )
}
