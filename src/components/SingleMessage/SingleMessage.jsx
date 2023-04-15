import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import  './SingleMessage.scss';

//IMPORT USESELECTOR
import {useDispatch, useSelector } from 'react-redux';

//IMPORT FONTAWESEOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faTrash, faQuoteLeft, faQuoteRight} from '@fortawesome/free-solid-svg-icons';

//IMPORT ACTION TO DELETE
import { deleteMessage } from '../../store/Tattoo/actions';

//IMPORT LINK
import { Link } from 'react-router-dom';
import mermaidn from '../../assets/images/mermaidn.png'

const SingleMessage = () => { 

   const dispatch = useDispatch(); 
   const {message}= useSelector((state)=>state.TattooReducer)

   const removeMessage = (message) =>{
      dispatch(deleteMessage(message.id))
   }

   return (  
      <> 
         <section className='section__single-message section'>
               <div className='single-message__header'>
                  <div className='container'>
                     <h2>Tus tatuajes molan un montón, {message.artist}, asi que vas a hacerle uno muy cool a {message.name}!</h2>
                  </div> 
               </div>
               <div className='single-message__body container'>
                  <div className='single-message__text'>
                     <h3>De: {message.name}</h3>
                     <h4>Para: {message.artist}</h4>
                     <h4 className=""> {message.email}</h4>
                     <p className="" ><FontAwesomeIcon icon={faQuoteLeft} size="lg" /> {message.description} <FontAwesomeIcon icon={faQuoteRight} size="lg" /></p>
                     <h4 className="" > <FontAwesomeIcon icon={faPalette} style={{color: message.color}} /> {message.color} </h4>    
                     <div className='single-message__links'>
                        <Link className='link' to="/profile">Go back</Link>
                        <Link className='link' to="/profile"><button onClick={(e)=>removeMessage(message)} className="delete"><FontAwesomeIcon className='delete__icon' icon={faTrash} /> Borrar</button></Link>

                     </div>
                  </div>
                  <div className='single-message__image'>
                     <img src={mermaidn} className="div__img__image" alt="mermaid"/> 
                  </div>
               </div>
               <div className='single-message__contact container'>
                  <h3>Envía un email a <a className='link' href={`mailto:"${message.email}"`} style={{color: message.color}}>{message.name}</a></h3>
               </div>
         </section> 
      </>
   )
};

SingleMessage.propTypes = {};

SingleMessage.defaultProps = {};

export default SingleMessage;
