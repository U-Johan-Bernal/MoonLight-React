// Librerias
import React from 'react';

// Componentes
import Encabezado from '../componentes/Encabezado';
import Navegacion from '../componentes/Navegacion';
import Informacion from '../componentes/Informacion';
import Productos from '../componentes/Productos';
import Contactanos from '../componentes/Contactenos';
import Redes from '../componentes/Redes_sociales';
import Footer from '../componentes/Footer';

// Estilos
import '../App.css';

export default function HomePage(){
    return(
        <div className="container">
            {/*<Boton />*/}
            <Encabezado />
            <Navegacion />
            <hr></hr>
            <Informacion />
            <Productos />
            <Contactanos />
            <Redes/>
            <Footer />
         </div>
    )
}