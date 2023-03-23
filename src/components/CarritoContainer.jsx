import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { EcommerceContext } from '../context/EcommerceProvedor'

const CarritoContainer = () => {
    const { carrito, eliminarDelCarrito } = useContext(EcommerceContext)

    return (
        <div>
            {/* si no hay carrito.length (osea...esta vacío), entonces, devolveme un <H1>, sino devolveme lo siguente del : */}
            {!carrito.length ? <h1>(carrito vacío)</h1> : carrito.map((product) => (
                <div className="card mb-3 container" style={{ width: "400px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={product.imagen} className="img-fluid rounded-start" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <p className="card-text">#id{product.id}</p> 
                                
                                <h5 className="card-title">{product.titulo}</h5>
                                <h4 className="card-text">${product.precio}</h4>
                            </div>
                            <Link to={`/detalleproducto/${product.id}`} className='btn btn-info'>Detalle</Link>
                            <button className="btn btn-danger m-1" onClick={() => eliminarDelCarrito(product)}>Borrar</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CarritoContainer


// return (
//     <div>
//         {/* si no hay carrito.length (esta vacío), entonces, devolveme un <H1>, sino devolveme lo siguente del : */}
//         {!carrito.length ? <h1>(carrito vacío)</h1> : carrito.map(({titulo, precio}) => (
//             <>
//                 <div classNameName='d-flex card'>
//                     <span>{titulo}</span>
//                     <span>${precio}</span>
//                 </div>
//             </>
//         )) }
//     </div>
//   )