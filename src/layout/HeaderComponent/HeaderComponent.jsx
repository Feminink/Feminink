import React from 'react'

// IMPORT STYLES
import "./HeaderComponent.scss";

// IMPORT COMPONENTS
import NavigationComponent from '../../components/NavigationComponent/NavigationComponent';

// IMPORT LINK REACT ROUTER
import { Link } from 'react-router-dom';

// IMPORT LOGO
import logo from '../../assets/images/header-logo.svg';

const HeaderComponent = () => {
  return (
    <header className='header'>
      <div className='header__container container'>
        <nav className='header__nav nav'>
          <div className='header__logo'>
            <Link className='header-logo__link link' to='/'>
              <img src={logo} className='header__logo img' alt='logo'/>
            </Link>
          </div>
          <NavigationComponent></NavigationComponent>
        </nav>
      </div>
    </header>
  )
}

export default HeaderComponent