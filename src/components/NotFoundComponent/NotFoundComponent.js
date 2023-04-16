import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NotFoundComponent.scss";
// IMPORT LINK
import { Link } from "react-router-dom";

const NotFoundComponent = () => {
  return (
    <div className="bg">
      <div className="notfound__content">
        <h1>Woops!</h1>
        <h2>Looks like we run out of ink...</h2>
      </div>
      <Link to="/">
        <button className="form__submit notfound__button">
          Back to the Homepage
        </button>
      </Link>
    </div>
  );
};

NotFoundComponent.propTypes = {};

NotFoundComponent.defaultProps = {};

export default NotFoundComponent;
