
import React from 'react';
import PropTypes from 'prop-types';
import  './ProfileComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {getDiscount, getMessages} from '../../store/Tattoo/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

/* IMPORT AVATAR */
import avatar from '../../assets/images/avatar.png';

import Contact2Component from "../../components/Contact2Component/Contact2Component";
// import { getInfo } from '../../store/info/actions';

const ProfileComponent = () => {
 
  const {user} = useSelector((state)=> state.AuthReducer);

  // const code = localStorage.getItem("_code", user);

  //REDUCER DE TATTOO
  const {messages, loadingMessages, loadingDiscount, discount} = useSelector((state)=>state.TattooReducer);
  
  const dispatch = useDispatch();
   
  useEffect(() => {
    dispatch(getMessages());
    dispatch(getDiscount());
  },[]);


 
  if(loadingMessages && loadingDiscount) {
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
            {/* <h2>{code}</h2> */}

          

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
              {messages.filter((message) => {
                if (user && user.isUser && message.isUser && message.email === user.email) {
                  return true;
                } else if (!user.isAdmin && message.isUser && message.name === user.name) {
                  return true;
                } else if (user.isAdmin && !message.isUser && message.artist === user.name) {
                  return true;
                }
                return false;
              }).map((message) => (
                <div className='section__info__div__msg' key={message.id}> 
                  <Link to={`/contact/${message.id}`}><h4><FontAwesomeIcon icon={faEnvelope} /> Mensaje de: {message.name}</h4></Link>
                  <hr className='hr'/>
                </div>
              ))}
              <h3>Mail Box ({messages.filter((message) => {
                if (user && user.isUser && message.isUser && message.email === user.email) {
                  return true;
                } else if (!user.isAdmin && message.isUser && message.name === user.name) {
                  return true;
                } else if (user.isAdmin && !message.isUser && message.artist === user.name) {
                  return true;
                }
                return false;
              }).length})</h3>
            </section>
          </div>
        </div>
    </section>

   
    <section className='section__discount'>
       <div className='section__discount__div'> 
     {discount && discount.map((disc) => {
      
      if( disc.userId === user.id){
        
        return (
          <div key={disc.code}> 
              <h2 >Discount code: {disc.code}</h2>
           
          </div>
          
          
        )
      }else{
        return null
      }
     })}
     
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
