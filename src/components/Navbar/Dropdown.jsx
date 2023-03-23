import React from 'react'
import NavbarItem from './NavbarItem'

const Dropdown = (props) => {

    const { dropdown_name, list_arr } = props

    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {dropdown_name}
            </a>
            <ul className="dropdown-menu" aria-labelledby='navbarDropdown'>

                {/* ((si no existe ningún array, no se rompe React)) && ((recorre el array e imprime cada item del mismo)) */}
                {list_arr?.length > 0 && list_arr.map(({ nombre, path }, index) => (<NavbarItem nombre_item={nombre} path={path} key={index} />))}

            </ul>
        </li>
    )
}

export default Dropdown
