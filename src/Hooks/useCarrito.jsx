import { useState } from 'react'

const useCarrito = () => {

    const [carrito, setCarrito] = useState([])
    const agregarAlCarrito = (product) => {
        setCarrito([...carrito, product]) //hace una copia de mi "carrito" (en caso de ya tener datos almacenados", y luego le agrega el nuevo dato)
        alert("Agregado al carrito")
    }

    const eliminarDelCarrito = (product) => {
        const quitarItem = carrito.filter(item => item.id !== product.id) //Se filtra la lista carrito usando "filter" y se compara el ID de cada objeto (item) con el ID del objeto que se quiere eliminar(donde hago click). Los objetos que NO tienen el mismo ID se mantienen en la lista filtrada, y los que tienen el mismo ID se quitan.
        setCarrito(quitarItem) // Luego se guarda el nuevo estado del carrito con el array con los items eliminados
    }

    return {
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito
    }
}

export default useCarrito