import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import CardDetail from '../components/Card/CardDetail';
import { EcommerceContext } from '../context/EcommerceProvedor';


const DetalleConsola = () => {
    const { id } = useParams()
    const { productos } = useContext(EcommerceContext);

    const product = productos.find((index) => index.id == id)
    console.log(product)



    return (
        <div>
            <h1>DetalleProducto {id}</h1>


            <CardDetail titulo={product.titulo} img={product.imagen} />
        </div>

    )
}

export default DetalleConsola