import { useEffect } from "react"
import "../styles/wordContainer.css"
import Teclado from "./Teclado.jsx"
import Word from "./Word.jsx"

function WordContainer({configApp}) {
  return (
    <div className="word-container">
      <Word configWordContainer={configApp} />
      <Teclado/>
    </div>
  )
}

export default WordContainer