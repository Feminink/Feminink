import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getMessages } from '../../store/Tattoo/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faMessage } from '@fortawesome/free-solid-svg-icons';
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
 

  // const readMessages = messages.filter(message => message.isRead === true);
  // readMessages.push(isRead);


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
        <div> 
          <h2 className='counter'> BANDEJA DE ENTRADA:  {messages.length} <FontAwesomeIcon icon={faMessage} className="counter__icon" /> </h2>
          {/* <h2 className='counter'> MENSAJES NO LEÍDOS:{} <FontAwesomeIcon icon={faMessage} className="counter__icon" /> </h2> */}
       
        </div>
        <section className='section__messages'>
          <div className='wrapper'> 
            {messages.map((message)=>{
              return (
                <div key={message.id} className='section__messages__div'> 
                  <div>
                    {isRead[message.id] ? (
                      <h5 className='read' onClick={() => addRead(message)}>marcar como no leído</h5>
                    ) : (
                      <h5 className='notRead' onClick={() => addRead(message)}>marcar como leído</h5>
                    )}
                  </div>
                  <h2>De: {message.name}</h2>
                  <h3>Para: {message.artist}</h3>
                  <h3 className="h3__hidden"> {message.email}</h3>
                  <h3 className="h3__hidden"> {message.description}</h3>
                  <h3 className="h3__hidden" style={{color: message.color}}>
                    <FontAwesomeIcon icon={faPalette} /> {message.color}
                  </h3>
                  <Link onClick={() => addRead(message)} className='link' to={`/contact/${message.id}`} >
                    <h3>Leer</h3>
                  </Link> 
                </div> 
              ) 
            })}
          </div>
        </section>
      </>
    )
  }
}

export default Messages
