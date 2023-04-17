import React, { useState } from 'react';
import FormularioDinamico from '../components/Formulario/FormularioDinamico';
import Button from '../Shared/Button';
import { datosLogin, datosLoginInputs, datosRegistro, datosRegistroInputs } from '../components/Formulario/Config'; // importo los datos para el form Dinamico en vez de poner tantas lineas de codigo en "app.js"

const Login = () => {
    //Formulario Dinamico
    const [showLogin, setShowLogin] = useState(false)

    // Es la funcion que se ejecuta al enviar el Formulario Dinamico. 
    const handleSubmit = (e, data) => {
        e.preventDefault(); //evitamos que envíe la info y recargue la página
        console.log(data)
    }
    return (
        <div>
            <Button onClick={() => setShowLogin(!showLogin)} // Esto hace que el boton cambie de TRUE a FALSE (tipo switch)
                text_button={showLogin ? "ir a Login" : "ir a Register"} // Esto hace que cambie el nombre del boton
            />

            <FormularioDinamico
                onSubmit={handleSubmit}
                formTitle={!showLogin ? "Login" : "Register"}
                initialState={!showLogin ? datosLogin : datosRegistro}
                inputs={!showLogin ? datosLoginInputs : datosRegistroInputs} />
        </div>
    )
}
//       ****  TAMBIEN SE PUEDE HACER ASÍ EL FORM DINAMICO: ****
// {!showLogin ? (
//     <FormularioDinamico
//         onSubmit={handleSubmit}
//         formTitle={"Formulario DINAMICO (LOGIN)"}
//         initialState={datosLogin}
//         inputs={datosLoginInputs} />) : (
//     <FormularioDinamico
//         onSubmit={handleSubmit}
//         formTitle={"Formulario DINAMICO (REGISTER)"}
//         initialState={datosLogin}
//         inputs={datosRegistroInputs} />
// )}

export default Login