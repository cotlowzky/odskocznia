import React from 'react'
import AttractionComponent from '../../Components/AttractionComponent/AttractionComponent'
import TopNavbar from '../../Components/TopNavbar/TopNavbar'

import ArenaFluo from '../../assets/img/atrakcje/arena-glowna.jpeg'
import ArenaSkosFluo from '../../assets/img/atrakcje/arena-skosna.jpeg'
import BasketFluo from '../../assets/img/atrakcje/koszykowka.jpeg'
import RopeFluo from '../../assets/img/atrakcje/lina.jpeg'
import NinjaFluo from '../../assets/img/atrakcje/ninja.jpeg'
import KangarooFluo from '../../assets/img/atrakcje/poducha.jpeg'
import OIFluo from '../../assets/img/atrakcje/trampoliny-olimpijskie.jpeg'
import ResponsiveMenuButtonComponent from '../../Components/ResponsiveMenuButtonComponent/ResponsiveMenuButtonComponent'
import ResponsiveMenuComponent from '../../Components/ResponsiveMenuComponent/ResponsiveMenuComponent'
function AttractionsPage() {
  document.body.classList.remove('overflow')
  return (
    <div className='background p-5up'>
    <ResponsiveMenuButtonComponent />
    <ResponsiveMenuComponent />
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
            <AttractionComponent  name="Arena główna z trampolinami poziomymi i basenami z gąbkami"
                                  image={ArenaFluo}
                                  className="flex-row"
            />
            <AttractionComponent name="Arena dodgeball z arenami skośnymi"
                                  image={ArenaSkosFluo}
                                  className="flex-row-reverse"
            />
            <AttractionComponent name="Strefa kangura z trampolinami olimpijskimi"
                                  image={OIFluo}
                                  className="flex-row"
            />
            <AttractionComponent name="Strefa kangura z wieżą i dmuchaną poduszką"
                                  image={KangarooFluo}
                                  className="flex-row-reverse"
            />
            <AttractionComponent name="Strefa ninja"
                                  image={NinjaFluo}
                                  className="flex-row"
            />
            <AttractionComponent name="Arena do walk gladiatorów z basenem z gąbkami oraz Slackline"
                                  image={RopeFluo}
                                  className="flex-row-reverse"
            />
            <AttractionComponent name="Trampoliny z koszami do wsadów"
                                  image={BasketFluo}
                                  className="flex-row"
            />

            </div>
        </div>
          <p className='font-white font-montserrat-medium font-15'>
            &copy; FILIP KOTŁOWSKI 2022 ALL RIGHT RESERVED
          </p>
    </div>
  )
}

export default AttractionsPage