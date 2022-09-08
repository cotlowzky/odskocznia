import React,{useState,useEffect} from 'react';
import FaqComponentA from '../../Components/FaqComponentA/FaqComponentA';
import FaqComponentQ from '../../Components/FaqComponentQ/FaqComponentQ';
import TopNavbar from '../../Components/TopNavbar/TopNavbar';
import './FaqPage.css';
import ResponsiveMenuButtonComponent from '../../Components/ResponsiveMenuButtonComponent/ResponsiveMenuButtonComponent'
import ResponsiveMenuComponent from '../../Components/ResponsiveMenuComponent/ResponsiveMenuComponent'
function FaqPage() {
  document.body.classList.remove('overflow')
  document.title = "Odskocznia - FAQ";
    const allQuestions = {
      q1:false,
      q2:false,
      q3:false,
      q4:false,
      q5:false,
      q6:false,
      q7:false,
      q8:false,
      q9:false,
      q10:false,
      q11:false,
      q12:false,
      q13:false,
      q14:false,
      q15:false,
      q16:false,
      q17:false,
    }
    const [shownQuestions, setShownQuestions] = useState(allQuestions);
    const showQuestion = (event,key)=>{
      event.preventDefault();
      setShownQuestions({...shownQuestions,...{[key]:true}})
      answers[event.currentTarget.id].classList.toggle('visible')
    }
    const questions = document.querySelectorAll('.question')
    const answers = document.querySelectorAll('.answer')
    let questionCounter = 0;
    
    useEffect(()=>{
      questions.forEach(element => {
        element.classList.add('question#'+ questionCounter)
        element.setAttribute("id",questionCounter)
        questionCounter++
      });
  })
  return (
    <div className='background p-5up'>
        <ResponsiveMenuButtonComponent />
        <ResponsiveMenuComponent />
        <TopNavbar />
        <div className='m-3'>
            <h2 className='text-upper font-montserrat-medium font-white font-38 text-shadow'>
                Pytania i odpowiedzi
            </h2>
            <FaqComponentQ onClick={(e)=>showQuestion(e,'q1')}question="Co trzeba wiedzieć przed pierwszą wizytą w parku trampolin?"/>
            <FaqComponentA answer="kaka1" />
            <FaqComponentQ onClick={(e)=>showQuestion(e,'q2')} question="Od jakiego wieku dzieci mogą korzystać z parku trampolin?"/>
            <FaqComponentA answer="Na co dzień z atrakcji mogą korzystać osoby dorosłe i dzieci od 5 roku życia. Dzieci w wieku 5-6 lat mogą bawić się tylko pod opieką osoby dorosłej." />
            <FaqComponentQ onClick={(e)=>showQuestion(e,'q3')} question="Czy można zarezerwować miejsce w Odskoczni na konkretną godzinę?"/>
            <FaqComponentA answer="Jak najbardziej. Dokonanie rezerwacji możliwe jest przez system rezerwacyjny na naszej stronie internetowej.Znajdziecie go tutaj - DODAJ TUTAJ LINK FILIP! " />
            <FaqComponentQ onClick={(e)=>showQuestion(e,'q4')} question="Jak długo macie otwarte?"/>
            <FaqComponentA answer="Jesteśmy otwarci od poniedziałku do piątku w godzinach 15:00 - 20:00 a w weekend od 10:00 do 20:00" />
            <FaqComponentQ onClick={(e)=>showQuestion(e,'q5')} question="Czy można u was kupić skarpetki antypoślizgowe?"/>
            <FaqComponentA answer="Oczywiście. Skarpetki są do nabycia na miejscu w cenie 10 zł." />
            <FaqComponentQ onClick={(e)=>showQuestion(e,'q6')} question="W jakim stroju można wejść na Odskocznie?"/>
            <FaqComponentA answer="W Odskoczni obowiązuje strój sportowy nieposiadający metalowych oraz plastikowych elementów" />
            <FaqComponentQ onClick={(e)=>showQuestion(e,'q7')} question="Czy osoba dorosła, która nie skacze musi płacić?"/>
            <FaqComponentA answer="Osoby, które nie skaczą serdecznie zapraszamy na kawiarenkę, z której widać jak każdy się bawi. Wejście na kawiarenkę jest bezpłatne." />
            <FaqComponentQ onClick={(e)=>showQuestion(e,'q8')} question="Czy na kawiarenkę można wejść w butach?"/>
            <FaqComponentA answer="Na kawiarenkę można wejść w obuwiu zamiennym lub skarpetkach" />
            <FaqComponentQ onClick={(e)=>showQuestion(e,'q9')} question="Czy wejścia odbywają się o pełnych godzinach?"/>
            <FaqComponentA answer="Wejścia odbywają się co pół godziny." />
            <FaqComponentQ onClick={(e)=>showQuestion(e,'q10')} question="Czy są u was szatnie?"/>
            <FaqComponentA answer="Oczywiście. Są niezmiennie do Państwa dyspozycji wraz z zamykanymi szafkami." />
            <FaqComponentQ onClick={(e)=>showQuestion(e,'q11')} question="Czy osoby nieletnie muszą mieć zgody?"/>
            <FaqComponentA answer="Tak. Osobny które nie ukończyły 18 roku życia muszą mieć zgodę rodzica/opiekuna prawnego, którą można wypisać u nas na miejscu bądź pobrać gotowy druk z naszej strony." />
            <FaqComponentQ onClick={(e)=>showQuestion(e,'q12')} question="Czy trzeba rezerwować miejsce?"/>
            <FaqComponentA answer="Miejsca wystarczy dla każdego, jednak jeśli Państwo chcą można dokonać rezerwacji poprzez telefon lub stronę internetową." />
            <FaqComponentQ onClick={(e)=>showQuestion(e,'q13')} question="Kiedy jest Fluo Party"/>
            <FaqComponentA answer="W każdy piątek i sobotę od 18 do 20." />
            <FaqComponentQ onClick={(e)=>showQuestion(e,'q14')} question="Czy trzeba mieć maseczki?"/>
            <FaqComponentA answer="Nie mamy obowiązku noszenia masek na naszym terenie." />
            <FaqComponentQ onClick={(e)=>showQuestion(e,'q15')} question="Czy można wejść nie korzystając z parku trampolin"/>
            <FaqComponentA answer="Tak - opiekunowie i osoby czekające na skaczących mogą skorzystać ze strefy kawiarenkowej" />
            <FaqComponentQ onClick={(e)=>showQuestion(e,'q16')} question="Czy na odskocznie mogą wejść osoby dorosłe?"/>
            <FaqComponentA answer="Oczywiście, że tak! Nie mamy górnego ograniczenia wiekowego tak więc zapraszamy każdego." />
            <FaqComponentQ onClick={(e)=>showQuestion(e,'q17')} question="Masz jakieś inne pytania?"/>
            <FaqComponentA answer="Chętnie odpowiemy na wszelkie pytania. Zapraszamy do kontaktu telefonicznego pod numerem telefony 733 60 80 80." />
        </div>
          <p className='font-white font-montserrat-medium font-15'>
            &copy; FILIP KOTŁOWSKI 2022 ALL RIGHT RESERVED
          </p>
    </div>
  )
}

export default FaqPage