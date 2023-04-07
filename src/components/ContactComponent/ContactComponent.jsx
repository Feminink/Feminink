import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './ContactComponent.scss';

import { getInfo } from '../../store/info/actions';

// IMPORT FUNCIÖN DE CONTACTAR
import { doContact } from '../../store/Tattoo/actions';

//IMPORT HOOKS
import { useDispatch, useSelector } from 'react-redux';

//IMPORT HOOK FORMIK
import { useFormik } from 'formik';

const ContactComponent = () => {
  const dispatch = useDispatch();
  const { info, loadinginfo } = useSelector((state) => state.InfoReducer);

  useEffect(() => {
    dispatch(getInfo());
  }, []);

  const sendForm = () => {
    if (
      formik.values.name &&
      formik.values.email &&
      formik.values.description &&
      formik.values.artist &&
      formik.values.color
    ) {
      dispatch(
        doContact({
          name: formik.values.name,
          email: formik.values.email,
          description: formik.values.description,
          artist: formik.values.artist,
          color: formik.values.color,
        })
      );
    }
  };

  function validate(values) {
    const errors = {};

    // ERROR NAME
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length < 8) {
      errors.name = 'Must be 8 characters or more';
    } else if (values.name === '12345678') {
      errors.name = 'Must not be 12345678 !!!';
    }

    // ERROR EMAIL
    if (!values.email) {
      errors.email = 'Required';
    } else if (values.email.length < 5) {
      errors.email = 'Must be 5 characters or more';
    }

    // ERROR DESCRIPTION
    if (!values.description) {
      errors.description = 'Required';
    } else if (values.description.length > 50) {
      errors.description = 'Máximo 50 caracteres';
    }
    return errors;
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      description: '',
      color: '',
      artist: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  if(loadinginfo){
    return(
      <p>"Loading..."</p>
    )
  }
        
  return (
    <section className='section__login section container'>
      <form onSubmit={formik.handleSubmit} className='form'> 
        <h1>Formulario de contacto: </h1>
        <fieldset className="form__container" >
          <label>Nombre </label>
          <input name="name" type="text" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder= "Escribe tu nombre" required></input>
        </fieldset>
  
        <fieldset className="form__container">
          <label>Email </label>
          <input name="email" type="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder= "Email de contacto" required></input>
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </fieldset>
  
        <fieldset className="form__container">
          <label>Descripción del tatuaje </label>
          <textarea name="description" type="text" value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder= "Breve descripción del diseño" required></textarea>
        </fieldset>
  
        <fieldset className="form__container">
          <label>Artista</label>
          <select name="artist" value={formik.values.artist} onChange={formik.handleChange} onBlur={formik.handleBlur} required>
            {info && info.admins?.map((member) => {
              return (
                <option key={member.id} value={member.name}>{member.name}</option>
              );
            })}
          </select>
        </fieldset>
  
        <fieldset className="form__container">
          <label>Color base </label>
          <input name="color" type="color" value={formik.values.color} onChange={formik.handleChange} required></input>
        </fieldset>
  
        <button type="submit" onClick={sendForm}> Enviar </button>
      </form>
    </section>
  );
};

ContactComponent.propTypes = {};

ContactComponent.defaultProps = {};

export default ContactComponent;