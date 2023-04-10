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
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password !== user.password) {
      errors.password = "Invalid password";
    }

    return errors;
  };

  function onClickLogin() {
    if (formik.values !== user || user.id) {
      return dispatch(
        doLogin({ email: formik.email, password: formik.password })
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
      <form className="form flex" onSubmit={formik.handleSubmit}>
        <fieldset>
          <label>Email</label>
          <input
            id="email"
            type="email"
            placeholder="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
          <label>Password</label>
          <input
            id="password"
            type="password"
            placeholder="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </fieldset>
        <p>
          Not a member yet? <Link to="/registration">Register now</Link>
        </p>
        <button type="submit" className="loginButton" onClick={onClickLogin}>
          Login
        </button>
      </form>
    </div>
  );
};
LoginComponent.propTypes = {};

LoginComponent.defaultProps = {};

export default LoginComponent;
