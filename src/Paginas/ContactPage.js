// Librerias
import React from 'react';

// Componentes
import Encabezado from '../componentes/Encabezado';
import Navegacion from '../componentes/Navegacion';
import Footer from '../componentes/Footer';
import Encuesta from '../componentes/Formulario_Contacto';

// Estilos
import '../App.css';

export default function ContacPage(){
    return(
        <div className="container">
          {/*<Boton />*/}
          <Encabezado />
          <Navegacion />
          <hr></hr>
          <Encuesta />
          <Footer/>
        </div>
    )
}