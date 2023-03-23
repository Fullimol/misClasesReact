// 1°de3 Hago la vista donde se traen todos los personajes de la API, esa data luego se muestra en el componente creado en la parte 2...
// ACA TRAIGO LA DATA DE LA FETCH Y LE MUESTRO EN LOS PROPS DE "TarjetasPersonajes"
import React, { useEffect, useState } from 'react'
import TarjetasPersonajes from '../../components/Personajes/TarjetasPersonajes';

const RickAndMorty = () => {

    const [characters, setCharacters] = useState([]); // para almacenar los datos de la API

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(data => setCharacters(data.results))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>"Rick & Morty" Characters</h1>
            <div className='container-fluid d-flex p-3'>
            {characters.map(({ id, name, status, species, image }) => (
                <div key={id}>
                    <TarjetasPersonajes
                        img={image}
                        titulo={name}
                        estado={status}
                        especie={species}
                        id={id}
                    />
                </div>
            ))}
            </div>
            
        </div>
    );
}

export default RickAndMorty