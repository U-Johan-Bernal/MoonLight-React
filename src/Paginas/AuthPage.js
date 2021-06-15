// Librerias
import React from 'react';

// Componentes
import Encabezado from '../componentes/Encabezado';
import Navegacion from '../componentes/Navegacion';
import Footer from '../componentes/Footer';
import Iniciar_Sesion from '../componentes/Iniciar_Sesion';

// Estilos
import '../App.css';


export default function AuthPage(){
    return(
        <div className="container">
          <Encabezado />
          <Navegacion />
          <hr></hr>
          {/* eslint-disable-next-line*/}
          <Iniciar_Sesion />
          <Footer/>
        </div>
    )
}