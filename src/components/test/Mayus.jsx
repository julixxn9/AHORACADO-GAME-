import { useRef, useState } from "react"

function Mayus() {
    const refInput = useRef();
    const refH2 = useRef();
    const [gringo, setGringo] = useState(false);

    const handlerMayus = (e) => {
        // lo que se escriba en el input debe ser en mayus en el h2
        const input = refInput.current.value.toUpperCase()
        setGringo(String(input.includes("Ñ")))
        refH2.current.textContent = refInput.current.value.toUpperCase();
        // y si quito la ñ del input, la imagen debe desaparecer
    }
  return (
    // hay que escribir en un input y reflejarlo en un h2 usando hooks y render condicional
    <div>
        <h2 style={{color: "white"}} ref={refH2}></h2>
        <input ref={refInput} type="text" onChange={handlerMayus} />
        {gringo && <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTORR2uMHZNyzpEZwiAaQc5TC2szCCBY_z828Q6giqR28C6syDol-_HxF11QJMWF4tXtglnshoDuQlFpliN6uD5ug" alt=" gringo" width={200} />}
    </div>
  )
}

export default Mayus