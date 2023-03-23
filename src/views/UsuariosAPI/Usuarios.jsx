import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Address from './Address'

const Usuarios = (props) => {


    const [data, setData] = useState([]) // para almacenar los datos de la API

    // peticion:
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setData(data));  //la respuesta JSON convertida en array JS se guarda en la var "data" dentro de la funcion "setData"
    }, []);


    return (
        <>
            {data.map(({ id, name, username, email, address }) => (
                <div key={id}>
                    <h2 style={{ color: 'red' }}>{name}</h2>
                    <h3>User: {username}</h3>
                    <h3>Mail: {email}</h3>
                    <br />
                    <Address addressItems={address} />
                </div>
            ))}
        </>
    )
}





export default Usuarios