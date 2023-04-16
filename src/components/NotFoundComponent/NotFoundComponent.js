import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NotFoundComponent.scss";
// IMPORT LINK
import { Link } from "react-router-dom";

const NotFoundComponent = () => {
  return (
    <div className="bg">
      <div className="notfound__content">
        <h1>Woops...</h1>
        <h2>Looks like we run out of ink...</h2>
        <h3>Try again later</h3>
      </div>
      <Link to="/">
        <button className="form__submit notfound__button">Homepage</button>
      </Link>
    </div>
  );
};

NotFoundComponent.propTypes = {};

NotFoundComponent.defaultProps = {};

export default NotFoundComponent;
