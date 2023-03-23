import React from 'react'

const Address = (props) => {
//desestructuro los datos que hay en "address" de la API para utilizarlos sin usar el punto (ej: adress.street) 
    const { addressItems: { street, suite, city, zupcode, geo: { lat, long } } } = props

    return (
        <div>
            <span>Address</span>
            <ul>
                <li>Street: {street}</li>
                <li>Suite: {suite}</li>
                <li>City: {city}</li>
                <li>Zipcode: {zupcode}</li>
                <li>
                    <ul>
                        <li>Lat: {lat}</li>
                        <li>Long: {long}</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Address