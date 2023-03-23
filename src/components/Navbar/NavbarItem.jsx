import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarItem = (props) => {
    const { nombre_item, path } = props

    return (
        <li className="nav-item">
            <NavLink className={'nav-link '} to={path}>
                {nombre_item}
            </NavLink>
        </li>
    )
}

export default NavbarItem