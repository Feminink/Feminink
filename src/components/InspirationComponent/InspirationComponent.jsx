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
 return(  <section className="section__inspiration">
 
 {inspiration.map((woman)=>{
  return (
    <section>
    <h1>{woman.name}</h1>
    <img src={woman.image} alt={woman.name}></img>
    {console.log(woman.image)}
    </section>
  )
 })}
 
 

         </section>)
 };

InspirationComponent.propTypes = {};

InspirationComponent.defaultProps = {};

export default InspirationComponent;
