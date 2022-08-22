import React from 'react'
import TopNavbar from '../../Components/TopNavbar/TopNavbar'
function ContactPage() {
  return (
    <div>
        <TopNavbar />
        <div className='m-3'>
            <h2 className='text-small-caps font-montserrat-medium font-white font-38 text-shadow'>
                Kontakt
            </h2>
            <div className='flex-row'>
                <div className='w-50 p-2'>
                    <p className='text-small-caps font-montserrat-regular font-white font-20'>
                        Masz pytania? Skontaktuj się z nami za pomocą formularza lub po prostu zadzwoń.
                    </p>
                    <p className='text-upper font-18 font-yellow font-lato-bold m-1updwn'>
                        Park Trampolin ODSKOCZNIA w Opolu
                    </p>
                    <p className='font-white font-18 m-1updwn'>
                        ul. Jerzego i Ryszarda Kowalczyków 60 (wcześniejsza Obrońców Stalingradu)
                    </p>
                    <p className='font-white font-18 m-1updwn font-yellow'>
                        45-594 Opole
                    </p>
                    <p className='font-white font-18 m-3up'>
                        tel. 733 608 80 80
                    </p>
                    <p className='font-white font-18 m-1updwn font-yellow'>
                        kontakt@odskocznia.opole.pl
                    </p>
                    <p className='font-white font-18 m-3up'>
                        hoplandia.pl Sp. z.o.o
                    </p>
                    <p className='font-white font-18 m-1updwn font-yellow'>
                        NIP 7543267113 | KRS 0000825524 | REGON 385378438
                    </p>
                    <p className='font-white font-18 m-1updwn'>
                        Kapitał zakładowy: 950 000,00 ZŁ
                    </p>
                    <p className='font-white font-18 m-1updwn font-yellow'>
                         Numer konta: PKO BP 28 1020 3668 0000 5102 0562 3089
                    </p>
                </div>
                <div className='w-50 p-2'>
                    <h3 className='text-small-caps text-center font-montserrat-regular font-yellow font-38'>
                        Zapraszamy
                    </h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactPage