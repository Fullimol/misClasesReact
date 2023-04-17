import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const useContador = ( initialValue = 1) => {
    const [contador, setContador] = useState(initialValue)
    const navigate = useNavigate()

    const handleSumar = () => setContador(contador + 1);

    const handleRestar = () => {
        if (contador > 1) {   // Esto es para que no ponga número menores a 1
            setContador(contador - 1)
        }
    };

    const handleRedirect = () => navigate('/carrito')  // al hacer click, redirije a "/carrito"


    return {    // IMPORTANTE! cambiar los paréntesis por llaves para que funcione
        contador,
        handleSumar,
        handleRestar,
        handleRedirect
    }
}

export default useContador