import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getSingleMessage } from '../../store/Tattoo/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette} from '@fortawesome/free-solid-svg-icons';

const Message = () => {

    const params = useParams();
    const dispatch = useDispatch()
    const {message}= useSelector((state)=>state.TattooReducer)
    console.log(message, "message")

    useEffect(()=>{
        dispatch(getSingleMessage(params.id))
    },[])
  return (
    <div>
    
           <div key={message.id} className='section__messages__div'> 
         
         <h2>De: {message.name}</h2>
         <h3>Para: {message.artist}</h3>
         <h3 className="" > {message.email}</h3>

         <h3 className="" > {message.description}</h3>
         <h3  className="" style={{color: message.color}}> <FontAwesomeIcon icon={faPalette} /> {message.color} </h3>
        
         </div>

    </div>
  )
}

export default Message
