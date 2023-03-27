import React, { useState } from 'react';
import './App.css';
import Button from './Shared/Button';
import Usuarios from './views/UsuariosAPI/Usuarios';
import Rutas from './routes/Rutas';
import EcommerceProvedor from './context/EcommerceProvedor';

function App() {
  const [showUsers, setShowUsers] = useState(false) // ver/ocultar usuarios
  return (
    <div className="App text-danger">

      <EcommerceProvedor> {/* Este componente está pasandole data dentro de él a sus componentes hijos */}
        <Rutas />
      </EcommerceProvedor>
     


      {/* <h1 style={{ textAlign: 'center' }}>Usuarios desde API</h1>
      <div style={{ textAlign: 'center' }}>
        <Button onClick={() => setShowUsers(!showUsers)} // Esto hace que el boton cambie de TRUE a FALSE (tipo switch)
          text_button={showUsers ? "Oculta users" : "Mostrar users"} // Esto hace que cambie el nombre del boton
        />
        {showUsers && <Usuarios />}
      </div> */}
    </div>

  );
}

export default App;
