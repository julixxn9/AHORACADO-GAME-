import { useEffect, useReducer } from "react";
import "../styles/config.css";
import configSvg from "/config.svg";

function configHandler(estadoAnterior, accion) {

    const estado =  {...estadoAnterior}; // Copia el estado anterior

    if(accion == "menu"){
        estado.menu = !estadoAnterior.menu;
        estado.caseType = false; // Cierra el dropdown de caseType al cerrar el menú
    }else
    if(accion == "caseType"){
        estado.caseType = !estadoAnterior.caseType;
    }
    return estado;
}

function caseHandler(estadoAnterior, accion) {
    const estado = {...estadoAnterior}; // Copia el estado anterior

    if(accion == "Aa"){
        estado.valor = "Aa";
        estado.liAA = false;
        estado.liAa = true;
        estado.liaa = false;
    }else
    if(accion == "AA"){
        estado.valor = "AA";
        estado.liAA = true;
        estado.liAa = false;
        estado.liaa = false;
    }else
    if(accion == "aa"){
        estado.valor = "aa";
        estado.liAA = false;
        estado.liAa = false;
        estado.liaa = true;
    }
    return estado;
}

function Config({mensajero}) {
  
    const [config, setConfig] = useReducer(configHandler, {menu: false, caseType: false});
    const [capital, setCaseType] = useReducer(caseHandler, {valor : "Aa", liAA: true, liAa: false, liaa: false});

    useEffect(() => {
        mensajero(capital.valor);
    }, [capital]);

  return (
    <div className="config-container">
      <img src={configSvg} alt="config" onClick={ () =>setConfig("menu")} />
      <div className={`bubble ${config.menu ? "show" : ""}`}>
        <div className="case-type" onClick={ () => setConfig("caseType")}>
          <span>Case:</span>
          <ul className={config.caseType ? "open" : ""}>
            <li className={capital.liAA ? "selected" : ""} onClick={()=>setCaseType("AA")} >AA</li>
            <li className={capital.liAa ? "selected" : ""} onClick={()=>setCaseType("Aa")}>Aa</li>
            <li className={capital.liaa ? "selected" : ""}  onClick={()=>setCaseType("aa")}>aa</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Config;
