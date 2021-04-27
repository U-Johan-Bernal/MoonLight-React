//Librerias
import { BrowserRouter as Router, Route} from 'react-router-dom'

// Componentes
import Encabezado from './componentes/Encabezado';
import Navegacion from './componentes/Navegacion';
import Informacion from './componentes/Informacion';
import Productos from './componentes/Productos';
import Contactanos from './componentes/Contactenos';
import Redes from './componentes/Redes_sociales';
import Footer from './componentes/Footer';
import Boton from './componentes/Boton';
import Encuesta from './componentes/Formulario_Contacto';

// Estilos
import './App.css';


function App() {
  return (
    <div>
      <Router>

        {/* Página Home */}

        <Route exact path="/" render={()=>{
            return<div className="container">
              <Boton />
              <Encabezado />
              <Navegacion />
              <hr></hr>
              <Informacion />
              <Productos />
              <Contactanos />
              <Redes/>
              <Footer />
            </div>
        }}></Route>

        {/* Página Contacto */}

        <Route path="/contacto" render={()=>{
          return<div className="container">
          <Boton />
          <Encabezado />
          <Navegacion />
          <hr></hr>
          <form/>
          <Encuesta />
          <Footer/>
        </div>
        
        }}></Route>

        {/* Página Iniciar Sesión */}


      </Router>
      
      
     </div>
    
  );
}

export default App;
