import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Counter from '../components/Counter/Counter'
import Home from '../views/Home'
import Usuarios from '../views/UsuariosAPI/Usuarios';
import Login from '../views/Login';
import Tarjetas from '../views/Tarjetas';
import DetailPages from '../views/DetailPages';
import RickAndMorty from '../views/RickAPI/RickAndMorty';
import InfoPersonaje from '../components/Personajes/InfoPersonaje';
import MainLayoutRoutes from './layout/MainLayoutRoutes';
import Carrito from '../views/Carrito';
import DetalleProducto from '../views/DetalleProducto';


const Rutas = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayoutRoutes 
                nombre_logo="CursoReactJS"
                search_bar={true}
                dropdown_show={true}
                dropdown_name={"MAS+"}/>}>
                    <Route index element={<Home />} />
                    <Route path='carrito' element={<Carrito/>} />
                    <Route path='detalleproducto/:id' element={<DetalleProducto/>} />
                    <Route path='info/:id' element={<InfoPersonaje />} />

                    <Route path='tarjetas' element={<Tarjetas />} />
                    <Route path='detail/:id' element={<DetailPages />} />

                    <Route path='counter' element={<Counter />} />
                    <Route path='login' element={<Login />} />

                    {/* Acá empieza el navbar de basquet */}
                        <Route path='basquet' 
                        element={<MainLayoutRoutes 
                        dropdown_show={false}
                        navbar_items={[
                            {nombre: 'Remeras', path: 'remeras'},
                            {nombre: 'Pelotas', path: 'pelotas'},
                            {nombre: 'Zapatillas', path: 'zapatillas'}
                        ]}/>}>

                            <Route index element={<h2>HOME del Basquet</h2>}/>
                            <Route path='remeras' element={<h2>Seccion REMERAS</h2>}/>
                            <Route path='pelotas' element={<h2>Seccion PELOTAS</h2>}/>
                            <Route path='zapatillas' element={<h2>Seccion ZAPATILLAS</h2>}/>

                        </Route>
                    {/* Acá termina el navbar de basquet */}
                    {/* Acá empieza el navbar de Tenis */}
                    <Route path='/api' element={<MainLayoutRoutes
                    navbar_items={[
                        {nombre: 'Rick', path:'rick&morty'},
                        {nombre: 'Usuarios', path:'usuarios'}
                    ]}
                    />}>
                        <Route index element={<h1>Home de API</h1>}/>
                        <Route path='rick&morty' element={<RickAndMorty />}/>
                        <Route path='usuarios' element={<Usuarios />}/>

                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas










/// BACKUP

// import React from 'react';
// import Navbar from '../components/Navbar/Navbar';

// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Counter from '../components/Counter/Counter'
// import Home from '../views/Home'
// import Usuarios from '../views/UsuariosAPI/Usuarios';
// import Login from '../views/Login';
// import Productos from '../views/Productos';
// import DetailPages from '../views/DetailPages';
// import RickAndMorty from '../views/RickAPI/RickAndMorty';
// import InfoPersonaje from '../components/Personajes/InfoPersonaje';


// //Navbar:
// const nombre_items = [
//     { nombre: 'Home', path: '/' },
//     { nombre: 'Usuarios', path: '/usuarios' },
//     { nombre: 'API Rick', path: '/rick&morty' },
//     { nombre: 'Productos', path: '/productos' }]
// const Drop_items = [
//     { nombre: 'Counter', path: '/counter' },
//     { nombre: 'Login', path: '/login' }]

// const Rutas = () => {

//     return (
//         <BrowserRouter>
//             <Navbar navbar_items={nombre_items}
//                 nombreLogo={"CursoReactJS"}
//                 search_bar={true}
//                 dropdown_show={true}
//                 dropdown_name={"MÁS"}
//                 drop_items={Drop_items} />

//             <Routes>
//                 <Route path='/' element={<Home />} />
//                 <Route path='/rick&morty' element={<RickAndMorty />}/>
//                 <Route path='/info/:id' element={<InfoPersonaje />} />

//                 <Route path='/usuarios' element={<Usuarios />} />
//                 <Route path='/productos' element={<Productos />} />
//                 <Route path='/detail/:id' element={<DetailPages />} />

//                 <Route path='/counter' element={<Counter />} />
//                 <Route path='/login' element={<Login />} />
//             </Routes>
//         </BrowserRouter>
//     )
// }

// export default Rutas