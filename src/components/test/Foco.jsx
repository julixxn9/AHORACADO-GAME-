import { useRef, useState } from "react"

function Foco() {
    
    const styles = {
        divCenter: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            aliGnItems: 'center',
        },
        // transicion entre los estados de la una foto y otra
        transicion: {
            transition: 'transform 0.5s'
        }
    }

    const referenciaFoto = useRef();
    const referenciaBoton = useRef();
    const [foco, setFoco] = useState(false);

        const lightHandler = () => {
            const encendido = !foco


            if(encendido){
            // transicion de la foto con setTimeOut
                referenciaFoto.current.src = "./focoon.png";
                referenciaBoton.current.textContent = "Apagar";;
            }else{
                referenciaFoto.current.src = "./focooff.png";
                referenciaBoton.current.textContent = "Encender";
            }
            setFoco(encendido);
        }

    return (
        <div>
            <div style={styles.divCenter}>
                <img ref={referenciaFoto} style={styles.transicion} src="./focooff.png" alt="Foco" />
                <button ref={referenciaBoton} onClick={lightHandler}>Encender</button>
            </div>
        </div>
    )



}

export default Foco