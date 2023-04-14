import React from 'react';
import PropTypes from 'prop-types';
import  './ProfileComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {getMessages} from '../../store/Tattoo/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Contact2Component from "../../components/Contact2Component/Contact2Component";

const ProfileComponent = () => {

  const {user} = useSelector((state)=> state.AuthReducer)
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
              <img className='profile__image img' src="https://i.ytimg.com/vi/7pSmhZFbCy0/maxresdefault.jpg" alt=''></img>
            )}
          </div>
          <div className='profile__description'> 
            <h2 className=''>Welcome!</h2>
            <p>{user.name} {user.surname}</p>
            <h3 className=''>Email: </h3>
            <p>{user.email}</p>
            <h3 className=''>Birthday: </h3>
            <p>{user.birthday}</p>
            {user && user.isAdmin ? (
              <>
                <h3>Tattoo skills</h3> 
                <ul className='ul__skills'> 
                  {user.skills.map((skill)=>{
                    return ( 
                      <li className='ul__skills__li'>{skill}</li>
                    )
                  })}
                </ul>
              </>
            ) : ("")}
          </div>
          </div>
          <div className='profile__bio-inbox'>
            {user && user.isAdmin ? (
              <section className='section__info__bio'>
                <h3 className='bio'>BIO</h3> 
                <p>{user.bio}</p> 
              </section>
            ) : ("")} 
            <section className='section__info'>
              {messages.map((message) => {
                return (
                  message.artist === user.name? 
                    <div className='section__info__div__msg'> 
                      <h4><FontAwesomeIcon icon={faEnvelope} /> {message.name}</h4>
                      <h4 className='section__info__description'>{message.description}</h4>
                      <h4 className='section__info__description'>Su email es {message.email}! Escríbele a {message.name} para darle cita en el estudio!</h4>
                      <h4 className='hidden__info'> {counter.push(message)}</h4>
                    </div>
                  : "")
              })}
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
