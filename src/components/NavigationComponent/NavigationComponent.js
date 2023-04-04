import React, { useState } from 'react';

// IMPORT LINK
import { Link } from "react-router-dom";

// IMPORT USE SELECTOR
import { useDispatch, useSelector } from "react-redux";

// IMPORT API CALL DO LOGOUT
import { doLogout } from "../../store/auth/actions";

// IMPORT STYLES
import "./NavigationComponent.scss";

// IMPORT FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faUser, faArrowRightToBracket, faHouse, faImages, faUserGroup } from '@fortawesome/free-solid-svg-icons';



import PropTypes from "prop-types";

const NavigationComponent = () => {
  
  const { user } = useSelector((state) => state.AuthReducer);

  const [menuOpen, setMenuOpen] = useState(false);

  const dispatch = useDispatch();

  // TOGGLE FUNCTION
  function toggleMenu() {
    const body = document.querySelector('body');
    body.classList.toggle('menu-open');
    setMenuOpen(!menuOpen);
  }

  // LOGOUT FUNCTION
  function onClickLogout() {
    toggleMenu();
    dispatch(doLogout());
  }

  return (
    <>
      <div class="header__show-menu" onClick={toggleMenu}>
				<i className="show-menu__bar"></i>
				<i className="show-menu__bar"></i>
				<i className="show-menu__bar"></i>
			</div>
      <nav className="header__main-nav nav">
        <ul className="main-nav__ul ul">
          <li className="main-nav__li li">
            <Link className="main-nav__link link" onClick={toggleMenu} to="/">
              <FontAwesomeIcon icon={faHouse} size="xs" /> Home
            </Link>
          </li>
          <li className="main-nav__li li">
            <Link className="main-nav__link link" onClick={toggleMenu} to="/multi">
              <FontAwesomeIcon icon={faImages} size="xs" /> Multi
            </Link>
          </li>
          <li className="main-nav__li li">
            <Link className="main-nav__link link" onClick={toggleMenu} to="/about">
            <FontAwesomeIcon icon={faUserGroup} size="xs" /> About
            </Link>
          </li>
          {user && user.id ? ("") : (<li className="main-nav__li main-nav__li--login li"><Link className="main-nav__link link" onClick={toggleMenu} to="/login"><FontAwesomeIcon icon={faArrowRightToBracket} size="xs"/> Login</Link></li>)}
          {user && user.id ? (<li className="main-nav__li li"><Link className="main-nav__link link" onClick={toggleMenu} to="/profile"><FontAwesomeIcon icon={faUser} size="xs" /> Profile</Link></li>) : ("")}
          {user && user.id ? (<li className="main-nav__li main-nav__li--logout li"><Link className="main-nav__link link" to="/" onClick={onClickLogout}><FontAwesomeIcon icon={faArrowRightFromBracket} size="xs" /> Logout</Link></li>) : ("")}
        </ul>
      </nav>
    </>
  );
};

NavigationComponent.propTypes = {};

NavigationComponent.defaultProps = {};

export default NavigationComponent;
