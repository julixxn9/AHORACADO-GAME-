import "../styles/Menu.css";
import { useContext, useReducer, useRef, useState } from 'react';
import { ConfigContext } from '../../context/ConfigContext.jsx';

const menuViewInitial = {
    vistaActual: 0,
    nuevoJuego: true,
    nuevaFrase: false,
    pause: false,
};

function menuViewHandler(estado, accion) {
    const nuevoEstado = { ...estado };

    switch (accion) {
        case 0:
            nuevoEstado.vistaActual = 0;
            nuevoEstado.nuevoJuego = true;
            nuevoEstado.nuevaFrase = false;
            nuevoEstado.pause = false;
            return nuevoEstado;
        case 1:
            nuevoEstado.vistaActual = 1;
            nuevoEstado.nuevoJuego = false;
            nuevoEstado.nuevaFrase = true;
            nuevoEstado.pause = false;
            return nuevoEstado;
        case 2:
            nuevoEstado.vistaActual = 2;
            nuevoEstado.nuevoJuego = false;
            nuevoEstado.nuevaFrase = false;
            nuevoEstado.pause = true;
            return nuevoEstado;
        default:
            return nuevoEstado;
    }
}

function Menu() {
    const [menuView, setMenuView] = useReducer(menuViewHandler, menuViewInitial);
    const [menu, setMenu] = useState(true);

    const { seTSecreto, setBanca, setLetras } = useContext(ConfigContext);
    const textRef = useRef();

    const fraseHandler = (event) => {
        event.preventDefault();
        if (textRef.current.value.trim() === "" || !/[a-zA-Z]/.test(textRef.current.value)) {
            return alert("debes de colocar una frase valida!");
        }

        const frase = textRef.current.value.trim().replaceAll("<", "&#60;").replaceAll(">", "&#62;");
        setBanca(0);
        setMenuView(2);
        setMenu(false);
        seTSecreto(frase);
    };

    // Handlers integrados dentro del componente
    const handleReiniciar = () => {
        const confirmado = confirm("¿Estás seguro de que quieres reiniciar el juego?");
        if (confirmado) {
            setBanca(0);
            setLetras("");
            seTSecreto("");
            setMenuView(1);
        }
    };

    const handleSalir = () => {
        const confirmado = confirm("¿Estás seguro de que quieres salir al menú principal?");
        if (confirmado) {
            setBanca(0);
            setLetras("");
            seTSecreto("");
            setMenuView(0);
        }
    };

    return (
        <div className="Menu" style={{
            backgroundColor: menu ? "rgba(0, 0, 0, 0.5)" : "transparent",
            backdropFilter: menu ? "blur(10px)" : "blur(0px)",
            width: menu ? "100%" : "0%",
            height: menu ? "100%" : "0%",
        }} >
            {menuView.pause && !menu && <img src="/menu.svg" alt="Menu" onClick={() => setMenu(!menu)} />}
            {menu && <>
                <p className="title">
                    <img src="/kill.png" alt="" />
                    <span>Ahorcado</span>
                    <img src="/kill.png" alt="" />
                </p>
                {menuView.nuevoJuego && <button onClick={() => setMenuView(1)}>Nuevo juego!</button>}
                {menuView.nuevaFrase &&
                    <form onSubmit={fraseHandler}>
                        <textarea ref={textRef} placeholder="Frase secreta..." ></textarea>
                        <div className="separador">
                            <button type="button" className="btn" onClick={() => setMenuView(0)}>Cancelar</button>
                            <button type="submit" className="btn">Iniciar</button>
                        </div>
                    </form>
                }
                {menuView.pause && <>
                    <button onClick={() => setMenu(!menu)}>Continuar</button>
                    <button onClick={handleReiniciar}>Reiniciar</button>
                    <button onClick={handleSalir}>Salir</button>
                </>}
            </>}
        </div>
    );
}

export default Menu;
