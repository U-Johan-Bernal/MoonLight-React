import React from "react";
import anuncio1 from '../imagenes/Producto1.jpeg'
import anuncio3 from '../imagenes/Producto2.jpeg'
import anuncio4 from '../imagenes/Producto3.jpeg'
import anuncio2 from '../imagenes/Producto4.jpeg'

// class component
class Productos extends React.Component {
  render() {
    return (
        <section className="productos-principales">
          <div>
              <img src={anuncio1} alt="producto1" ></img>
              <h3>TEAM Mom&Me </h3>
              <p>Un accesorio que puedes usar con tu hija. Un accesorio diferente y auténtico, de esos que son funcionales y que te hacen brillar.</p>
              <a href="/">Comprar <i className="fas fa-angle-double-right"></i></a>
          </div>

          <div>
                <img src={anuncio2} alt="producto2" ></img>
                <h3>Liston Minuatura.</h3>
                <p>Recordemos que fuimos niños y no olvidemos disfrutar de los colores de la vida como lo hacen ellos, llenemos nuestro mundo y su mundo de aventuras, pensamientos positivos. Cambiemos tiempos de angustia y dificultad por sonrisas.</p>
                <a href="/">Comprar <i className="fas fa-angle-double-right"></i></a>
          </div>

          <div>
                <img src={anuncio3} alt="producto3" ></img>
                <h3>TIC~TAC.</h3>
                <p>De las pinzas mas amigables con las cabecitas de ellas. Te daras cuenta que no notaran que las llevan puestas.</p>
                <a href="/">Comprar <i className="fas fa-angle-double-right"></i></a>
          </div>

          <div>
                <img src={anuncio4} alt="producto4" ></img>
                <h3>Coleritos Panda</h3>
                <p>Tener una niña es entrar a un mundo infinito donde los detalles nos enloquecen y la idea de verlos en ellas se convierte en experiencias.</p>
                <a href="/">Comprar <i className="fas fa-angle-double-right"></i></a>
          </div>

        </section>
    );
  }
} 
 
export default Productos;
