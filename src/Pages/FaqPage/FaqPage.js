import React,{useState,useEffect} from 'react';
import FaqComponentA from '../../Components/FaqComponentA/FaqComponentA';
import FaqComponentQ from '../../Components/FaqComponentQ/FaqComponentQ';
import TopNavbar from '../../Components/TopNavbar/TopNavbar';
import './FaqPage.css';
function FaqPage() {
    const allQuestions = {
      q1:false,
      q2:false,
      q3:false,
      q4:false
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
    document.title = "Odskocznia - FAQ";
    
    useEffect(()=>{
      questions.forEach(element => {
        element.classList.add('question#'+ questionCounter)
        element.setAttribute("id",questionCounter)
        questionCounter++
      });
  })
  return (
    <div className='background'>
        <TopNavbar />
        <div className='m-3'>
            <h2 className='text-upper font-montserrat-medium font-white font-38 text-shadow'>
                Pytania i odpowiedzi
            </h2>
            <FaqComponentQ onClick={(e)=>showQuestion(e,'q1')}question="Co trzeba wiedzieć przed pierwszą wizytą w parku trampolin?"/>
            <FaqComponentA answer="kaka1" />
            <FaqComponentQ onClick={(e)=>showQuestion(e,'q2')} question="Od jakiego wieku dzieci mogą korzystać z parku trampolin?"/>
            <FaqComponentA answer="kaka2" />
            <FaqComponentQ onClick={(e)=>showQuestion(e,'q3')} question="Czy można zarezerwować miejsce w Odskoczni na konkretną godzinę?"/>
            <FaqComponentA answer="kaka3" />
            <FaqComponentQ onClick={(e)=>showQuestion(e,'q4')} question="Jak długo macie otwarte?"/>
            <FaqComponentA answer="kaka4" />
        </div>
    </div>
  )
}

export default FaqPage