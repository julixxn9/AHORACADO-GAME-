import "../styles/word.css";
import { useEffect, useState } from "react";

function Word() {

    const [letras, setLetra] = useState("smbpxi");
    const [palabra, setPalabra] = useState("Sambapalosexinai");
     
    const [juego, setJuego] = useState([]);

    useEffect(() => {
        const estructura = palabra.split("").map((letra) => {
            return {
                letra: letra.toLowerCase(),
                conseguida: letras.includes(letra.toLowerCase())
            };
        });
        setJuego(estructura);
    }, []);

    return (
    <ol className="container-palabra">
      {juego.map((letra, index) => {
        if (letra.letra === " ") return null; // ya no me dio mente
        return (
          <li key={index}>
            {letra.conseguida ? letra.letra : ""} {/* aqui es para que los li que no estan en la palabra no se muestren y en el css aparezca en blanco las letras que no estan en la palabra */}
          </li>
        );
      })}
    </ol>
  );
}

export default Word;
