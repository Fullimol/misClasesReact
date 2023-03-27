import { useState } from 'react'

const useContador = (props) => {
    const { valorInicial } = props
    const [contador, setContador] = useState(valorInicial)

    const handleSumar = () => setContador(contador + 1);

    const handleRestar = () => {
        if (contador > 1) {   // Esto es para que no ponga número menores a 1
            setContador(contador - 1)
        }
    };

    return {    // IMPORTANTE! cambiár los paréntesis por llaves para que funcione
        contador,
        handleSumar,
        handleRestar
    }
}

export default useContador