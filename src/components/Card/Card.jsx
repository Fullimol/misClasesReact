import React from 'react'
import Button from '../../Shared/Button'
import { Link } from 'react-router-dom'
import Counter from '../Counter/Counter'

const Card = (props) => {
    const { img, titulo, descripcion, boton_nombre, boton_className, id, precio, link_to, link_boton, quitar_boton, contador, onClick } = props
    const imgError = "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"

    return (
        <div className="card container" style={{ width: "18rem" }}>
            <img src={img || imgError} className="card-img-top h-50" alt="..." />
            <div className="card-body text-center">
                <h3 className="card-title">{titulo || '(sin titulo)'}</h3>
                <p className="card-text">{descripcion || '(sin descripcion)'}</p>

                {precio ? <h4 className="card-text">${precio}</h4> : null}
                {!link_to || <Link to={`${link_to}${id}`} className='btn btn-info'>{link_boton}</Link>} {/* por props hay que pasar la url de la ruta, si no se escirbe nada el boton no aparece */}

                {!contador || <Counter producto={{ img, titulo, descripcion, id, precio }} />} {/* le paso por la prop "producto" del <Counter/> cada valor que le puse a la props <Card/> en el HOME */}

                {quitar_boton || <Button className={!boton_className || "btn btn-primary"} text_button={boton_nombre} onClick={onClick}></Button>}
            </div>
        </div>
    )
}

export default Card