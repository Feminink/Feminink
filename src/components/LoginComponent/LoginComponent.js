import PropTypes from "prop-types";
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
// IMPORT FORMIK
import { useFormik } from "formik";
// IMPORT STYLES
import "./LoginComponent.scss";
//IMPORT LOGO
import logo from "../../assets/images/footer-logo.svg";

const LoginComponent = () => {
  const { user } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();

  // FUNCIÓN PARA SETEAR LOS ERRORES EN CADA INPUT
  const validate = (values) => {
    const errors = {
      email: "",
      password: "",
    };
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "This is not an email address";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // FUNCIÓN PARA ENVIAR LOS DATOS AL BACK
  function onClickLogin() {
    if (formik.values.email && formik.values.password) {
      return dispatch(
        doLogin({
          email: formik.values.email,
          password: formik.values.password,
        })
      );
    } else {
      alert("Something went wrong. Check your credentials and try again");
    }
  }
  if (user && user.id) {
    return <Navigate to="/profile" replace></Navigate>;
  }

  return (
    <section className="section__login section">
      <div className="container">
        <form
          id="loginForm"
          className="form"
          onSubmit={formik.handleSubmit}
          noValidate
        >
          <header>
            <h2 className="form__title h2">Iniciar sesión</h2>
            <img src={logo} className="footer__logo img" alt="logo" />
          </header>
          <div className="form__container">
            <div className="form__group">
              <input
                className="form__input"
                id="email"
                type="email"
                placeholder=" "
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
              <label className="form__label">Email</label>
              <span className="form__line"></span>
            </div>
            <div className="form__group">
              <input
                className="form__input"
                id="password"
                type="password"
                placeholder=" "
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
              <label className="form__label">Password</label>
              <span className="form__line"></span>
            </div>
          </div>
          <p className="not-member__p p">
            Not a member yet? <Link to="/signup">Register now</Link>
          </p>
          <button
            type="submit"
            form="loginForm"
            className="form__submit"
            onClick={onClickLogin}
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};
LoginComponent.propTypes = {};

LoginComponent.defaultProps = {};

export default LoginComponent;
