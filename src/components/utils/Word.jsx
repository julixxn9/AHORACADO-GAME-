import { ConfigContext } from "../../context/ConfigContext";
import "../styles/word.css";
import { useContext, useEffect, useState } from "react";

function Word({configWordContainer}) {

    const {secreto, letras} = useContext(ConfigContext);

    const [juego, setJuego] = useState([]);

    useEffect(() => {
        const estructura = secreto.split("").map((letra) => {
            return {
                letra: letra.toLowerCase(),
                conseguida: !(/[a-zA-Z]/.test(letra)) ||  letras.toLowerCase().includes(letra.toLowerCase())
            };
        });
        setJuego(estructura);
        console.log(letras);
    }, [configWordContainer, letras, secreto]);

    return (
    <ol className="container-palabra"
      style={{
        textTransform : 
        configWordContainer == "AA" ? "uppercase" :
        configWordContainer == "aa" ? "lowercase" : "none",
      }}
    >
      {juego.map((letra, index) => {
        return (
          /[a-zA-Z]/.test(letra.letra) ?
          <li key={index}>
            {letra.conseguida? letra.letra : "\u00A0"}
          </li>
          :
          letra.letra == " " ? "\u00A0\u00A0\u00A0" :
          <li key={index}>
            {letra.conseguida ? letra.letra : "\u00A0"} {/* aqui es para que los li que no estan en la palabra no se muestren y en el css aparezca en blanco las letras que no estan en la palabra */}
          </li>
        );
      })}
    </ol>
  );
}

export default Word;
