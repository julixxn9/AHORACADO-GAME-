import { useRef, useContext } from "react";
import "../styles/ahorcado.css"
import { ConfigContext } from "../../context/ConfigContext";

function Ahorcado() {
  const refBanca = useRef();
  const { banca, chairHanlder} = useContext(ConfigContext);

  return (
    <>
    <section className="ahorcado">
      <div className="avatar">
        <div className="imagen"></div>
        <img ref={refBanca} style={{right: `calc(20% + ${banca}%)`}} className="banco" src="/banca.png" alt="banco" />
      </div>
    </section>
    {/* <button onClick={chairHanlder} >Rotar {banca}</button> */}
    </>
  )
}

export default Ahorcado