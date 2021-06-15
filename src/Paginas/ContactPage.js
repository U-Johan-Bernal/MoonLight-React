// Librerias
import React,{useState,useEffect} from 'react';
import fire from '../Firebase-config'

// Componentes
import Encabezado from '../componentes/Encabezado';
import Navegacion from '../componentes/Navegacion';
import Footer from '../componentes/Footer';
import Encuesta from '../componentes/Formulario_Contacto';

// Estilos
import '../App.css';
import Navegacion_ini from '../componentes/Navegacion_ini';

export default function ContacPage(){
  const [user,setUser]=useState('');
  const authlistener=()=>{
      fire.auth().onAuthStateChanged(user=>{
          if (user){
              setUser(user);
          }else{
              setUser("");
          }
      })
  }

  useEffect(()=>{
     authlistener(); 
  },[]);
    return(
      
        <div className="container">
          {user ?(
            <>
            <Encabezado />
            {/*eslint-disable-next-line*/ }
            <Navegacion_ini />
            <hr></hr>
            <Encuesta />
            <Footer/>
            </>
          ):(
          <><Encabezado />
          <Navegacion />
          <hr></hr>
          <Encuesta />
          <Footer/>
          </>
          )}
        </div>
    )
}