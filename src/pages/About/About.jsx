import React from "react";
import Inspiration from "../Inspiration/Inspiration";
import video from '../../assets/images/video.mp4'
import QuestionComponent from "../../components/QuestionComponent/QuestionComponent";

// IMPORT COMPONENT
const About = () => {
  return (
    <>
    <div className="div__background">
    <video loop autoPlay width="100%">
    <source src={video} type="video/mp4" />
    </video> 
    <Inspiration></Inspiration>
     <div className="div__question__wrapper"> 
       <h1 className='question'>¿Quieres ganar un 15% de descuento en tu siguiente tatuaje?</h1>
     </div>
     <QuestionComponent></QuestionComponent>
    </div>
     
    </>
  )
};

export default About;
