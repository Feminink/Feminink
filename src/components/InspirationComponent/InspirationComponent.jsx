import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './InspirationComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
//importo la función que dispara las acciones
import { getInspiration } from '../../store/Tattoo/actions';

const InspirationComponent = () => {
  
  // TRAIGO USEDISPATCH

  const dispatch = useDispatch();

  const {inspiration, loadingInspiration} = useSelector((state)=>state.TattooReducer)

  useEffect(()=>{
    dispatch(getInspiration())
  },[])

  if (loadingInspiration){
    return (
      <p>"Loading...</p>
    )
  }else {

  }
 return(  <div className="div__inspiration">
 
 {inspiration.map((woman)=>{
  return (
    <section className='div__inspiration__section'>
    {/* <div className='div__img'>  */}
    <img  className='div__img__img' src={woman.image} alt={woman.name}></img>
    {/* </div> */}
    <div className='div__detail'> 
    <h1 className='div__inspiration__section__detail'>{woman.name}</h1>
    <h3 className='div__inspiration__section__detail'>{woman.city}</h3>
    <h3 className='div__inspiration__section__detail'>{woman.date}</h3>
    <h3 className='div__inspiration__section__detail'>{woman.style_tattoo}</h3>
    <h3 className='div__inspiration__section__detail'>{woman.data}</h3>
    </div>
    {console.log(woman.image)}
    </section>
  )
 })}
 
 

         </div>)
 };

InspirationComponent.propTypes = {};

InspirationComponent.defaultProps = {};

export default InspirationComponent;
