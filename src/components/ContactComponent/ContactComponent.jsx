import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import  './ContactComponent.scss';

import { getArtists } from '../../store/Tattoo/actions';

// IMPORT FUNCIÖN DE CONTACTAR 
import { doContact } from '../../store/Tattoo/actions';
//IMPORT HOOKS
import { useDispatch, useSelector } from 'react-redux';


const ContactComponent = () => { 

const dispatch = useDispatch();

const {artists, loadingArtists} = useSelector((state)=>state.TattooReducer);
// const {form} = useSelector((state)=>state.TattooReducer);

//CREO ESTADOS PARA SETEAR VALORES DE LOS INPUTS
const [name, setName] = useState("");
const [description, setDescription] = useState("");
const [email, setEmail] = useState("");
const [color, setColor] = useState("#000000");
const [artist, setArtist] = useState("");

// COMPILAR TODOS LOS ESTADOS DENTRO DE UNO Y USAR SETSTATE
// const [userForm, setUserForm] = useState({ name: "", email: "", color: "", artists: "artist", description: ""});

useEffect(()=>{
  dispatch(getArtists())
},[])

const sendForm = () =>{
  dispatch(doContact({name: name, description: description, email: email, color: color, artist: artist}))
}

if (loadingArtists){
  return (
    <p> "Loading"</p>
  )
}else{
       return(<section className='section__login section container'>
          <form className='form'> 
            <fieldset className="form__container" >
              <label>Nombre </label>
              <input type="text" defaultValue={name} onChange={(e)=>setName(e.target.value)}  ></input>
            </fieldset>

            <fieldset className="form__container">
              <label>Email </label>
              <input type="email" defaultValue={email} onChange={(e)=>setEmail(e.target.value)} required></input>
              </fieldset>
  
            <fieldset className="form__container">
               <label>Descripción del tatuaje </label>
               <textarea type="text" defaultValue={description} onChange={(e)=>setDescription(e.target.value)} required></textarea>
            </fieldset>

            <fieldset className="form__container">
                  <label>Artista</label>
                     <select value={artist} onChange={(e) => setArtist(e.target.value)} required>
                        {artists?.map((artist) => {
                            return (
                              
                              <option key={artist.id} value={artist.name}> {artist.name} </option>);
                          })}
                  </select>
            </fieldset>

            <fieldset className="form__container">
               <label>Color base </label>
               <input type="color" defaultValue={color} onChange={(e)=>setColor(e.target.value)} required></input>
            </fieldset>

          </form>
          <button type="button" onClick={sendForm}> Enviar </button>
       </section>)

}  }
ContactComponent.propTypes = {};

ContactComponent.defaultProps = {};

export default ContactComponent;
