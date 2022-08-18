import React,{useState,useEffect} from 'react';
import FaqComponentA from '../../Components/FaqComponentA/FaqComponentA';
import FaqComponentQ from '../../Components/FaqComponentQ/FaqComponentQ';
import TopNavbar from '../../Components/TopNavbar/TopNavbar';
import './FaqPage.css';
function FaqPage() {
    const [currentQuestion,setCurrentQuestion] = useState(1)
    const questions = document.querySelectorAll('.question')
    const answers = document.querySelectorAll('.answer')
    let questionCounter = 0;
    document.title = "Odskocznia - FAQ";
    useEffect(()=>{
      function showAnswer(element){
        setCurrentQuestion(Number(element.id))
        answers[currentQuestion].classList.toggle('visible')
        console.log(answers[currentQuestion].outerText)
      }
      questions.forEach(element => {
        element.addEventListener('click',()=>{showAnswer(element)})
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
            <FaqComponentQ question="Co trzeba wiedzieć przed pierwszą wizytą w parku trampolin?"/>
            <FaqComponentA answer="kaka1" />
            <FaqComponentQ question="Od jakiego wieku dzieci mogą korzystać z parku trampolin?"/>
            <FaqComponentA answer="kaka2" />
            <FaqComponentQ question="Czy można zarezerwować miejsce w Odskoczni na konkretną godzinę?"/>
            <FaqComponentA answer="kaka3" />
            <FaqComponentQ question="Jak długo macie otwarte?"/>
            <FaqComponentA answer="kaka4" />
        </div>
    </div>
  )
}

export default FaqPage