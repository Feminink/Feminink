import React from "react";
import PropTypes from "prop-types";

// IMPORT STYLES
import "./RegistrationComponent.scss";

const RegistrationComponent = () => {
  return (
    <form>
      <fieldset>
        <input type="text" placeholder="First Name"></input>
      </fieldset>
      <fieldset>
        <input type="text" placeholder="Last Name"></input>
      </fieldset>
      <fieldset>
        <input type="email" placeholder="Email address"></input>
      </fieldset>
      <fieldset>
        <input type="password" placeholder="Choose a password"></input>
      </fieldset>
      <fieldset>
        <input type="password" placeholder="Repeat password"></input>
      </fieldset>
      <button className="button submitButton">Submit</button>
    </form>
  );
};

RegistrationComponent.propTypes = {};

RegistrationComponent.defaultProps = {};

export default RegistrationComponent;