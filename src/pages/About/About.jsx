import React from "react";
import Inspiration from "../Inspiration/Inspiration";
import video from "../../assets/images/video.mp4";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// IMPORT COMPONENT
const About = () => {
  const { user } = useSelector((state) => state.AuthReducer);

  return (
    <>
      <div className="div__background">
        <video loop autoPlay width="100%">
          <source src={video} type="video/mp4" />
        </video>
        <Inspiration></Inspiration>
        <div className="div__question__wrapper">
          {user && user.id ? (
            <Link to="/quiz">
              {" "}
              <h1 className="question">
                Want to earn 15% off your next tattoo?
              </h1>
            </Link>
          ) : (
            <Link to="/signup">
              {" "}
              <h1 className="question">
                Want to earn 15% off your next tattoo?
              </h1>
            </Link>
          )}
          <h2 className="question">Get our quiz right on the first try!</h2>
        </div>
      </div>
    </>
  );
};

export default About;
