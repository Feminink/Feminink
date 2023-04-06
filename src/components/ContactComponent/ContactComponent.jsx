import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import  './ContactComponent.scss';

import { getArtists } from '../../store/Tattoo/actions';

// IMPORT FUNCIÖN DE CONTACTAR 
import { doContact } from '../../store/Tattoo/actions';

//IMPORT HOOKS
import { useDispatch, useSelector } from 'react-redux';

//IMPORT HOOK FORMIK


const ContactComponent = () => { 

const dispatch = useDispatch();

const {artists, loadingArtists} = useSelector((state)=>state.TattooReducer);
//  const {form} = useSelector((state)=>state.TattooReducer);

// USAR SETSTATE PARA RECOGER TODOS LOS NUEVOS VALORES DE LOS ESTADOS CON ESTA FUNCIÓN

 const handleChange  = (e) =>{
  const {name, value} = e.target;
  setUserDataForm({...userDataForm, [name]: value});
 };

useEffect(()=>{
  dispatch(getArtists())
},[])

const sendForm = () =>{
  dispatch(doContact({userDataForm}))
}

//AUNAR TODOS LOS ESTADOS EN UNO SOLO
const [userDataForm, setUserDataForm] = useState({ name: "", email: "", color: "", description: "", artist: ""});

//VARIABLE QUE ALMACENA LOS MENSAJES SI SE PRODUCEN ERRORES
// const validation = (values) => {
  // const errors = {};

  // if (!values.email) {
    // errors.email = "Required";
  // } else if (values.email.length < 4) {
    // errors.email = "Must be 5 characters or more";
  // }

  // if (!values.password) {
    // errors.password = "Required";
  // } else if (values.password.length < 8) {
    // errors.password = "Must be 8 characters or more";
  // } else if (values.password === "12345678") {
    // errors.password = "Must not be 12345678 !!!";
  // }

  // if (!values.repassword) {
    // errors.repassword = "Required";
  // } else if (values.repassword !== values.password) {
    // errors.repassword = "Second password doesn't match";
  // }

  // return errors;
// };


// const messageError = {
  // req: "Campo obligatorio",
  // name: "Este campo no admite caracteres especiales, ni numéricos",
  // email: "Debes introducir una dirección correcta",
  // description: "Longitud máxima 70 caracteres"
// }


if (loadingArtists){
  return (
    <p> "Loading"</p>
  )
}else{
       return(<section className='section__login section'>
          <form className='form'> 
            <fieldset className="form__container" >
              <label>Nombre </label>
              <input name="name" type="text" defaultValue={userDataForm.name} onChange={handleChange} placeholder= "Escribe tu nombre" ></input>
            </fieldset>

            <fieldset className="form__container">
              <label>Email </label>
              <input name="email" type="email" defaultValue={userDataForm.email} onChange={handleChange} placeholder= "Email de contacto" required></input>
              </fieldset>
  
            <fieldset className="form__container">
               <label>Descripción del tatuaje </label>
               <textarea  name="description" type="text" defaultValue={userDataForm.description} onChange={handleChange} placeholder= "Breve descripción del diseño" required></textarea>
            </fieldset>

            <fieldset className="form__container">
                  <label>Artista</label>
                     <select name="artist" value={userDataForm.artist.name} onChange={handleChange} required>
                        {artists?.map((artist) => {
                            return (
                              
                              <option name="artist" key={artist.id} defaultValue={userDataForm.artist.name}> {artist.name} </option>);
                          })}
                  </select>
            </fieldset>

            <fieldset className="form__container">
               <label>Color base </label>
               <input name="color" type="color" defaultValue={userDataForm} onChange={handleChange} required></input>
            </fieldset>

          </form>
          <button type="button" onClick={sendForm}> Enviar </button>
       </section>)

}  }
ContactComponent.propTypes = {};

ContactComponent.defaultProps = {};

export default ContactComponent;
