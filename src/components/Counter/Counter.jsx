import React, { useContext, useState } from 'react'
import { EcommerceContext } from '../../context/EcommerceProvedor'
import Button from '../../Shared/Button'

const Counter = (props) => {
    const { producto } = props
    const [contador, setContador] = useState(1)

    const { agregarAlCarrito } = useContext(EcommerceContext)

    const handleSumar = () => setContador(contador + 1);

    const handleRestar = () => {
        if (contador > 1) {   // Esto es para que no ponga número menores a 1
            setContador(contador - 1)
        }
    };

    return (
        <>
            <div className='d-flex justify-content-around'>
                <Button onClick={handleRestar} text_button="-" className="btn btn-danger fs-6" />
                <h5>{contador}</h5>
                <Button onClick={handleSumar} text_button="+" className="btn btn-success fs-6" />
            </div>
            {/* aca se toman todos los datos que paso a (producto) dentro de los props de <Card/>, y LE AGREGO el valor de contador */}
            <Button onClick={() => agregarAlCarrito({ ...producto, contador })} text_button="agregar al carrito" className="btn btn-primary fs-6 m-2" />
        </>

    )
}

export default Counter