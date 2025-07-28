import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import Category from '../img/category.png'

import './PickCategory.css'


const PickCategory = () => {
  return (
    <div id="category">
        <h2>Escolha uma categoria</h2>
        <p>As perguntas serão referentes a uma das categorias abaixo:</p>
        <div>
            <button>Futebol Brasileiro</button>
        </div>
        <img src={Category} alt="Categorias do Quiz" />
    </div>
  )
}

export default PickCategory