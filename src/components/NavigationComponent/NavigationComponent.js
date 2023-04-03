// IMPORT LINK,
import { Link } from "react-router-dom";
// IMPORT USE SELECTOR
import { useDispatch, useSelector } from "react-redux";
// IMPORT API CALL DO LOGOUT
import { doLogout } from "../../store/auth/actions";
import React from "react";
import PropTypes from "prop-types";
import "./NavigationComponent.scss";

const NavigationComponent = () => {
  const { user } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();

  function onClickLogout() {
    dispatch(doLogout());
  }
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
         <Link to="/inspiration">Our Inspiration</Link>
        </li>
        {user && user.id ? (
          ""
        ) : (
          <li className="nav-li">
            <Link to="/login">Login</Link>
          </li>
        )}
        {user && user.id ? (
          <li className="nav-li">
            <Link to="/profile">Profile</Link>
          </li>
        ) : (
          ""
        )}
        {user && user.id ? (
          <li className="nav-li">
            <Link to="/" onClick={onClickLogout}>
              Logout
            </Link>
          </li>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
};

NavigationComponent.propTypes = {};

NavigationComponent.defaultProps = {};

export default NavigationComponent;
