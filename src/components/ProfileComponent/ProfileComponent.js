import React from 'react';
import PropTypes from 'prop-types';
import  './ProfileComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {getMessages} from '../../store/Tattoo/actions'

const ProfileComponent = () => {


   const {user} = useSelector((state)=> state.AuthReducer)
   const {messages, loadingMessages} = useSelector((state)=>state.TattooReducer);
   const dispatch = useDispatch()
   
   useEffect(() => {
    dispatch(getMessages());
  }, []);

  if(loadingMessages){
    return ( 
    <p> "Loading..."</p>)
  }else { 
return ( 
  <div className="wrapper__profile"> 
      <section className="wrapper__profile__section__singleUser">
         
                 <div className='div__image__profile'> 
                   <img className='div__image__profile__image' src={user.image} alt={user.name}></img> 
                 </div>

                 <div className='div__info__profile'> 
                      <h2>My Profile</h2>
                     <h2>Bienvenida {user.name}</h2>
                     <h3>{user.email} </h3> 
                       <ul className='ul__skills'> 
                        <h3>Tattoo skills</h3>
                           {user.skills.map((skill)=>{
                                return( 
                                <li>{skill}</li>
                            )})}
                        </ul>
                 </div>

  
    </section>
<div className='wrappers'> 
    <section className='section__info'>
  <h4>Mail Box </h4>
          {messages.map((message)=>{
           return(
     
          message.artist === user.name? 
          <div> 
          {/* // LA LONGITUD DEL ARRAY AÚN NO LA HE SACADO */}
          {/* <h3>{user.name} tienes { message.artist.includes(user.name)? message.length : ""} mensajes nuevos!</h3> */}
          <h3>De {message.name}</h3>
          <h3 className='section__info__description'>{message.description}</h3>
          <h3>Su email es {message.email}! Escríbele a {message.name} para darle cita en el estudio!</h3>
          </div>
           : ""
        )
   
 })}
 
  </section>
  <section className='section__info__bio'>
 <h3>BIO </h3> 

 <h3>{user.bio}</h3> 
 </section>
</div>

















  </div>
  )}
 };

ProfileComponent.propTypes = {};

ProfileComponent.defaultProps = {};

export default ProfileComponent;
