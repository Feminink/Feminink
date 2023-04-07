// IMPORT NAVIGATE
import { Navigate } from "react-router";
// IMPORT USE STATE
import React, { useState } from "react";
import "./LoginComponent.scss";
// IMPORT USE SELECTOR, USE DISPATCH
import { useDispatch, useSelector } from "react-redux";
// IMPORT API CALL DO LOGIN
import { doLogin } from "../../store/auth/actions";
// IMPORT LINK
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// IMPORT STYLES
import "./LoginComponent.scss";

const LoginComponent = () => {
  const { user } = useSelector((state) => state.AuthReducer);
  const [username, setUsername] = useState("LauraW");
  const [password, setPassword] = useState("randompwd");
  const dispatch = useDispatch();

  function onClickLogin() {
    dispatch(doLogin({ username: username, password: password }));
  }

  if (user && user.id) {
    return <Navigate to="/profile" replace></Navigate>;
  }
  return (
    <div className="container">
      <form className="form flex">
        <fieldset>
          <label>Username</label>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </fieldset>
      </form>
      <button className="loginButton" onClick={onClickLogin}>
        Login
      </button>
      <h3>
        Not a member yet? <Link to="/registration">Register now</Link>
      </h3>
    </div>
  );
};

LoginComponent.propTypes = {};

LoginComponent.defaultProps = {};

export default LoginComponent;
