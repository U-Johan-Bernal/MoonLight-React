import React, {useState,useEffect} from "react";
import  { Redirect } from 'react-router-dom';
import fire from '../Firebase-config';


const Iniciar_Sesion=()=> {
    
    const [user,setUser]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [emailerror,setEmailerror]=useState('');
    const [passworderror,setPassworderror]=useState('');
    const [cuenta,setcuenta]=useState(false);

    const clearInputs=()=>{
        setEmail('');
        setPassword('');
    }

    const clearErrors=()=>{
        setEmailerror('');
        setPassworderror('');
    }

    const registrarse=() =>{
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .catch((err)=>{
                switch (err.code){
                    
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailerror(err.message);
                        break;
                    case "auth/weak-password":
                        setPassworderror(err.message);
                        break;
                }
            });
            
    };

    const ingresar=() =>{
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email,password)
            .catch((err)=>{
                switch (err.code){
                    case "auth/invalid-email":
                    case "auth/user-disabled ":
                    case "auth/user-not-found ":
                        setEmailerror(err.message);
                        break;
                    case "auth/wrong-password":
                        setPassworderror(err.message);
                        break;
                }
            });
    };

    const authlistener=()=>{
        fire.auth().onAuthStateChanged(user=>{
            if (user){
                clearInputs();
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
                <div>
                    {user ? (
                        <Redirect to='/'/>
                    ):(
                        <form className="form_ini"> 
                        <h1>INICIAR SESIÓN</h1>
                        <div className="inset">
                            <div>
                                <label htmlFor="email">Correo Electrónico</label>
                                <input type="email" autoFocus required value={email} onChange={(event)=>setEmail(event.target.value)}/>
                                <p className="p-container">{emailerror}</p>
                            </div>

                            <div>
                                <label htmlFor="password">Contraseña</label>
                                <input type="password" required value={password}  onChange={(event)=>setPassword(event.target.value)}/>
                                <p className="p-container">{passworderror}</p>
                            </div>
                        </div>
                        <div>
                            {cuenta ? (
                                <>
                                <button onClick={ingresar}>Iniciar Sesion</button>
                                <p className="p-ini">No Tienes una cuenta ? <span onClick={()=>setcuenta(!cuenta)}>Registrarse</span></p>
                                </>
                            ):(
                                <>
                                <button onClick={registrarse}>Registrarse</button>
                                <p className="p-ini">Tienes una cuenta ? <span onClick={()=>setcuenta(!cuenta)}>Ingresar</span></p>
                                </>
                            )}
                        </div>
                        </form>
                    )}
        </div>
    )
}

export default Iniciar_Sesion;
