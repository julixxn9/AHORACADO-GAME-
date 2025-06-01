import { useState, useEffect } from "react"
import "./contador.css"

function Contador() {
  const [time, setTime] = useState( new Date().toLocaleTimeString() )
  const [count, setCount] = useState(0)

  const sumar = () => {
    setCount(count + 5)
  }
  const rest = () =>{
    setCount(count - 5)
  }

  useEffect(()=>{
    // setInterval es una función que ejecuta una función a intervalos de tiempo real
    const intervalo = setInterval(() =>{
      setTime(new Date().toLocaleTimeString()) // cada segundo actualiza el tiempo
    }, 1000);

    return () => clearInterval(intervalo); // cuando el componente se desmonte, se detiene el intervalo
  },[]);

  return (
    <>
    <div>
      <h2>
        contador de clicks
      </h2>
      <p>
        {count}
      </p>
      <div style={{display: 'flex', gap: '10px'}}>
      <button onClick={sumar}>
        Click Sumar
      </button>
      <button onClick={rest}>
        Click Restar
      </button>
      </div>
    </div>
    <div>
      <h2>contador a tiempo real</h2>
      <strong>
        tiempo: {time}
      </strong>
    </div>
    </>

  )
}

export default Contador