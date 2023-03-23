import React, { useEffect, useState } from 'react'
import CardDetail from '../components/Card/CardDetail'
import { useParams } from 'react-router-dom'
import { cards } from '../data/AutosData'

const DetailPages = () => {
    const { id } = useParams()

    //SIMULANDO UNA PETICION FETCH:
    const [loading, setLoading] = useState(false) //Si esta "acitvado" el loading o no
    const [itemTarjeta, setItemTarjeta] = useState(null) //arranca vacio

    const findCards = () => {
        setLoading(true) //activamos el "loading" mientras espera la data de la peticion

        setTimeout(() => { //Con esto SIMULAMOS el timpo de respuesta a la peticion Fetch
            const resultadoFind = cards.find((item) => item.id === id) // Esto recorre cada item del array "cards" y cuyo "item.id" es igual al "id", en este caso al "id de la URL" de Route, te retorna toda la info de ESE objeto.
            if (resultadoFind) { //si el procuto existe entonces...
                setItemTarjeta(resultadoFind)//...guardar en este estado el procuto encontrado
            }
            setLoading(false) // cuando tenga la data de la peticion, quitar el "loading"
        }, 2000)
    }


    useEffect(() => { //Debemos usar el método useEffect para ejecutar la petición al servidor sólo cuando el componente se monta
        findCards()
    }, []) //Debemos usar los [] para que la petición sólo se ejecute cuando el componente se monte. De lo contrario se ejecutaría en cada render. Si ponemos una variable de estado dentro de los [], la petición se ejecutárá cada vez que esa variable cambie.

    return (
        <>
            {loading && <h1>Cargando...</h1>} {/*si loading es true: mostra la pantalla de carga */}
            {!loading && !itemTarjeta && <h1>Producto no existe</h1>} {/*si loading es false, y no se encontro el item de la peticion: mostrar la pantalla de no se encuentra*/}
            {!loading && itemTarjeta && <CardDetail img={itemTarjeta.img} titulo={itemTarjeta.titulo} />} {/*si loading es false, y se encontro el item, mostrar toda la data de ESE objeto  */}
        </>
    )

}

export default DetailPages

// EJEMPLO SIN "PETICION FETCH"
// const DetailPages = () => {

//     // "const params" te muestra lo que hay luego de los dos puntos (:) en la URL de la "Route" de "DetailPages".
//     //Por eso se puede destructurar.

//     // const params = useParams()
//     // console.log(params)

//     const { id } = useParams() // Esto es lo de arriba destructurado.
//     const itemTarjeta = cards.find((item) => item.id === id) // Esto recorre cada item del array "cards" y cuyo "item.id" es igual al "id", en este caso al "id de la URL" de Route, te retorna toda la info de ESE objeto.

//     if (itemTarjeta) {
//         return (
//             <div>
//                 <CardDetail img={itemTarjeta.img} titulo={itemTarjeta.titulo} />
//             </div>
//         )
//     } else {
//         return (<h1>No existe el procuto</h1>)
//     }

// }