import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../Shared/Button'


const CardDetail = (props) => {
    const {img, titulo} = props

    const navigate = useNavigate()
  return (
    <div>
      <Button text_button="Atras" onClick={() => navigate(-1)}></Button> {/* Esto me hace volver UNO atras de mi historial */}
       <h1>{titulo}</h1>
        <img src={img} alt=''></img>
    </div>
  )
}

export default CardDetail