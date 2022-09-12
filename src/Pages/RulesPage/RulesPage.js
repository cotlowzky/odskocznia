import React from 'react'
import TopNavbar from '../../Components/TopNavbar/TopNavbar'
import ResponsiveMenuButtonComponent from '../../Components/ResponsiveMenuButtonComponent/ResponsiveMenuButtonComponent'
import ResponsiveMenuComponent from '../../Components/ResponsiveMenuComponent/ResponsiveMenuComponent'
import './RulesPage.css'
function RulesPage() {
    document.body.classList.remove('overflow')
  return (
    <div className='background h-100 p-5up'>
        <TopNavbar />
    <ResponsiveMenuButtonComponent />
    <ResponsiveMenuComponent />
        <div className='m-3'>
            <h2 className='text-small-caps font-montserrat-medium font-white font-38 text-shadow'>
                Zasady Bezpieczeństwa
            </h2>
            <p className='font-white font-montserrat-medium font-15 m-3lftrght'>
                Obiekt jest dezynfekowany lampami UV-C przed otwarciem oraz na bieżąco wg. zapotrzebowania odpowiednimi, certyfikowanymi preparatami. Dodatkowo, systematycznie dezynfekujemy części wspólne (toalety, poręcze, szatnie, klamki, włączniki, stoliki dla rodziców).
            </p>
            <h3 className='font-yellow font-montserrat-bold text-shadow font-26 m-1updwn'>
                Zainstalowaliśmy Lampy UV-C!
            </h3>
            <p className='font-white font-montserrat-medium font-15'>
                Skutecznie zabijają drobnoustroje w pomieszczeniach
            </p>
            <p className='font-white font-montserrat-medium font-15'>
                Bezpośrednie naświetlanie niszczy wirusy, bakterie, grzyby i pleśnie na wszystkich powierzchniach i w powietrzu
            </p>
            <p className='font-white font-montserrat-medium font-15'>
                Pomagają chronić przed patogenami przenoszonymi w powietrzu, tworząc bezpieczniejsze i zdrowsze środowisko
            </p>
            <p className='font-white font-montserrat-medium font-15'>
                Jest to bezpieczny i skuteczny rodzaj dezynfekcji!
            </p>
            <p className='font-white font-montserrat-medium font-15 m-1updwn'>
                Rodzice mają obowiązek zapewnić dziecku (przed wejściem na salę) zmienne, czyste skarpetki. Przypominamy, że w <span className='font-yellow text-upper'>parku trampolin obowiązują skarpety antypoślizgowe</span>. Dorośli również muszą mieć zmienne skarpetki albo zakładają ochraniacze na buty.
            </p>
            <p className='font-white font-montserrat-medium font-15 m-1updwn'>
                W wielu miejscach umieszczamy infografiki dotyczące podstawowych zasad bezpieczeństwa (zasłanianie ust podczas kichania i kaszlu, częste mycie rąk, zachowanie dystansu społecznego – 2 m pomiędzy osobami dorosłymi).
            </p>
            <p className='font-white font-montserrat-medium font-15 m-1updwn'>
            Sprawdzamy także czy dorosły i dziecko wchodzący na salę zabaw i do parku trampolin nie mają objawów przeziębienia lub innej choroby. Pracownik może odmówić wpuszczenia na obiekt.
            </p>
            <p className='font-white font-montserrat-medium font-15 m-1updwn'>
            Jeśli masz katar, kaszel lub miałeś/miałaś kontakt z osobami przebywającymi na kwarantannie, prosimy o nieprzybywanie – zważywszy na zasady i bezpieczeństwo wszystkich zgromadzonych. Pracownik może odmówić wpuszczenia Cię na obiekt w przypadku uzasadnionego stwierdzenia powyższych symptomów. Apelujemy o odpowiedzialność.
            </p>
            <p className='font-yellow font-montserrat-medium font-15 m-1updwn'>
            W miejscach kluczowych (przy wejściu do obiektu, w toaletach, w poszczególnych salach) znajduje się płyn dezynfekujący wraz z instrukcją jak odpowiednio dezynfekować i myć ręce.
            </p>
            <p className='font-white font-montserrat-medium font-15 m-1updwn'>
                Mając odpowiednie urządzenia wentylacyjne zapewniamy ciągłą wymianę powietrza, a co za tym idzie, odpowiednie wietrzenie obiektu.
            </p>
            <p className='font-white font-montserrat-medium font-15'>

                Na terenie naszych obiektów obowiązuje zakaz wnoszenia zabawek
            </p>
            <p className='font-white font-montserrat-medium font-15'>

                Opiekunowie dzieci, mają obowiązek zakrywania nosa i ust
            </p>
            <p className='font-white font-montserrat-medium font-15'>

                Dorośli powinni zachować odstęp 2 m odległości od siebie (stoliki są przesunięte w odpowiedniej odległości)
            </p>
        </div>
            <p className='font-white font-montserrat-medium font-15 footer'>
            &copy; FILIP KOTŁOWSKI 2022 ALL RIGHT RESERVED
            </p>
    </div>
  )
}

export default RulesPage