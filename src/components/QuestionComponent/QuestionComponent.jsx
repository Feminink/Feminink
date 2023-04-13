import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './QuestionComponent.scss';

//IMPORT HOOKS
import { useDispatch, useSelector } from 'react-redux';
//IMPORT GETINFO
import { getInfo } from "../../store/info/actions";
const QuestionComponent = () => { 

  const { info, loadingInfo } = useSelector((state) => state.InfoReducer);
  
  const dispatch = useDispatch();
  //ESTADO QUE CONTROLA EN QUË PREGUNTA ESTÄS
  const [questCurrent, setQuestCurrent] = useState(0);
  //ESTADO QUE CONTROLA LA PUNTUACIÖN
  const [score, setScore] = useState(0);
  //ESTADO QUE CONTROLA SI EL JUEGO HA TERMINADO
  const [isFinished, setIsfinished] = useState(false)

  useEffect(() => {
    dispatch(getInfo());
  }, []);

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

   if (isFinished){
  
    return  <div className={"points" + score}>Has obtenido {score} de {info.quiz.length} APLICATE</div>
   
  } else if (isFinished && score === 1){
    <div className={"points" + score}>Has obtenido {score} de {info.quiz.length} OLE </div>
  } else if (isFinished && score === 2){
    <div className={"points" + score}>Has obtenido {score} de {info.quiz.length}  </div>

  }
        // switch(score){
          // case score === 0:
            // return(
              // <div className={"points" + score}>
             {/* score = {} */}
                {/* <h1> Has acertado {score} de {info.quiz.length}! Feminist friendly</h1> */}
                {/* <button onClick={()=> (window.location.href = "/contact")}> Ponte en contacto </button> */}
              {/* </div>  */}
            // );
                // break 
            // case score === 1:
              // return(
                // <div className={"points" +score}>
{/*             */}
                  {/* <h1> Has acertado {score} de {info.quiz.length}! Feminist fdfsdfriendly</h1> */}
                  {/* <button onClick={()=> (window.location.href = "/contact")}> Ponte en contacto </button> */}
                {/* </div>  */}
              // );
              //  break 
              // case score === 2:
                // return(
                  // <div className={"points" +score}>
{/*                   */}
                    {/* <h1> Has acertado {score} de {info.quiz.length}!  fddfsdfriendly</h1> */}
                    {/* <button onClick={()=> (window.location.href = "/contact")}> Ponte en contacto </button> */}
                  {/* </div>  */}
                // );
              //  break 
        // default:
          // break
          //  }
  

  
  


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
    <span>Question {questCurrent + 1} of </span> {info.quiz.length}
    <h2>{quizz.question}</h2>
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
