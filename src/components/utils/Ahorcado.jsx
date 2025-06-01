import { useRef, useState } from "react";
import "../styles/ahorcado.css"

function Ahorcado() {
  const [banca, setBanca] = useState(0);
  const refBanca = useRef();
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
    <>
    <section className="ahorcado">
      <div className="avatar">
        <div className="imagen"></div>
        <img ref={refBanca} style={{right: `calc(20% + ${banca}%)`}} className="banco" src="/banca.png" alt="banco" />
      </div>
      <audio ref={refAudioMuerte} src="/muerteGato.mp3"></audio>
    </section>
    {/* <button onClick={chairHanlder} >Rotar {banca}</button> */}
    </>
  )
}

export default Ahorcado