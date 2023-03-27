//creamos este componente donde va a enviar mediante EXPORT la data a usar en otro componente

import { createContext, useState } from 'react'

export const EcommerceContext = createContext('')

const EcommerceProvedor = (props) => {
    const { children } = props

    const [carrito, setCarrito] = useState([])


    const agregarAlCarrito = (product) => {
        setCarrito([...carrito, product]) //hace una copia de mi "carrito" (en caso de ya tener datos almacenados", y luego le agrega el nuevo dato)
        alert("Agregado al carrito")
    }

    const eliminarDelCarrito = (product) => {
        const quitarItem = carrito.filter(item => item.id !== product.id) //Se filtra la lista carrito usando "filter" y se compara el ID de cada objeto (item) con el ID del objeto que se quiere eliminar(donde hago click). Los objetos que NO tienen el mismo ID se mantienen en la lista filtrada, y los que tienen el mismo ID se quitan.
        setCarrito(quitarItem) // Luego se guarda el nuevo estado del carrito con el array con los items eliminados
    }

    const productos = [
        {
            id: 1,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-V.webp",
            titulo: "PlayStation 5",
            precio: 30000
        },
        {
            id: 2,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_963862-MLA45041918050_032021-V.webp",
            titulo: "Xbox Series X",
            precio: 100000
        },
        {
            id: 3,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_803086-MLA47920649105_102021-V.webp",
            titulo: "Nintendo Switch",
            precio: 25000
        }
    ]

    return (

        <EcommerceContext.Provider value={{ productos, agregarAlCarrito, carrito, eliminarDelCarrito }}> {/* en "value" ponemos cada valor que deseemos compartir con otros componentes */}
            {children}  {/* esto es para que al llamar a este componente, dentro del mismo pongamos los demás (hijos) a los que vamos a compartir nuestro valores*/}
        </EcommerceContext.Provider>
    )

}

export default EcommerceProvedor