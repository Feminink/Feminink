import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NotFoundComponent.scss";
import { Link } from "react-router-dom";

const NotFoundComponent = () => {
  return (
    <div className="bg">
      <div className="notfound__content">
        <h1>Ooops!</h1>
        <h2>Parece que nos hemos quedado sin tinta...</h2>
        <h3>Vuelve a intentarlo más tarde</h3>
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
