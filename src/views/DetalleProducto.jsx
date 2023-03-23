import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CardDetail from '../components/Card/CardDetail';
import { EcommerceContext } from '../context/EcommerceProvedor';
import Button from '../Shared/Button';

const DetalleConsola = () => {
    const { id } =  useParams()
    const { productos } = useContext(EcommerceContext);

    const product = productos.find((product) => product.id === id)
    console.log(product) // Esto me tira que es "undefined"

    const navigate = useNavigate()

    return (
        <div>
            <h1>DetalleProducto {id}</h1>
            
            <Button text_button="volver"
            onClick={() => navigate(-1)}
            
            />
            {/* <CardDetail titulo={consola.titulo} /> */}
        </div>

    )
}

export default DetalleConsola