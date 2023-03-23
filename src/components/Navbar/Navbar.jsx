import React from 'react'
import Dropdown from './Dropdown'
import NavbarItem from './NavbarItem'
import SearchBar from './SearchBar'

const navBar = (porps) => {

    const { nombreLogo, navbar_items, search_bar, dropdown_show, dropdown_name, drop_items } = porps

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{nombreLogo}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                        {navbar_items?.map(({ nombre, path }) => (
                            <NavbarItem key={nombre} nombre_item={nombre} path={path} />))} {/* recorre el array e imprime cada item del mismo */}

                        {dropdown_show && <Dropdown list_arr={drop_items} dropdown_name={dropdown_name} />}
                    </ul>
                    {search_bar && <SearchBar />} {/* si "search_bar" no es TRUE, no mostres el contenedor */}
                </div>
            </div>
        </nav>
    )
}

export default navBar