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
  const [question, setQuestion] = useState(0);
  //ESTADO QUE CONTROLA LA PUNTUACIÖN
  const [score, setScore] = useState(0);
  //ESTADO QUE CONTROLA SI EL JUEGO HA TERMINADO
  const [isFinished, setIsfinished] = useState(false)

  useEffect(() => {
    dispatch(getInfo());
  }, []);

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
    <div className='question__title'> 
    <span>Question {question +1} of </span> {info.quiz.length}
    <h2>{quizz.question}</h2>
    </div>
    <div className='response__right'>{quizz.options.map((option, index)=> {
      return( 
     <button key={index} className='quiz__button'> {option.response}</button> 
)})} </div>
    </div>
  )
})}
    {/* <div className='question__left'> */}
        {/* <div className='question__number'> */}
           {/* } */}
              {/* </div> */}
                 {/* <div className='question__title'> */}
              {/* </div> */}
    {/* </div> */}

    {/* <div className='question__right'> */}
      {/* <button>1</button> */}
      {/* <button>2</button> */}
      {/* <button>3</button> */}
    {/* </div> */}
  </div>)
};

QuestionComponent.propTypes = {};

QuestionComponent.defaultProps = {};

export default QuestionComponent;
