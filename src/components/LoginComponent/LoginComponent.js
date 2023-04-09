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
  const [email, setEmail] = useState("laurao@mail.com");
  const [password, setPassword] = useState("randompwd");
  const dispatch = useDispatch();

  function onClickLogin() {
    dispatch(doLogin({ email: email, password: password }));
  }

  if (user && user.id) {
    return <Navigate to="/profile" replace></Navigate>;
  }
  return (
    <div className="container bg">
      <form className="form flex">
        <fieldset>
          <label>Email</label>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button className="loginButton" onClick={onClickLogin}>
            Login
          </button>
        </fieldset>
        <p>
          Not a member yet? <Link to="/registration">Register now</Link>
        </p>
      </form>
    </div>
  );
};

LoginComponent.propTypes = {};

LoginComponent.defaultProps = {};

export default LoginComponent;
