import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {getMessages} from '../../store/Tattoo/actions'
import  './Messages.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette} from '@fortawesome/free-solid-svg-icons';
const Messages = () => {

const dispatch = useDispatch();

const {messages, loadingMessages} = useSelector((state)=> state.TattooReducer);

const [isShown, setIsShown] = useState("false");

const handleToggle = () =>{
 setIsShown(!isShown);

};


useEffect(()=>{
    dispatch(getMessages());

},[])

if (loadingMessages){
    return (
      <p>"Loading...</p>
    )
  }else {
  }
  return (
    <section className='section__messages'>
     <h3 className='counter'>Bandeja de entrada: {messages.length}</h3>
    {messages.map((message)=>{
        return (
          
            <div className='section__messages__div'> 
           
            <h2>De: {message.name}</h2>
            <h3 className={`h3__hidden${isShown?  "" : "hidden"}`} > {message.email}</h3>
            <h3 className={`h3__hidden${isShown?  "" : "hidden"}`} > {message.description}</h3>
            <h3  className={`h3__hidden${isShown?  "" : "hidden"}`} style={{color: message.color}}> <FontAwesomeIcon icon={faPalette} /> {message.color} </h3>
            <button className="button" onClick={handleToggle} >Leer</button>
            </div>
           
        )
    })}

    </section>
  )
}

export default Messages
