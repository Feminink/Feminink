import React, { useState } from "react";

// IMPORT LINK REACT ROUTER
import { Link } from "react-router-dom";

// IMPORT REDUX
import { useDispatch, useSelector } from "react-redux";

// IMPORT LOGOUT FUNCTION
import { doLogout } from "../../store/auth/actions";

// IMPORT FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faCircleUser,
  faArrowRightToBracket,
  faHouse,
  faImages,
  faUserGroup,
  faEnvelope,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

// IMPORT STYLES
import "./NavigationComponent.scss";

import PropTypes from "prop-types";

const NavigationComponent = () => {
  const { user } = useSelector((state) => state.AuthReducer);
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  // IMPORT TOGGLE FUNCTION
  function toggleMenu() {
    const body = document.querySelector("body");
    body.classList.toggle("menu-open");
    setMenuOpen(!menuOpen);
  }

  // IMPORT TOGGLE + LOGOUT FUNCTION
  function onClickLogout() {
    toggleMenu();
    dispatch(doLogout());
  }

  return (
    <>
      <div
        className={`header__show-menu ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <i className="show-menu__bar"></i>
        <i className="show-menu__bar"></i>
        <i className="show-menu__bar"></i>
      </div>
      <nav className={`header__main-nav nav ${menuOpen ? "open" : ""}`}>
        <ul className="main-nav__ul ul">
          <li className="main-nav__li li">
            <Link className="main-nav__link link" onClick={toggleMenu} to="/">
              <FontAwesomeIcon icon={faHouse} size="sm" /> Home
            </Link>
          </li>
          <li className="main-nav__li li">
            <Link
              className="main-nav__link link"
              onClick={toggleMenu}
              to="/gallery"
            >
              <FontAwesomeIcon icon={faImages} size="sm" /> Gallery
            </Link>
          </li>
          <li className="main-nav__li li">
            <Link
              className="main-nav__link link"
              onClick={toggleMenu}
              to="/about"
            >
              <FontAwesomeIcon icon={faUserGroup} size="sm" /> About
            </Link>
          </li>
          {user && user.isAdmin ? (
            <li className="main-nav__li li">
              <Link
                className="main-nav__link link"
                onClick={toggleMenu}
                to="/messages"
              >
                <FontAwesomeIcon icon={faMessage} size="sm" /> Messages
              </Link>
            </li>
          ) : (
            ""
          )}
          <li className="main-nav__li li">
            <Link
              className="main-nav__link link"
              onClick={toggleMenu}
              to="/contact"
            >
              <FontAwesomeIcon icon={faEnvelope} size="sm" /> Contact
            </Link>
          </li>
          {user && user.id ? (
            ""
          ) : (
            <li className="main-nav__li main-nav__li--login li">
              <Link
                className="main-nav__link link"
                onClick={toggleMenu}
                to="/login"
              >
                <FontAwesomeIcon icon={faArrowRightToBracket} size="sm" /> Login
              </Link>
            </li>
          )}
          {user && user.id ? (
            ""
          ) : (
            <li className="main-nav__li main-nav__li--signup li">
              <Link
                className="main-nav__link link"
                onClick={toggleMenu}
                to="/signup"
              >
                <FontAwesomeIcon icon={faArrowRightToBracket} size="sm" /> Sign
                Up
              </Link>
            </li>
          )}
          {user && user.id ? (
            <li className="main-nav__li main-nav__li--profile li">
              <Link
                className="main-nav__link link"
                onClick={toggleMenu}
                to="/profile"
              >
                <FontAwesomeIcon icon={faCircleUser} /> | Hello, {user.name}!
              </Link>
            </li>
          ) : (
            ""
          )}
          {user && user.id ? ( 
          <li className="main-nav__li main-nav__li--logout li">
            <Link
              className="main-nav__link link"
              to="/"
              onClick={onClickLogout}
            >
              <FontAwesomeIcon icon={faArrowRightFromBracket} size="sm" />{" "}
              Logout
            </Link>
          </li>
         ) : ("")}
        </ul>
      </nav>
    </>
  );
};

NavigationComponent.propTypes = {};

NavigationComponent.defaultProps = {};

export default NavigationComponent;