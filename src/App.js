// Componentes
import AppRouter from './Routers/AppRouter'

// Estilos
import './App.css';
import{
  useFirebaseApp
}from 'reactfire';

function App() {
  const firebase=useFirebaseApp();
  console.log(firebase);
  return (
    <div>
      <AppRouter/>   
    </div>
    
  );
}

export default App;
