import React from "react";
import logo_nav from '../imagenes/logo_nav.jpg';


// class component
class Navegacion extends React.Component {
  render() {
    return (
            <nav className="navegacion">
                <img src={logo_nav} alt="Logo" className="navegacion-logo"></img>
                <ul className="navegacion-menu">
                <li>
                    <a href="/">Iniciar Sesión</a>
                </li>
                <li>
                    <a href="https://www.canva.com/design/DAEZsPBqsaA/VU7Pg3r5CagSOZr2kJGoTg/view?utm_content=DAEZsPBqsaA&utm_campaign=designshare&utm_medium=link&utm_source=vieser#2">Catálogo</a>
                </li>
                <li>
                    <a href="/">Sobre Nosotros</a>
                </li>
                <li>
                    <a href="/Contacto">Contacto</a>
                </li>
                <li>
                    <a href="/">PQR</a>
                </li>
                </ul>
                <ul className="navegacion-menu-derecha">
                <li>
                    <a href="/">
                        <i className="fas fa-search"></i>
                    </a>
                </li>
            </ul>
            </nav>
    );
  }
}



 
export default Navegacion;