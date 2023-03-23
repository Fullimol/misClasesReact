// 3°de3 Aca creo la ultima view donde se muestra más data (traida de la API), con respecto al boton <Link> que se haya cliqueado,
// tomando el id con "useParams" se lo agrega a la fetch para hacer una nueva peticion.
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../../Shared/Button'


const InfoPersonaje = (props) => {
  const navigate = useNavigate()

  const { id } = useParams() // ESTO VÁ EN DONDE SE VA A VER EL DETALLE DE CADA OBJETO... osea donde este la url con "/:id"

  const [character, setCharacter] = useState([]); // para almacenar los datos de la API
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((r) => r.json())
      .then((d) => setCharacter(d));
  }, []);

  const { name, image, species, gender, status, created } = character
  

  return (
    <div>
      <h1>INFORMACIÓN</h1>
      <Button text_button="volver" onClick={() => navigate(-1)}></Button> {/* Esto me hace volver UNO atras de mi historial */}
      <br />
      <br />

      <div>
        <h1>"{name}"</h1>
        <img src={image}></img>
        <h1>id: {id}</h1>
        <h1>Estado: {status}</h1>
        <h1>Especie: {species}</h1>
        <h1>Genero: {gender}</h1>
        <h1>Creado: {created}</h1>
      </div>
    </div>
  )
}

export default InfoPersonaje



