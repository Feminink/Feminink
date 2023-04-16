import React from 'react';
import PropTypes from 'prop-types';
import  './ProfileComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {getMessages} from '../../store/Tattoo/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

/* IMPORT AVATAR */
import avatar from '../../assets/images/avatar.webp';

import Contact2Component from "../../components/Contact2Component/Contact2Component";

const ProfileComponent = () => {
 
  const {user} = useSelector((state)=> state.AuthReducer)
  const code = localStorage.getItem("_code", user);

  const {messages, loadingMessages} = useSelector((state)=>state.TattooReducer);
  const dispatch = useDispatch()
   
  useEffect(() => {
    dispatch(getMessages());
  },[]);

  let counter = [];
 
  if(loadingMessages) {
    return (
      <div className="container">
        <h2>Loading...</h2>
      </div>
    )
  } else { 
  
  return (
    <>
    <section className="section__profile container">
      <div className='profile__info'>
        <div className="profile__data">
          <div className='profile__image-container'> 
            {user && user.isAdmin ? (
              <img className='profile__image img' src={user.image} alt={user.name}></img>
            ) : (
              <img className='profile__image img' src={avatar} alt=''></img>
            )}
          </div>
          <div className='profile__description'> 
            <h2 className=''>Welcome!</h2>
            <p>{user.name} {user.surname}</p>
            <h3 className=''>Email: </h3>
            <p>{user.email}</p>
            {/* //TERNARIO PARA MOSTRAR SI TIENES UN CODE O NO LO TIENES */}
            <h2>{code}</h2>
            <h3 className=''>Birthday: </h3>
            <p>{user.birthday}</p>
            {user && user.isAdmin ? (
              <>
                <h3>Tattoo skills</h3> 
                <ul className='ul__skills'> 
                  {user.skills.map((skill)=>{
                    return ( 
                      <li className='ul__skills__li'><p>{skill}</p></li>
                    )
                  })}
                </ul>
              </>
            ) : ("")}
          </div>
          </div>
          <div className='profile__bio-inbox'>
            {user && user.isAdmin ? (
              <section className='section__inbox__bio'>
                <h3 className='bio'>BIO</h3> 
                <p>{user.bio}</p> 
              </section>
            ) : ("")} 
            <section className='section__inbox'>
              {messages.map((message) => {
                if (user && user.isAdmin) {
                  if (message.artist === user.name) {
                    return (
                      <div className='section__info__div__msg' key={message.id}> 
                        <Link to={`/contact/${message.id}`}><h4><FontAwesomeIcon icon={faEnvelope} /> Mensaje de: {message.name}</h4></Link>
                        {/* <h4 className='section__info__description'>Su email es {message.email}! Escríbele a {message.name} para darle cita en el estudio!</h4> */}
                        <h4 className='hidden__info'> {counter.push(message)}</h4>
                      </div>
                    )
                  }
                } else {
                  if (message.name === user.name) {
                    return (
                      <div className='section__info__div__msg' key={message.id}> 
                        <Link to={`/contact/${message.id}`}><h4><FontAwesomeIcon icon={faEnvelope} /> Mensaje de: {message.artist}</h4></Link>
                        <h4 className='section__info__description'>{message.description}</h4>
                        <h4 className='hidden__info'> {counter.push(message)}</h4>
                        <hr className='hr'/>
                      </div>
                    )
                  }
                }
                return null;
              })}
              <h3>Mail Box({counter.length})</h3>
            </section>
          </div>
        </div>
    </section>
    {user && user.isAdmin ? (
      <section className='section__send-date'>
        <Contact2Component></Contact2Component>
      </section>
    ) : ("")}
    </>
  )}
};

ProfileComponent.propTypes = {};

ProfileComponent.defaultProps = {};

export default ProfileComponent;
