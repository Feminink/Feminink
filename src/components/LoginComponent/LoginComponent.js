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

  // FUNCIÓN PARA ENVIAR LOS DATOS AL BACK
  function onClickLogin() {
    if (
      formik.values.email &&
      // user.email &&
      formik.values.password 
      // user.password
    ) {
      return dispatch(
        doLogin({ email: formik.values.email, password: formik.values.password })
      );
    }
  }

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

  if (user && user.id) {
    return <Navigate to="/profile" replace></Navigate>;
  }
  return (
    <div className="container bg">
      <form
        id="loginForm"
        className="form flex"
        onSubmit={formik.handleSubmit}
        noValidate
      >
        <fieldset className="form__group">
          <label className="form__label">Email</label>
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
          <label className="form__label">Password</label>
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
          <span className="form__line"></span>
        </fieldset>
        <p>
          Not a member yet? <Link to="/signup">Register now</Link>
        </p>
        <button type="submit" form="loginForm" className="form__submit" onClick={onClickLogin}>
   Login
 </button>
      </form>
     
     
     
    </div>
  );
};
LoginComponent.propTypes = {};

LoginComponent.defaultProps = {};

export default LoginComponent;
