import React from "react";


// class component
class Footer extends React.Component {
  render() {
    return (
      
        <footer className="footer-links">
        <div className="footer-container">
            <ul>

                <h3 className="titulo">MOONLIGHT</h3>
                
                <p>Cada diseño ha sido pensado en tonalidades y tendencias, hemos</p>
                <p>dedicado amor y tiempo para ensañar modelos, probar colores,</p>
                <p>durabilidad, calidad y sobre todo el gusto de ustedes las mamás.</p>

            </ul>
        
            <ul>
                <h3>INFORMACIÓN</h3>
                <li>
                    <a href="/">Términos y Condiciones</a>
                </li>
                <li>
                    <a href="/">Política de Privacidad</a>
                </li>
                <li>
                    <a href="/">Políticas de Devolución</a>
                </li>
                <li>
                    <a href="/Contacto">Contacto</a>
                </li>
            </ul>
           
        </div>
        <p className="copyright">Todos los derechos reservados Reservados 2021 &copy;</p>
        </footer>
    );
  }
} 
 
export default Footer;

