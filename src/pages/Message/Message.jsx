import React, { useEffect } from 'react'
import { useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom'
import SingleMessage from '../../components/SingleMessage/SingleMessage';
import { getSingleMessage } from '../../store/Tattoo/actions';

const Message = () => {
  const dispatch = useDispatch();

  const params = useParams();
  
  useEffect(()=>{
    dispatch(getSingleMessage(params.id))
  },[])
 
  return (
    <SingleMessage></SingleMessage>
  )
}

export default Message
