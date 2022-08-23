import React,{useState,useEffect} from 'react';
import FaqComponentA from '../../Components/FaqComponentA/FaqComponentA';
import FaqComponentQ from '../../Components/FaqComponentQ/FaqComponentQ';
import TopNavbar from '../../Components/TopNavbar/TopNavbar';
import './FaqPage.css';
function FaqPage() {
  document.title = "Odskocznia - FAQ";
    const allQuestions = {
      q1:false,
      q2:false,
      q3:false,
      q4:false,
      q5:false
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
        </div>
    </div>
  )
}

export default FaqPage