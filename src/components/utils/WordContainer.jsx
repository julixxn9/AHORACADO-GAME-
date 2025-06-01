import "../styles/wordContainer.css"
import Teclado from "./Teclado.jsx"
import Word from "./Word.jsx"

function WordContainer() {
  return (
    <div className="word-container">
      <Word/>
      <Teclado/>
    </div>
  )
}

export default WordContainer