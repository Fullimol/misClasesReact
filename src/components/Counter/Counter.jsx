import React, { useState } from 'react'
import Button from '../../Shared/Button'

const Counter = () => {
    const [contador, setContador] = useState(1)

    const handleSumar = () => setContador(contador + 1);

    const handleRestar = () => {
        if (contador > 1) {   // Esto es para que no ponga número menores a 1
            setContador(contador - 1)
        }
    };

    return (
        <div className='d-flex justify-content-around'>
            <Button onClick={handleRestar} text_button="-" className="btn btn-danger fs-6" />
            <h5>{contador}</h5>
            <Button onClick={handleSumar} text_button="+" className="btn btn-success fs-6" />
        </div>
    )
}

export default Counter