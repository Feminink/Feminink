import React, { useEffect} from 'react';
import PropTypes from 'prop-types';
import  './ContactComponent.scss';

import {getInfo} from '../../store/info/actions'

// IMPORT FUNCIÖN DE CONTACTAR 
import { doContact } from '../../store/Tattoo/actions';

//IMPORT HOOKS
import { useDispatch, useSelector } from 'react-redux';

//IMPORT HOOK FORMIK
import { useFormik } from 'formik';

const ContactComponent = () => { 

  useEffect(()=>{
    dispatch(getInfo())
  },[])
  
  const sendForm = () =>{
    dispatch(doContact())
  }
  const {info, loadinginfo} = useSelector((state)=> state.InfoReducer)
const dispatch = useDispatch();

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
    
  }

  const formik = useFormik({
    initial: {
     name: "",
     email: "",
     color: "",
     description: "",
     artist: "",
   },validate,
 
     onSubmit: (values)=>{
                 alert(JSON.stringify(values, null, 2));
               },
             });
 if(loadinginfo){
  return(
    <p>"Loading..."</p>
  )
 }
        return(
        <section className='section__login section'>
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
                         {info && info.artists?.map((artist) => {
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
 
  
};

ContactComponent.propTypes = {};

ContactComponent.defaultProps = {};

export default ContactComponent;
