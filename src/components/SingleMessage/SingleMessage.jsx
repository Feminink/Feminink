import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import  './SingleMessage.scss';

//IMPORT USESELECTOR
import {useSelector } from 'react-redux';

//IMPORT FONTAWESEOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette} from '@fortawesome/free-solid-svg-icons';

//IMPORT LINK
import { Link } from 'react-router-dom';


const SingleMessage = () => { 

  
const {message}= useSelector((state)=>state.TattooReducer)

const sentence = "Los tatuajes no se hacen solos"
const sentence1 = ", así que vamos a hacerle uno muy cool a "
 return (  <> 

                     <div className='div__presentation'> 
                        <h1 className='div__presentation__h1'>{sentence} {message.artist}{sentence1}{message.name}!</h1>
                     </div> 
                       <div className="div__single">
                          <section key={message.id} className='section__messages__div'> 
                               <h2>De: {message.name}</h2>
                               <h3>Para: {message.artist}</h3>
                               <h3 className="" > {message.email}</h3>
                               <h3 className="" > {message.description}</h3>
                               <h3  className="" style={{color: message.color}}> <FontAwesomeIcon icon={faPalette} /> {message.color} </h3>
                               <Link to="/messages">Volver</Link>
                          </section>

                       <div className='div__img'>
                            <img className='div__img__image' src="https://cdn.dribbble.com/users/264162/screenshots/16408392/media/35832ee7e8b9f16b1d940fc3fb316b66.png?compress=1&resize=400x300" alt="mermaid"></img>
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
