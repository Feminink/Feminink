import React, { useState } from 'react';
import PropTypes from 'prop-types';
import  './ContactComponent.scss';

// IMPORT FUNCIÖN DE CONTACTAR 
import { doContact } from '../../store/Tattoo/actions';
//IMPORT HOOKS
import { useDispatch, useSelector } from 'react-redux';


const ContactComponent = () => { 

const dispatch = useDispatch();

const [artists, loadingArtists] = useSelector((state)=>state.TattooReducer);
// const {form} = useSelector((state)=>state.TattooReducer);

//CREO ESTADOS PARA SETEAR VALORES DE LOS INPUTS
const [name, setName] = useState("");
const [description, setDescription] = useState("");
const [email, setEmail] = useState("");
const [color, setColor] = useState("#000000");
// const [artist, setArtist] = useState("artists");

const sendForm = () =>{
  dispatch(doContact({name: name, description: description}))
}

if (loadingArtists){
  return (
    <p> "Loading"</p>
  )
}else{
       return(<div className='div__contact'>
          <form>
            <fieldset>
              <label>Nombre </label>
              <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required></input>
            </fieldset>

            <fieldset>
              <label>Email </label>
              <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
            </fieldset>
  
            <fieldset>
               <label>Descripción del tatuaje </label>
               <textarea type="text" value={description} onChange={(e)=>setDescription(e.target.value)} required></textarea>
            </fieldset>

            <fieldset>
                <label>Artista </label>
                {artists?.map((artist) =>{

             return(     <select type="text" value={artist.name}  required>
                        <option  >artistas</option>
                        <option value={artist} >{artist.name}</option>
                        <option value={artist} >{artist.name}</option>
                        <option value={artist} >{artist.name}</option>
                        </select>)
                })}
            </fieldset>

            <fieldset>
               <label>Color base </label>
               <input type="color" value={color} onChange={(e)=>setColor(e.target.value)} required></input>
            </fieldset>

          </form>
          <button type="button" onClick={sendForm}> Enviar </button>
       </div>)

}  }
ContactComponent.propTypes = {};

ContactComponent.defaultProps = {};

export default ContactComponent;
