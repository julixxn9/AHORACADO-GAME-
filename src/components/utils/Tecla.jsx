import { useContext, useEffect, useRef } from "react";
import { ConfigContext } from "../../context/ConfigContext";

function Tecla({ children }) {

  const {letras, setLetras, secreto, chairHanlder} = useContext(ConfigContext)

  
  const refButton = useRef();
  useEffect(()=>{
    if(!letras){
      refButton.current.removeAttribute("disabled")
      refButton.current.style.backgroundColor = "#fff";
      refButton.current.style.border= "none";
    }
  },[letras])

  return (
    <button className="tecla"
    ref={refButton}
      onClick={() => {
        setLetras(letras + children) // aqui se agrega la letra al estado letras del context

      if (!secreto.toLowerCase().includes(String(children).toLowerCase())){
        chairHanlder()
      } // si la letra que se presiona esta en el secreto

        refButton.current.setAttribute("disabled", true)
        // ahora si tiene ese etributo entonces las teclas cambiaran de color
        if (refButton.current.hasAttribute("disabled")) {
          refButton.current.style.backgroundColor = "#FF5F5D";
          refButton.current.style.border= "1px solid  #D96941";
        }
       }}
      style={{
        width : "47px",
        padding: "10px",
        fontSize: "1.2rem",
        color: "#333",
        backgroundColor: "#eee",
        border: "1px solid #ccc",
        borderRadius: "5px",
        cursor: "pointer"
      }}
    >
      {children} {/* esto es el texto que se muestra en el botton */}
    </button>
  );
}

export default Tecla;
