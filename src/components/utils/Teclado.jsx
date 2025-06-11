import Tecla from "./Tecla.jsx";
import "../styles/teclado.css";

function Teclado() {

  const fila1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const fila2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const fila3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div className="teclado-contenedor">
      <div className="fila fila1">
        {fila1.map((letra, index) => (
          <Tecla key={index}>
            {letra}
          </Tecla>
        ))}
      </div>
      <div className="fila fila2">
        {fila2.map((letra, index) => (
          <Tecla key={index}>
            {letra}
          </Tecla>
        ))}
      </div>
      <div className="fila fila3">
        {fila3.map((letra, index) => (
          <Tecla key={index}>
            {letra}
          </Tecla>
        ))}
      </div>
    </div>
  );
}

export default Teclado;
