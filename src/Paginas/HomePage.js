// Librerias
import React, {useState,useEffect} from "react";
import fire from '../Firebase-config'

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
import Navegacion_ini from "../componentes/Navegacion_ini";

function HomePage(){
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
            {/*<Boton />*/}
            <Encabezado />
            {/*eslint-disable-next-line*/ }
            <Navegacion_ini />
            <hr></hr>
            <Informacion />
            <Productos />
            <Contactanos />
            <Redes/>
            <Footer />
            </>
        ):(
            <>
            {/*<Boton />*/}
            <Encabezado />
            <Navegacion />
            <hr></hr>
            <Informacion />
            <Productos />
            <Contactanos />
            <Redes/>
            <Footer />
            </>
        )}
        </div>
    )
}

export default HomePage;