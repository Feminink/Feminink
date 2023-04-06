import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import  './ContactComponent.scss';

import { getArtists } from '../../store/Tattoo/actions';

// IMPORT FUNCIÖN DE CONTACTAR 
import { doContact } from '../../store/Tattoo/actions';

//IMPORT HOOKS
import { useDispatch, useSelector } from 'react-redux';

//IMPORT HOOK FORMIK
import { useFormik } from 'formik';

const ContactComponent = () => { 
  useEffect(()=>{
    dispatch(getArtists())
  },[])
  
  const sendForm = () =>{
    dispatch(doContact())
  }
  
const dispatch = useDispatch();

// const {artists, loadingArtists} = useSelector((state)=>state.TattooReducer);

// USAR SETSTATE PARA RECOGER TODOS LOS NUEVOS VALORES DE LOS ESTADOS CON ESTA FUNCIÓN

//  const handleChange  = (e) =>{
  // const {name, value} = e.target;
  // setUserDataForm({...userDataForm, [name]: value});
//  };

function validate (values) {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (values.email.length < 4) {
    errors.email = "Must be 5 characters or more";
  }

  if (!values.name) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be 8 characters or more";
  } else if (values.password === "12345678") {
    errors.password = "Must not be 12345678 !!!";
  }

  if (!values.description) {
    errors.repassword = "Required";
  } else if (values.repassword.length < 50) {
    errors.repassword = "Máximo 50 caracteres";
  }

  return errors;
}};


const formik = useFormik({ initial: {name: "", email: "", color: "", description: "", artist: ""},
              onSubmit: (values)=>{
                alert(JSON.stringify(values, null, 2));
              }
});

//AUNAR TODOS LOS ESTADOS EN UNO SOLO
// const [userDataForm, setUserDataForm] = useState({ name: "", email: "", color: "", description: "", artist: ""});

//VARIABLE QUE ALMACENA LOS MENSAJES SI SE PRODUCEN ERRORES

if (loadingInfo){
  return (
    <p> "Loading"</p>
  )
}else{
       return(<section className='section__login section'>
          <form onSubmit={formik.handleSubmit} className='form'> 
          <h1>Formulario de contacto: </h1>
            <fieldset className="form__container" >
              <label>Nombre </label>
              <input name="name" type="text" value={formik.values.name} onChange={formik.handleChange} placeholder= "Escribe tu nombre" required></input>
            </fieldset>

            <fieldset className="form__container">
              <label>Email </label>
              <input name="email" type="email" value={formik.values.email} onChange={formik.handleChange} placeholder= "Email de contacto" required></input>
              {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                  ) : null}
              </fieldset>
  
            <fieldset className="form__container">
               <label>Descripción del tatuaje </label>
               <textarea  name="description" type="text" value={formik.values.description} onChange={formik.handleChange} placeholder= "Breve descripción del diseño" required></textarea>
            </fieldset>

            <fieldset className="form__container">
                  <label>Artista</label>
                     <select name="artist" value={formik.values.artist} onChange={formik.handleChange} required>
                        {artists?.map((artist) => {
                            return (
                              
                              <option name="artist" key={artist.id} value={formik.values.artist}> {artist.name} </option>);
                          })}
                  </select>
            </fieldset>

            <fieldset className="form__container">
               <label>Color base </label>
               <input name="color" type="color" value={formik.values.color} onChange={formik.handleChange} required></input>
            </fieldset>

          </form>
          <button type="submit" onClick={sendForm}> Enviar </button>
       </section>)

}  
ContactComponent.propTypes = {};

ContactComponent.defaultProps = {};

export default ContactComponent;
