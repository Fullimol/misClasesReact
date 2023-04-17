import React, { useContext } from 'react'
import { EcommerceContext } from '../../context/EcommerceProvedor'
import useContador from '../../Hooks/useContador'
import Button from '../../Shared/Button'

const Counter = (props) => {
    const { producto, botonAgregar, cantidad } = props
    const { agregarAlCarrito, verificarCarrito } = useContext(EcommerceContext)
    const { contador, handleRestar, handleSumar, handleRedirect } = useContador(cantidad)

    return (
        <>
            <div className='d-flex justify-content-around'>
                <Button onClick={handleRestar} text_button="-" className="btn btn-danger fs-6" />
                <h5>{contador}</h5>
                <Button onClick={handleSumar} text_button="+" className="btn btn-success fs-6" />
            </div>

            {/* si "botonAgregar" está como props y "verificarCarrito" es lo contrario a TRUE, entonces mostra el botton */}
            {/* aca se toman todos los datos que paso a (producto) dentro de los props de <Card/>, y LE AGREGO el valor de contador */}
            {botonAgregar && !verificarCarrito(producto.id) && <Button onClick={() => agregarAlCarrito({ ...producto, contador })} text_button="agregar al carrito" className="btn btn-primary fs-6 m-2" />}  {/* sintaxis de expansión o "spread syntax" */}
            {/*  podemos utilizar la sintaxis de expansión para crear un nuevo array que contenga los mismos elementos, pero con uno o varios elementos adicionales (ej. contador) */}

            {verificarCarrito(producto.id) && <Button onClick={handleRedirect} text_button="terminar compra" className="btn btn-success fs-6 m-2" />}
        </>

    )
}

export default Counter