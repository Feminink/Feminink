import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getMessages } from '../../store/Tattoo/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faEnvelope, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

import postal from '../../assets/images/postal.png'
import './Messages.scss';

const Messages = () => {

  //USEDISPATCH
  const dispatch = useDispatch();

//PARTE DE ESTADOS DE LA STORE QUE NECESITAMOS
  const { messages, loadingMessages } = useSelector((state)=> state.TattooReducer);

  //ESTADO PARA CAMBIAR DE LEÏDO A NO LEIDO
  const [isRead, setIsRead] = useState(() => {
    //SE ALMACENA EN UNA VARIABLE EN LA LOCALSTORAGE 
        const storedIsRead = JSON.parse(localStorage.getItem('isRead')) || {};
        return storedIsRead;
  });



 //ESTADO PARA EL NÚMERO DE MENSAJES QUE SE VAN A MOSTRAR
 const [numMessagesToShow, setNumMessagesToShow] = useState(4);

 //ESTADO PARA MOSTRAR MÄS O MENOS MENSAJES 
 const [showMore, setShowMore] = useState(false);


 //FUNCIÓN PARA CARGAR MÁS MENSAJES
 const loadMoreMessages = () => {
  if (showMore) {
    setNumMessagesToShow(4);
    setShowMore(false);
  } else {
    setNumMessagesToShow(numMessagesToShow + 10);
    setShowMore(true);
  }
}

 //ESTA FUNCIÖN SIRVE PARA AÑADIR A LEIDOS O NO, SU ESTADO INICIAL ES FALSE, CUANDO SE HACE CLICK
 // SI EL ESTADO PREVIO ERA FALSE LO PASA A TRUE Y VICEVERSA
  const addRead = (message) => {
    setIsRead(prevState => {
      const newState = {
        ...prevState,
        [message.id]: !prevState[message.id]
      };
      localStorage.setItem('isRead', JSON.stringify(newState));
      return newState;
    });
  };
 


  useEffect(() => {
    dispatch(getMessages());
  }, []);

  if (loadingMessages) {
    return (
      <p>"Loading...</p>
    )
  } else {
    return (
      <>
      {/* <div className='background'> */}
        <div className='div__postalBox'> 
          <img  className='div__postalBox__img' src={postal}  alt="postalbox"></img>
          <h2 className='counter'>   {messages.length} </h2>
       
        </div>
        <section className='section__messages'>
          <div className='wrapper'> 
            {messages.slice(0, numMessagesToShow).map((message)=>{
              return (
                <div key={message.id} className='section__messages__div'> 
                    {isRead[message.id] ? (
                     <div className='read' onClick={() => addRead(message)}> 
                        <h3>De: {message.name}</h3>
                        <h3>Para: {message.artist}</h3>
                        <h3 className="h3__hidden"> {message.email}</h3>
                        <h3 className="h3__hidden"> {message.description}</h3>
                        <h3 className="h3__hidden" style={{color: message.color}}>
                          <FontAwesomeIcon icon={faPalette} /> {message.color}
                        </h3>
                        <Link onClick={() => addRead(message)} to={`/contact/${message.id}`} >
                          <h3>Leído</h3>
                        </Link> 
                     <div> <FontAwesomeIcon icon={faEnvelopeOpen} /></div>
                     </div>
                     
                   ) : (
                    <div className='notRead' onClick={() => addRead(message)}> 
                            <h2>De: {message.name}</h2>
                            <h3>Para: {message.artist}</h3>
                            <h3 className="h3__hidden"> {message.email}</h3>
                            <h3 className="h3__hidden"> {message.description}</h3>
                            <h3 className="h3__hidden" style={{color: message.color}}>
                              <FontAwesomeIcon icon={faPalette} /> {message.color}
                            </h3>
                            <Link onClick={() => addRead(message)}  to={`/contact/${message.id}`} >
                              <h3>Leer</h3>
                            </Link> 
                         <div><FontAwesomeIcon icon={faEnvelope} /> </div>
                   </div>
                   )}
                </div> 
              ) 
            })}
            <button className='load' onClick={loadMoreMessages}>{showMore ? 'Ver menos' : 'Ver más'}</button>

          </div>
        </section>
        {/* </div> */}
      </>
    )
  }
}

export default Messages
