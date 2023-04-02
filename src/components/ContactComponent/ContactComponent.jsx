import React from 'react';
import PropTypes from 'prop-types';
import  './ContactComponent.scss';

const ContactComponent = () => (
  <section className="section__form">
   <form className='form'>
    <fieldset>
      <label>Nombre</label>
      <input type="text" placeholder="Dinos cómo te llamas" id="name"></input>
    </fieldset>

    <fieldset>
     <label>¿Tienes más de 18 años? </label>
     <label>Sí</label>  <input type="checkbox" id="ageYes" ></input>
     <label>No</label> <input type="checkbox" id="ageNo" ></input>
    </fieldset>

    <fieldset>
      <label>Descripción</label>
      <textarea type="text" placeholder="Breve descripción del tatuaje" id="description" required="required" ></textarea>
    </fieldset>

    <fieldset>
      <label>Diseño</label>
      <select type="image" placeholder="Inserta una imagen" id="image" alt="" src=''>
      {/* AQUÍ UNA VARIABLE CON CADA UNO DE LOS NOMBRES DE LOS USERS */}
        <option> Laura</option>
        <option> Ignacio</option>
        <option>Miriam </option>
      </select> 
    </fieldset>
  
    <fieldset>
      <label>Diseño</label>
      <input type="image" placeholder="Inserta una imagen" id="image" alt="" src=''></input> 
    </fieldset>
    <fieldset>
   <label>Diseño</label>
   <input type="color" placeholder="Gama cromática" id="color" ></input> 
 </fieldset>
   </form>
  </section>
);

ContactComponent.propTypes = {};

ContactComponent.defaultProps = {};

export default ContactComponent;
