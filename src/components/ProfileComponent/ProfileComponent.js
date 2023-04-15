import React, { useState } from 'react';
import PropTypes from 'prop-types';
import  './ProfileComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {getMessages} from '../../store/Tattoo/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const ProfileComponent = () => {

   const code = localStorage.getItem("_code")
   const {user} = useSelector((state)=> state.AuthReducer)
   const {messages, loadingMessages} = useSelector((state)=>state.TattooReducer);
   const dispatch = useDispatch()
   
   const [isRead, setIsRead] = useState();
   useEffect(() => {
    dispatch(getMessages());
  }, []);

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
   let counter = [];
 
  if(loadingMessages){
    return ( 
    <p> "Loading..."</p>)
  }else { 
return (
  <div style={{background:user.color}} className="wrapper__profile"> 
      <section className="wrapper__profile__section__singleUser">
         
                 <div className='div__image__profile'> 
                   <img className='div__image__profile__image' src={user.image} alt={user.name}></img> 
                 </div>
                 <div  className='div__info__profile'> 
                      <h2 className='div__info__profile__h'>Welcome {user.name}</h2>
                       <h2>{code}</h2>
                      <h3 className='div__info__profile__h'>{user.email} </h3> 
                       <ul className='ul__skills'> 
                      <h3>Tattoo skills</h3>
                           {user.skills.map((skill) =>{
                                return( 
                                <li className='ul__skills__li'>{skill}</li>
                            )})}
                        </ul>
                      
                 </div> 

  
    </section>
<div className='wrappers'> 
    <section className='section__info'>
   
   
          {messages.map((message)=>{
           return(
          message.artist === user.name? 
          <div className='section__info__div__msg'> 
          <Link onClick={() => addRead(message)} to={`/contact/${message.id}`} >
                          <h3>Leído</h3>
                        </Link> 

         <Link to={`/contact/${message.id}`}>  <h3><FontAwesomeIcon icon={faEnvelope} />  {message.name}</h3></Link>
          <h3 className='section__info__description'>{message.description}</h3>
          <h3 className='section__info__description'>Su email es {message.email}! Escríbele a {message.name} para darle cita en el estudio!</h3>
          <h5 className='hidden__info'> {counter.push(message)}</h5>
          </div>
           : ""
        ) 
 }
     
 )}
 <h4>Mail Box  ({counter.length}) </h4>

  </section>
  <section className='section__info__bio'>
 <h3 className='bio'>BIO </h3> 

 <h4>{user.bio}</h4> 
 </section>
</div>

















  </div>
  )}
 };

ProfileComponent.propTypes = {};

ProfileComponent.defaultProps = {};

export default ProfileComponent;
