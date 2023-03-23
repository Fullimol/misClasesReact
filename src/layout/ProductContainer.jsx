import React from 'react'
import Card from '../components/Card/Card'
import { cards } from '../data/AutosData'
import { useEffect } from 'react'

const ProductContainer = () => {


    // useEffect(() => {
    //   console.log("PRIMERO Estoy dentro del use Effect")
    
    //   return () => {
    //     console.log("SEGUNDO Acá lo destruyo")
    //   }
    // }, [])
    
    // console.log("soy el compononente entero")

    return (
        <>
        {cards.map(({id, img, titulo, descripcion,boton_nombre}) => (
        <Card 
        id={id}
        key={id}
        img={img}
        titulo={titulo}
        descripcion={descripcion}
        boton_nombre={boton_nombre}
        link_to="/detail/"
        link_boton="Ir a Detalles"
        boton_className // no esta cambiando al color que deseo, si se quita pierde el estilo
        />))}
        </>
    )
}

export default ProductContainer