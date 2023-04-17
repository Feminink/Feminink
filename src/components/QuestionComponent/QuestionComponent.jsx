import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './QuestionComponent.scss';
import { Link } from 'react-router-dom';
//IMPORT HOOKS
import { useDispatch, useSelector } from 'react-redux';
//IMPORT GETINFO
import { getInfo } from "../../store/info/actions";
//IMPORT GIF
// import no from '../../assets/images/no.gif'
// import hello from '../../assets/images/hello.jpeg'
import body from '../../assets/images/body.webp'

import {actionSaveCode} from '../../store/gallery/actions'
import { saveCode } from '../../store/gallery/actions';
//IMPORT QUESTIONS
import Questions from './Questions';

const QuestionComponent = () => { 

  const { info, loadingInfo } = useSelector((state) => state.InfoReducer);
  const {user} = useSelector((state)=> state.AuthReducer)
  
  
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
   setIsClicked(isClicked)
    
  }

  useEffect(() => {
    dispatch(getInfo());
    // dispatch(actionSaveCode(user.id));
    //  dispatch(saveCode({code:code, user: user.name, userId: user.id}));
  }, []);
 
 

//FUNCIÖN PARA GENERAR EL COD DE DESCUENTO
  function randomCode() {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCode(code);
    localStorage.setItem("_code", code)
    changeClass()
    if(code){dispatch(
      saveCode({code:code, user: user.name, userId: user.id})
    )}else{
      {}
    }
   
    return code
  }

//FUNCIÖN QUE MANEJA SI HAS ACERTADO O NO LA PREGUNTA Y SI EL JUEGO HA TERMINADO O NO
  function handleAnswer(isCorrect, e){
    
    if(isCorrect) setScore(score + 1);
     e.target.classList.add(isCorrect ? "correct" : "incorrect");
      setTimeout(()=>{

    if (questCurrent === Questions.length - 1){
          setIsfinished(true)
        }else{ 
          setQuestCurrent(questCurrent + 1)
        }
         
      }, 1000); 
  }
     
   if (isFinished && score === 0){
  return <div className='div__score'> 
               <div className={"points" + score}> <h2 className='points__h2'> Has acertado {score} de {Questions.length}  </h2>
               <h2 className="points__h2"> Ups... </h2>
               <Link className='link__score' to="/profile">Go back </Link>
            </div>
         </div>
 
  } else if (isFinished && score === 1){
    return <div className='div__score'>
                <div className={"points" + score}> <h2 className='points__h2'> Has acertado {score} de {Questions.length}</h2> 
                <h2 className="points__h2"> Sigue así! </h2>
                <Link className='link__score' to="/profile">Go back </Link>
                </div>
           </div>
  } else if (isFinished && score === 2){

   return <div className='div__score'> 
               <div className={"points" + score}> <h2 className='points__h2'> Has acertado {score} de {Questions.length}  </h2> 
               <h2 className='points__h2'>Wooow! Por poco! </h2>
               <img className='body' src={body} alt="gif_feminism"></img>
               <Link className='link__score' to="/profile">Go back </Link>
               </div>
          </div>

  }else if(isFinished && score === 3  ){
    
    return <div className='div__score'> 
               <div  className={"points" + score}><h2 className='points__h2'>  Has acertado {score} de {Questions.length}</h2>
               <h2 className='points__win'>  NIVEL NINJA-FEMINIST-INK DESBLOQUEADO </h2>
               <button className="button__quiz" onClick={randomCode}>YOU GOT IT </button>
               <div> <h1 className='points__win' >{code}</h1> 
               {/* <button onClick={saveCode}> Save the code </button> */}
               <Link className='link__score' to="/profile">Go back </Link>
               </div> 
           </div>
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
  <div className='div__question__wrapper__quiz'> 
     <h1>Resuelve nuestro quiz!</h1>
  </div>
  <section className='div__question__wrapper__section'> 
<div className='questions'>


  <div className='questions__numbers'>
    <h3 className='questions__numbers__h3'> Question {questCurrent + 1} of {Questions.length }</h3> 
  </div>
  <div className='left__side__number__question__title'>
    <h2 className='number__question'>{Questions[questCurrent].question} </h2> 

  </div>
</div>
<div className='response__right'>
{Questions[questCurrent].options.map((option)=> ( 
  <button key={option.response} onClick={(e)=>handleAnswer(option.isCorrect, e)} className='quiz__button'>{option.response}</button>

))}

</div>

</section>

  </div>
)
};

QuestionComponent.propTypes = {};

QuestionComponent.defaultProps = {};

export default QuestionComponent;
