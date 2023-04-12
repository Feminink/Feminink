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
  <> 
  <div className="div__singleUser">
    <div>
    <h1>TUS DATOS </h1> 
     <h1>Bienvenida {user.name}</h1>
     <h1>{user.email} </h1> 
     <ul> 
       {user.skills.map((skill)=>{
            return( 
            <li>{skill}</li>
        )})}
    </ul>
    <h2>{user.bio}</h2>
    </div>
  <div> 
    <img src={user.image} alt={user.name}></img> 
    </div>
  </div>
  
  <section>
{messages.map((message)=>{
  return(
    message.artist === user.name? <h1>{message.description}</h1> : ""
  )
})}
  </section>
  </>
  )}
 };

ProfileComponent.propTypes = {};

ProfileComponent.defaultProps = {};

export default ProfileComponent;
