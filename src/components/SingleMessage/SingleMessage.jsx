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
import mermaidn from '../../assets/images/mermaidn.png'

const SingleMessage = () => { 

  
const {message}= useSelector((state)=>state.TattooReducer)

const sentence = "Tus tatuajes molan un montón"
const sentence1 = ", así que vas a hacerle uno muy cool a "
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
