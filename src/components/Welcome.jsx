import React from 'react'
import Quiz from "../img/quiz.png"
import './Welcome.css'
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'


const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext)

 
  return (
    <div id='welcome'>
        <h2>Seja bem-vindo</h2>
        <p>Clique no botao abaixo para começar</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
        <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  )
}

export default Welcome