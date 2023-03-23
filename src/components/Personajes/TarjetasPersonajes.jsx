//2°de3 aca creo la "tarjeta" de cómo quiero que se va la info de cada objeto traido de la API. Además, le agrego un <Link/> para ir a otra "view" con más detalle a mostrar
// Aca muestro y organizo la info que se ve en las tarjetas, con un boton que va al detalle de cada uno
import React from 'react'
import { Link } from 'react-router-dom'

const TarjetasPersonajes = (props) => {
    const { img, titulo, estado, especie, id } = props
    const imgError = "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"

    return (
        <div className="container">
            <div className='col card' style={{ width: "18rem" }}>
                <div className="row" />
                    <img className="card-img-top" alt="..."
                        src={img || imgError}
                    />
                    <div className="card-body">
                        <p>id: {id}</p>
                        <h3>{titulo || "(sin informacion)"}</h3>
                        <h5>{`Estado: ${estado}` || "(sin informacion)"}</h5>
                        <h5>{`Especie: ${especie}` || "(sin informacion)"}</h5>

                        <Link to={`/info/${id}`} className='btn btn-info'>+Info</Link>
                    </div>
                </div>
                <br />
            </div>
    )
}

export default TarjetasPersonajes