import React, { useState } from 'react';
import PropTypes from 'prop-types';
import  './ContactComponent.scss';

//IMPORT USESELECTOR
import { useDispatch, useSelector } from 'react-redux';

//IMPORT FUNCIÖN DOCONTACT
import {doContact} from '../../store/Tattoo/actions'

const ContactComponent = () => { 

const {form} = useSelector((state)=> state.TattooReducer);
  
//CREO ESTADOS PARA SETEAR VALOR DEL FORMULARIO
const [ name, setName] = useState("");
const [ age, setAge] = useState("");
const [ description, setDescription] = useState("");
const [ artist , setArtist] = useState("");
const [ design, setDesign] = useState("");

const dispatch = useDispatch();

const tryToContact = (e) =>{
  dispatch(doContact(e))
}
console.log(name, artist, description)
 return(  <section className="section__form">
   <form className='form'>
    <fieldset>
      <label>Nombre</label>
      <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Dinos cómo te llamas" id="name"></input>
    </fieldset>
{/* // EL CAMPO AGE COGE AMBOS VALORES, CAMBIAR Y TIENE QUE SER BOOLEANO */}
    <fieldset>
     <label>¿Tienes más de 18 años? </label>
       <input value={age} onChange={(e)=> setAge(e.target.value)} type="radio" id="ageYes" name="age" />Sí
      <input value={age} onChange={(e)=> setAge(e.target.value)} type="radio" id="ageNo"   name="age" />No
    </fieldset>

    <fieldset>
      <label>Descripción</label>
      <textarea value={description} onChange={(e)=> setDescription(e.target.value)} type="text" placeholder="Breve descripción del tatuaje" id="description" required="required" ></textarea>
    </fieldset>

    <fieldset>
      <label>Diseño</label>
      <select  value={artist} onChange={(e)=> setArtist(e.target.value)} name="artist" >
      {/* AQUÍ UNA VARIABLE CON CADA UNO DE LOS NOMBRES DE LOS USERS */}
        <option> Laura</option>
        <option> Ignacio</option>
        <option> Miriam </option>
      </select> 
    </fieldset>
  
    {/* <fieldset> */}
   {/* <label>Diseño</label> */}
   {/* <input value={design} onChange={(e)=> setDesign(e.target.value)} type="color" placeholder="Gama cromática" id="color" ></input>  */}
  {/* </fieldset> */}
  <input className='form__submit' onClick={()=> tryToContact()} type="submit"/>
  
   </form>
  </section>)
};

ContactComponent.propTypes = {};

ContactComponent.defaultProps = {};

export default ContactComponent;
