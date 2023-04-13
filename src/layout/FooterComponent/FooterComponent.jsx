import React from "react";

/* IMPORT STYLES */
import "./FooterComponent.scss";

/* IMPORT LINK REACT ROUTER */
import { Link } from 'react-router-dom';

/* IMPORT LOGO */
import logo from '../../assets/images/footer-logo.svg';

const FooterComponent = () => {

  /* GET CURRENT YEAR FUNCTION */
  const getCurrentYear = () => {
    return new Date().getFullYear();
}

  return (
    /* START FOOTER */
    <footer className="footer">
      <section className="footer__section section">
        <div className="footer__container container">
          <hr className="hr"/>
          <nav className="footer__nav nav">
            <div className="footer-nav__column">
              <Link to="/" className="footer__logo-link link">
                <img src={logo} className='footer__logo img' alt='logo'/>
              </Link>
            </div>
            <div className="footer-nav__column">
              <h4 className="footer-nav__h4 h4">Site map</h4>
              <ul className="footer-nav__ul ul">
                <li className="footer-nav__li li"><Link to="/home" className="footer-nav__link link">Home</Link></li>
                <li className="footer-nav__li li"><Link to="/gallery" className="footer-nav__link link">Gallery</Link></li>
                <li className="footer-nav__li li"><Link to="/about" className="footer-nav__link link">About</Link></li>
                <li className="footer-nav__li li"><Link to="/contact" className="footer-nav__link link">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-nav__column">
              <h4 className="footer-nav__h4 h4">Nuestras tiendas</h4>
              <ul className="footer-nav__ul">
                <li className="footer-nav__li li"><Link to="#" className="footer-nav__link link">Madrid</Link></li>
                <li className="footer-nav__li li"><Link to="#" className="footer-nav__link link">Barcelona</Link></li>
                <li className="footer-nav__li li"><Link to="#" className="footer-nav__link link">Valencia</Link></li>
                <li className="footer-nav__li li"><Link to="#" className="footer-nav__link link">Cádiz</Link></li>
                <li className="footer-nav__li li"><Link to="#" className="footer-nav__link link">Cerdeña</Link></li>
              </ul>
            </div>
            <div className="footer-nav__column">
              <h4 className="footer-nav__h4 h4">Follow Us</h4>
              <ul className="footer-nav__ul">
                <li className="footer-nav__li li"><Link to="#" className="footer-nav__link link">Instagram</Link></li>
                <li className="footer-nav__li li"><Link to="#" className="footer-nav__link link">Twitter</Link></li>
                <li className="footer-nav__li li"><Link to="#" className="footer-nav__link link">Facebook</Link></li>
                <li className="footer-nav__li li"><Link to="#" className="footer-nav__link link">LinkedIn</Link></li>
                <li className="footer-nav__li li"><Link to="#" className="footer-nav__link link">Github</Link></li>
              </ul>
            </div>
          </nav>
        </div>  
      </section>
      <section className="footer__section footer__section--info section">
        <div className="footer__container footer__container--info container">
          <nav className="footer__info-nav nav">
            <div className="footer__copyright">
              <p className="footer-copyright__p p">© {getCurrentYear()} Feminink. All Rights Reserved</p>
            </div>
            <ul className="legal-nav__ul ul">
              <li className="legal-nav__li li"><Link to="#" className="legal-nav__link link">Cookies</Link></li>
              <li className="legal-nav__li li"><Link to="#" className="legal-nav__link link">Aviso legal</Link></li>
              <li className="legal-nav__li li"><Link to="#" className="legal-nav__link link">Política de privacidad</Link></li>
              <li className="legal-nav__li li"><Link to="#" className="legal-nav__link link">Condiciones de Uso en RR.SS</Link></li>
              <li className="legal-nav__li li"><Link to="#" className="legal-nav__link link">Política de Privacidad en RR.SS</Link></li>
            </ul>
          </nav>
        </div>
      </section>
    </footer>
    /* END FOOTER */
  )
};

export default FooterComponent;
