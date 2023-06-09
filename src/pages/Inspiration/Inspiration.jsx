import React from "react";
import InspirationComponent from "../../components/InspirationComponent/InspirationComponent";

import machine from "../../assets/images/machine.png";
import rose from "../../assets/images/rose.png";

import "./Inspiration.scss";
const title = "From the circus to... Tattoo studios";
const Inspiration = () => {
  return (
    <div className="container">
      <div className="div__design">
        <img
          className="div__design__icon"
          src={machine}
          alt="machine icon"
        ></img>
        <h1 className="title">{title}</h1>
        <img className="div__design__icon" src={rose} alt="machine icon"></img>
      </div>
      <InspirationComponent></InspirationComponent>
    </div>
  );
};

export default Inspiration;
