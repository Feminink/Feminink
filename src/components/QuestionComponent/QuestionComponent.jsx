import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './QuestionComponent.scss';
import { Link } from 'react-router-dom';
//IMPORT HOOKS
import { useDispatch, useSelector } from 'react-redux';
//IMPORT GETINFO
import { getInfo } from "../../store/info/actions";
//IMPORT GIF
import no from '../../assets/images/no.gif'
import hello from '../../assets/images/hello.jpeg'
import body from '../../assets/images/body.webp'
const QuestionComponent = () => { 

  const { info, loadingInfo } = useSelector((state) => state.InfoReducer);
  
  const dispatch = useDispatch();
  //ESTADO QUE CONTROLA EN QUË PREGUNTA ESTÄS
  const [questCurrent, setQuestCurrent] = useState(0);
  //ESTADO QUE CONTROLA LA PUNTUACIÖN
  const [score, setScore] = useState(0);
  //ESTADO QUE CONTROLA SI EL JUEGO HA TERMINADO
  const [isFinished, setIsfinished] = useState(false)

  //ESTADO PARA CODIGO ALEATORIO
  const [code, setCode] = useState("")

  //ESTADO PARA CONTROLAR SI CLICKED OR NOT 
   const [isClicked, setIsClicked] = useState(false);

 
 //FUNCIÖN PARA CAMBIAR CLASE DEL BOTÖN DESPUËS DE HACER CLICK
function changeClass(){
    
   const button = document.querySelector("button");
   button.classList.add("visibility")
   console.log(button, "button ")
   setIsClicked(true)
    
  }


  useEffect(() => {
    dispatch(getInfo());
  }, []);

//FUNCIÖN PARA GENERAR EL COD DE DESCUENTO
  function randomCode() {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCode(code)
    localStorage.setItem("_code", code)
    changeClass()
    return code
  }

  
//FUNCIÖN QUE MANEJA SI HAS ACERTADO O NO LA PREGUNTA Y SI EL JUEGO HA TERMINADO O NO
  function handleAnswer(isCorrect, e){
    
    if(isCorrect){
      setScore(score + 1);
      e.target.classList.add(isCorrect ? "correct" : "incorrect");
      setQuestCurrent(questCurrent + 1)
      setTimeout(()=>{
        if (questCurrent === info.quiz.length - 1){
          setIsfinished(true)
        }
         
      }, 1000);
    }else{
      e.target.classList.add("incorrect")
      setQuestCurrent(questCurrent + 1)
      if( questCurrent === info.quiz.length - 1){
        setIsfinished(true)
      }
    }
  }

   if (isFinished && score === 0){
  return <div className={"points" + score}> <h2 className='points__h2'> Has acertado {score} de {info.quiz.length} quizá para la próxima! </h2>
        <img className='gif' src={no} alt="no"></img>
  <Link className='link' to="/about">Volver </Link></div>
   
  } else if (isFinished && score === 1){
    return  <div className={"points" + score}> <h2 className='points__h2'> Has acertado {score} de {info.quiz.length}</h2> 
     <h2 className="points__h2"> feminist level </h2>
          <img className='hello' src={hello} alt="no"></img>
     <Link className='link' to="/contact">Volver </Link></div>
  } else if (isFinished && score === 2){

   return  <div className={"points" + score}> <h2 className='points__h2'> Has acertado {score} de {info.quiz.length}  </h2> 
   <h2 className='points__h2'>Wooow! Por poco! </h2>
   <img className='body' src={body} alt="gif_feminism"></img>
   <Link className='link' to="/contact">Volver </Link></div>
 

  }else if(isFinished && score === 3  ){
    
    return <div  className={"points" + score}><h2 className='points__h2'>  Has acertado {score} de {info.quiz.length}</h2>
           <h2 className='points__win'>  NIVEL NINJA-FEMINIST-INK DESBLOQUEADO </h2>
           <button className="button__quiz" onClick={randomCode} onChange={changeClass} >YOU GOT IT </button>
           <div> <h1 className='points__win' >{code}</h1> 
           {/* <h1 className='points__win' >No olvides tu código el día de la cita!</h1>  */}
           <Link className='link' to="/contact">Volver </Link></div> 
     </div>
  }


  if(loadingInfo){
    return (
      <div className="container">
      <h2>Loading...</h2>
    </div>
    );
  }
 
  return (<div className="div__question__wrapper">
   
  
{info && info.quiz && info.quiz.map((quizz, index)=>{
  return (
    <div key={index} className='questions'> 
    <div className='number__question'> 
     <h3 className='number__question__h3'>{quizz.question}</h3>
    </div>
    <div className='response__right'>{quizz.options.map((option, index)=> {
      return( 
     <button key={index} className='quiz__button' onClick={(e)=>handleAnswer(option.isCorrect, e)}> {option.response}</button> 
)})} </div>
    </div>
  )
})}

  </div>)
};

QuestionComponent.propTypes = {};

QuestionComponent.defaultProps = {};

export default QuestionComponent;
