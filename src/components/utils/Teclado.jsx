import { useState } from "react";
import Tecla from "./Tecla.jsx";
import "../styles/teclado.css";

function Teclado() {
  const [palabra, setPalabra] = useState("");

  const textHandler = (letra) => {
    setPalabra(palabra + letra);
  };

  const fila1 = ["W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const fila2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const fila3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div className="teclado-contenedor">
      <div className="teclado-columnas">
        <div className="teclado-grilla fila-1">
          {fila1.map((letra, index) => (
            <Tecla tecleo={textHandler} key={index}>
              {letra}
            </Tecla>
          ))}
        </div>

        <div className="teclado-grilla fila-2">
          {fila2.map((letra, index) => (
            <Tecla tecleo={textHandler} key={index}>
              {letra}
            </Tecla>
          ))}
        </div>

        <div className="teclado-grilla fila-3">
          {fila3.map((letra, index) => (
            <Tecla tecleo={textHandler} key={index}>
              {letra}
            </Tecla>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teclado;
