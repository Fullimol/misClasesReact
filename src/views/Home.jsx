import React, { useContext } from 'react'
import Card from '../components/Card/Card'
import { EcommerceContext } from '../context/EcommerceProvedor'

const Home = () => {
  const { productos, agregarAlCarrito } = useContext(EcommerceContext) //Con este Hook le decimos que vamos a tomar los valores X dentro del componente "EcommerceContext"

  return (

    <>
      <h4>Prueba useCreate / useContext</h4>
      <div className='container-fluid d-flex p-3'>

        {productos?.map(({ id, imagen, titulo, precio }) => (
          <Card id={id}
            key={id}
            img={imagen}
            titulo={titulo}
            precio={precio}
            descripcion="Nuevo"
            No_link
            link_to="/detalleproducto/"
            link_boton="+Info"

            contador
            quitar_boton
          // boton_className
          // boton_nombre="Agregar al Carrito"
          // onClick={() => agregarAlCarrito({ titulo, precio, imagen, id })} // al hacer click guarda la data que pido en el state
          />
        ))}

      </div>
    </>

  )

}

export default Home