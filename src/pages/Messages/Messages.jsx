import React, { useEffect, useState } from 'react'

//IMPORT HOOKS
import { useDispatch, useSelector } from 'react-redux'

//IMPORT LINK
import { Link } from 'react-router-dom'

//IMPORTO FUNCIÓN PARA HACER EL GET
import {getMessages} from '../../store/Tattoo/actions'

//IMPORT SCSS
import  './Messages.scss'

//IMPORT FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faMessage} from '@fortawesome/free-solid-svg-icons';

const Messages = () => {

const dispatch = useDispatch();
const {messages, loadingMessages} = useSelector((state)=> state.TattooReducer);
const [isShown, setIsShown] = useState("false");

const handleToggle = (e) =>{
 setIsShown(!isShown);
 console.log(e)

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
     <h3 className='counter'> Bandeja de entrada:  {messages.length} <FontAwesomeIcon icon={faMessage} /> </h3>
    {messages.map((message)=>{
        return (
       <div className='wrapper'> 
              <div key={message.id} className='section__messages__div'> 
                   <h2>De: {message.name}</h2>
                   <h3>Para: {message.artist}</h3>
                   <h3  className="h3__hidden" > {message.email}</h3>
                   <h3  className="h3__hidden" > {message.description}</h3>
                   <h3  className="h3__hidden" style={{color: message.color}}> <FontAwesomeIcon icon={faPalette} /> {message.color} </h3>
                   <Link className='link' to={`/message/${message.id}`}><h3> Leer</h3> </Link> 
          
              </div>
        </div>
        )
    })}
    
    
    

    </section>
  )
}

export default Messages
