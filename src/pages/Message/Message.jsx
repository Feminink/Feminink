import React, { useEffect } from 'react'
import { useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom'
import SingleMessage from '../../components/SingleMessage/SingleMessage';
import { getSingleMessage } from '../../store/Tattoo/actions';

// IMPORT STYLES
import "./Message.scss";

const Message = () => {
  const dispatch = useDispatch();
  const params = useParams();
  
  useEffect(()=>{
    dispatch(getSingleMessage(params.id))
  },[])
 
  return (
    <>
      <div className="page-title__single-message">
          <div className="container">
            <h1>MESSAGE PAGE</h1>
          </div>
      </div>
      <SingleMessage></SingleMessage>
    </>
    
  )
}

export default Message
