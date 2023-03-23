import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

const MainLayoutRoutes = (props) => {
    const { navbar_items, nombre_logo, search_bar, dropdown_show, dropdown_name } = props
    return (
        <>
            <Navbar nombreLogo={ nombre_logo } 
                search_bar={search_bar}
                dropdown_show={dropdown_show}
                dropdown_name={dropdown_name}
                // Si no pongo ningun "navbar_items" como props, entonces agrega el que está acá"
                navbar_items={navbar_items || [
                    { nombre: 'Home', path: '/' },
                    { nombre: 'CARRITO', path: '/carrito' },
                    { nombre: 'Tarjetas', path: '/tarjetas' },
                    { nombre: 'Basquet', path: '/basquet' },
                    { nombre: 'API', path: '/api'}
                ]}
                drop_items={[
                    { nombre: 'Counter', path: '/counter' },
                    { nombre: 'Login', path: '/login' }
                ]}
            />

            <Outlet />
        </>
    )
}

export default MainLayoutRoutes