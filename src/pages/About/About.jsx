import React from "react";
import Inspiration from "../Inspiration/Inspiration";
import video from '../../assets/images/video.mp4'

// IMPORT COMPONENT
const About = () => {
  return (
    <>
    <div className="div__background">
    <video loop autoPlay width="100%">
    <source src={video} type="video/mp4" />
  </video> 
    <Inspiration></Inspiration>
    </div>
     
    </>
  )
};

export default About;
