import React from 'react';
import PropTypes from 'prop-types';
import  './ProfileComponent.scss';
import { useSelector } from 'react-redux';

const ProfileComponent = () => {


   const {user} = useSelector((state)=> state.AuthReducer)
  
return ( 
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
    <img src="https://media.istockphoto.com/id/1168110319/photo/tattooed-latina-smiling-outdoors-and-sitting-on-car-hood.jpg?s=612x612&w=0&k=20&c=v8Cyky_cXJk3MBBh_wi9lv0mPe6zmVhFJu3AHwnMJ_s=" alt={user.name}></img> 
    </div>
  </div>)
 };

ProfileComponent.propTypes = {};

ProfileComponent.defaultProps = {};

export default ProfileComponent;
