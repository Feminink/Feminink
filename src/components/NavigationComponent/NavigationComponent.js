// IMPORT LINK
import { Link } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import "./NavigationComponent.scss";

const NavigationComponent = () => {
  return (
    <nav className="nav">
      <ul className="nav-ul">
        <li className="nav-li">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-li">
          <Link to="/multi">Multi</Link>
        </li>
        <li className="nav-li">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-li">
          <Link to="/login">Login</Link>
        </li>
        <li className="nav-li">
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

NavigationComponent.propTypes = {};

NavigationComponent.defaultProps = {};

export default NavigationComponent;
