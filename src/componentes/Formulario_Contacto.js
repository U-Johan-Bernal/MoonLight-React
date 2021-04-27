import React from "react";

// class component
class Formulario_contactar extends React.Component {
  render() {
    return (
        <div className="contact_form">

            <div className="formulario" >
                <h1>Formulario de contacto</h1>
				<h3>Escríbenos y en breve nos pondremos en contacto contigo.</h3>
                
                <form >

                    <p>
                        <label>Nombre
						<span > *</span>
						</label>
						<input type="text" id="nombre" required="obligatorio" placeholder="Escribe tu nombre"/>
                    </p>

                    <p>
						<label>Teléfono
                        <span> *</span>
						</label>
						<input type="tel" id="telefono" required="obligatorio" placeholder="Escribe tu teléfono"/>
					</p>		

                    <p>
						<label >Mensaje</label>                     
                        <textarea  id="mensaje"  placeholder="Deja aquí tu comentario..."/> 
                    </p>	  								
							
					<button type="submit" name="enviar_formulario" id="enviar"><p>Enviar</p></button>

                    <p className="aviso">
						<span> * </span>Los campos son obligatorios.
					</p>			
                </form>
                
                
            </div>    
        </div>
    );
  }
} 
 
export default Formulario_contactar;


