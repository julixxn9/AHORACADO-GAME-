import { createContext, useState,useRef } from "react"
import GanarPerder from "../components/utils/GanarPerder";

export const ConfigContext = createContext();

function ConfigContextProvaider({ children }) {

  const [secreto , seTSecreto ] = useState("");
  const [letras, setLetras] = useState("");
  const [banca, setBanca] = useState(0);
  
  const refAudioMuerte = useRef();

  const chairHanlder = () => {
    if (banca < 35){
      setBanca(banca + 3.5);
    }
    if(banca >= 31.5){
      refAudioMuerte.current.currenTime = 0.5;
      refAudioMuerte.current.play();
    }
  }

  return (
    <ConfigContext.Provider value={{ secreto, seTSecreto, letras, setLetras, banca, chairHanlder, setBanca }}>
        <GanarPerder/>
        {children}
         <audio ref={refAudioMuerte} src="/muerteGato.mp3"></audio>
    </ConfigContext.Provider>
  )
}

export default ConfigContextProvaider