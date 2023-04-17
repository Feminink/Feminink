import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NotFoundComponent.scss";
// IMPORT LINK
import { Link } from "react-router-dom";
// IMPORT USESOUND HOOK
import useSound from "use-sound";
import click from "../../assets/sounds/mixkit-gate-latch-click-1924.wav";

const NotFoundComponent = () => {
  const [play] = useSound(click);

  return (
    <div className="bg">
      <div className="notfound__content">
        <h1>Woops!</h1>
        <h2>Looks like we run out of ink...</h2>
      </div>
      <Link to="/">
        <button onClick={play} className="form__submit notfound__button">
          Back to the Homepage
        </button>
      </Link>
    </div>
  );
};

NotFoundComponent.propTypes = {};

NotFoundComponent.defaultProps = {};

export default NotFoundComponent;
