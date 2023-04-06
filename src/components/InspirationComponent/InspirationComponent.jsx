import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './InspirationComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
//importo la función que dispara las acciones
import { getInfo } from "../../store/info/actions";


//IMPORT FONTAWESOME 

// import {faAnchor}  from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InspirationComponent = () => {
  
  //  USEDISPATCH

  const dispatch = useDispatch();

  // TRAIDO USESELECTOR PARA LO QUE ME INTERESA DEL FIRSTSTATE

  const { info, loadingInfo } = useSelector((state) => state.InfoReducer);


  // USEEFFECT PARA DISPARAR LA ACCIÖN QUE OBTIENE A LAS MUJERES DE INSPIRACIÖN

  useEffect(() => {
    dispatch(getInfo());
  }, []);
  
  

  if (loadingInfo){
    return (
      <p>"Loading...</p>
    )
  }else {

  }
 return(  <div className="div__inspiration">




 {info && info.inspiration && info.inspiration.map((woman)=>{
  return ( 
    <section key={woman.id} className='div__inspiration__section'>
    <div className='div__inspiration__wrapper'> 
    <div className='div__img'> 
      <img  className='div__img__img' src={woman.image} alt={woman.name}></img>
    </div>
    <div className='div__detail'> 
    <h1 className='div__inspiration__section__detail'>{woman.name}</h1>
    <h3 className='div__inspiration__section__detail'>{woman.city}</h3>
    <h3 className='div__inspiration__section__detail'>{woman.date}</h3>
    <h3 className='div__inspiration__section__detail'>{woman.style_tattoo.join(", ").toUpperCase()}</h3>
    </div>
    </div>
    <div className='div__detail__data'> 
    <h4 className='div__detail__data__h4'>info</h4>
    {/* <i><FontAwesomeIcon icon={faAnchor} /></i> */}
      <h3 id="hide" >{woman.data}</h3>
    </div>
    </section>
  
  )
 })}

         </div>)
 };

InspirationComponent.propTypes = {};

InspirationComponent.defaultProps = {};

export default InspirationComponent;
