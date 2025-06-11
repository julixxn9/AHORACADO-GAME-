import WordContainer from './utils/WordContainer.jsx';
import "./App.css"
import Ahorcado from "./utils/Ahorcado.jsx"
import Config from './utils/Config.jsx';
import { useEffect, useState } from 'react';
import Menu from './utils/Menu.jsx';


function App() {

  const [caseConfig, setCaseConfig] = useState("");
  return (
    <section className="App">
        <Menu />
        <Ahorcado/>
        <WordContainer configApp ={caseConfig} />
        <Config mensajero={setCaseConfig} />
    </section>
  )
}

export default App