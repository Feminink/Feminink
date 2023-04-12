import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import  './SingleMessage.scss';

//IMPORT USESELECTOR
import {useDispatch, useSelector } from 'react-redux';

//IMPORT FONTAWESEOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faTrash} from '@fortawesome/free-solid-svg-icons';

//IMPORT ACTION TO DELETE
import { deleteMessage } from '../../store/Tattoo/actions';

//IMPORT LINK
import { Link } from 'react-router-dom';
import mermaidn from '../../assets/images/mermaidn.png'

const SingleMessage = () => { 

 const dispatch = useDispatch(); 
const {message}= useSelector((state)=>state.TattooReducer)

const sentence = "Tus tatuajes molan un montón"
const sentence1 = ", así que vas a hacerle uno muy cool a "


const removeMessage = (message) =>{
   dispatch(deleteMessage(message.id))
  
 }


 return (  <> 

                     <div className='div__presentation'> 
                        <h1 className='div__presentation__h1'>{sentence} {message.artist}{sentence1}{message.name}!</h1>
                     </div> 
                       <div className="div__single">
                          <section key={message.id} className='section__messages__div1'> 
                               <h2>De: {message.name}</h2>
                               <h3>Para: {message.artist}</h3>
                               <h3 className="" > {message.email}</h3>
                               <h3 className="" > {message.description}</h3>
                               <h3  className="" > <FontAwesomeIcon icon={faPalette} style={{color: message.color}} /> {message.color} </h3>
                          <Link to="/messages"> <button  onClick={(e)=>removeMessage(message)}  className="delete"><FontAwesomeIcon className='delete__icon' icon={faTrash} /></button></Link> 
                               
                               <Link to="/messages">Volver</Link>
                          </section>

                       <div className='div__img'>
                            <img src={mermaidn} className="div__img__image" alt="mermaid"/>
                       </div>
                     </div>
                     <div className='div__contact'>
                        <h2> Envía un email a  <a className='link' href={`mailto:"${message.email}"`} style={{color: message.color}}> {message.name} </a></h2>
                     </div>

          </>)
};

SingleMessage.propTypes = {};

SingleMessage.defaultProps = {};

export default SingleMessage;
