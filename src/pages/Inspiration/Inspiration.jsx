import React from 'react'
import InspirationComponent from '../../components/InspirationComponent/InspirationComponent'

import machine from '../../assets/images/machine.png'
import rose from '../../assets/images/rose.png'

import './Inspiration.scss';
const title = "Del circo... a los estudios de tatuaje"
const Inspiration = () => {
 
  return (
    <div>
    {/* <h1>Nuestra inspiración</h1> */}
       <div className='div__design'>
       
      <img  className="div__design__icon" src={machine} alt="machine icon"></img> 
      
      <h1 className='title'>{title}</h1>
      <img  className="div__design__icon" src={rose} alt="machine icon"></img> 
   </div>
   
      <InspirationComponent></InspirationComponent>
    
   
   
   
    </div>
  )
}

export default Inspiration
