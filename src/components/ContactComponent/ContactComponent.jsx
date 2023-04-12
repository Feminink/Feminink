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
    } else if (values.name.length < 3) {
      errors.name = 'Nombres de dos letras hay, pero pocos';
    } else if (values.name) {
      errors.name = `Wild ${values.name} for us`;
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
      color: '#000000',
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
    <section className='section__contact section'>
        <form onSubmit={formik.handleSubmit} className='form'> 
          <header className='form__title h2'> 
            <h2>Ponte en contacto con FemininK </h2>
          </header>
          <div className='form__container'>
            <div className="form__group" >
              <input className='form__input'
                name="name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder= " "
                required
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="error">{formik.errors.name}</div>
              ) : null}
              <label className='form__label'>Nombre </label>
              <span className='form__line'></span>
            </div>
            <div className="form__group">
              <input className='form__input'
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder= " "
                required
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
              <label className='form__label'>Email </label>
              <span className='form__line'></span>
            </div>
            <div className="form__group">
              <textarea className='form__input'
                name="description"
                type="text"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder= " "
                required>
              </textarea>
              <label className='form__label'>Descripción del tatuaje</label>
              <span className='form__line'></span>
            </div>
            <div className="form__group">
               <select className='form__input'
                name="artist"
                value={formik.values.artist}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required>
                {info && info.admins?.map((member) => {
                  return (
                    <option key={member.id} value={member.name}>{member.name}</option>
                  );
                })}
               </select>
               <label className='form__label'>Artista</label>
               <span className='form__line'></span>
            </div>
            <div className="form__group">
                <input 
                  onChange={formik.handleChange} 
                  className='form__color'
                  name="color"
                  type="color"
                  onBlur={formik.handleBlur}
                  value={formik.values.color} 
                  required/>
                <label className='form__label'>Color base</label>
                <span className='form__line'></span>
            </div>
            <button className='form__submit' type="reset" onClick={sendForm} noValidate>Enviar</button>
          </div>
        </form>
    </section>
  );
};

ContactComponent.propTypes = {};

ContactComponent.defaultProps = {};

export default ContactComponent;