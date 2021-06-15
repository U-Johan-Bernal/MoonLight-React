// Librerias
import React from 'react';

// Componentes
import Encabezado from '../componentes/Encabezado';
import Navegacion from '../componentes/Navegacion_ini';
import Informacion from '../componentes/Informacion';
import Productos from '../componentes/Productos';
import Contactanos from '../componentes/Contactenos';
import Redes from '../componentes/Redes_sociales';
import Footer from '../componentes/Footer';

// Estilos
import '../App.css';

export default function HomeAuthPage(){
    return(
        <div className="container">
            {/*<Boton />*/}
            <Encabezado />
            <Navegacion />
            <h1>BIENVENIDO</h1>
            <hr></hr>
            <Informacion />
            <Productos />
            <Contactanos />
            <Redes/>
            <Footer />
         </div>
    )
}