import React from 'react'
import TopNavbar from '../../Components/TopNavbar/TopNavbar'
function ContactPage() {
    document.title = "Odskocznia - Kontakt"
  return (
    <div className='background h-100 p-5up'>
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
                    <p className='font-white font-18 m-1updwn font-yellow font-lato-regular'>
                        45-594 Opole
                    </p>
                    <p className='font-white font-18 m-3up font-lato-regular'>
                        tel. 733 608 80 80
                    </p>
                    <p className='font-white font-18 m-1updwn font-yellow font-lato-regular'>
                        kontakt@odskocznia.opole.pl
                    </p>
                    <p className='font-white font-18 m-3up font-lato-regular'>
                        hoplandia.pl Sp. z.o.o
                    </p>
                    <p className='font-white font-18 m-1updwn font-yellow font-lato-regular'>
                        NIP 7543267113 | KRS 0000825524 | REGON 385378438
                    </p>
                    <p className='font-white font-18 m-1updwn font-lato-regular'>
                        Kapitał zakładowy: 950 000,00 ZŁ
                    </p>
                    <p className='font-white font-18 m-1updwn font-yellow font-lato-regular'>
                         Numer konta: PKO BP 28 1020 3668 0000 5102 0562 3089
                    </p>
                </div>
                <div className='w-50 p-1'>
                    <h3 className='text-small-caps font-montserrat-regular font-yellow font-38'>
                        Zapraszamy
                    </h3>
                    <p className='font-white font-18 m-1updwn font-lato-regular'>
                         Poniedziałek - Piątek od 15:00 do 20:00
                    </p>
                    <p className='font-white font-18 m-1updwn font-lato-regular'>
                        Sobota - Niedziela od 15:00 do 20:00
                    </p>
                    <p className='font-yellow font-18 m-1updwn font-lato-regular'>
                         (Wejścia odbywają się o pełnych godzinach)
                    </p>
                    <p className='font-white font-18 m-1updwn font-lato-regular'>
                         Od poniedziałku do piątku w godzinach 8:00 - 15:30 zapraszamy GRUPY
                    </p>
                    <p className='text-upper font-lato-bold font-yellow font-20'>
                        Konieczna rezerwacja telefonicznia
                    </p>
                    <p className='font-white text-small-caps font-18 m-1updwn font-lato-regular'>
                         Grupa minimum 10 osób
                    </p>
                    <p className='font-white text-small-caps font-18 m-1updwn font-lato-regular'>
                         Cena za godzine - 23zł
                    </p>
                    <p className='font-white text-small-caps font-18 m-1updwn font-lato-regular'>
                         Cena za dwie godziny - 40zł
                    </p>
                    <p className='font-white text-upper font-18 m-1updwn font-lato-bold'>
                         <span className='font-blue'>Ważne</span> na teren parku możliwy jest wstęp tylko <span className='font-blue'> w stroju sportowym i skarpetkach antypoślizgowych</span>
                    </p>
                    <p className='font-yellow font-18 m-1updwn font-lato-regular'>
                         Skarpetki antypośligowe można nabyć przy wejściu w cenie 10 zł
                    </p>
                </div>
            </div>
        </div>
          <p className='font-white font-montserrat-medium font-15'>
            &copy; FILIP KOTŁOWSKI 2022 ALL RIGHT RESERVED
          </p>
    </div>
  )
}

export default ContactPage