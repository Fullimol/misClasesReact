import React, { useState } from 'react';
import ProductContainer from "../layout/ProductContainer"
import Container from '../layout/Container';
import Button from '../Shared/Button';



const productos = () => {
  const [showCard, setShowCard] = useState(true)  // ver/ocultar Cards

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Button onClick={() => setShowCard(!showCard)} // Esto hace que el boton cambie de TRUE a FALSE (tipo switch)
          text_button={showCard ? "Oculta cards" : "Mostrar cards"} // Esto hace que cambie el nombre del boton
        />
      </div>
      <h1 className='text-center'>Tarjetas</h1>
      {showCard &&
        <Container dFlex>
          <ProductContainer />
        </Container>}
    </>
  )
}

export default productos