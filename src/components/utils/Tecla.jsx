import { useRef } from "react";

function Tecla({ children, tecleo }) {

  const refButton = useRef(null);

  return (
    <button
    ref={refButton}
      onClick={() => {tecleo?.(children)
        refButton.current.setAttribute("disabled", true)
        // ahora si tiene ese etributo entonces las teclas cambiaran de color
        if (refButton.current.hasAttribute("disabled")) {
          refButton.current.style.backgroundColor = "#FF5F5D";
          refButton.current.style.border= "1px solid  #D96941";
        }
      }
       } // tecleo?.(children) esto significa que si tecleo existe entonces ejecuta la función
      style={{
        padding: "10px",
        fontSize: "1.2rem",
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
