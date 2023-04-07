import React from "react";
import PropTypes from "prop-types";
// IMPORT STYLES
import "./RegistrationComponent.scss";
// IMPORT FORMIK
import { useFormik } from "formik";

const RegistrationComponent = () => {
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "You should add at least one character";
    }

    if (!values.surname) {
      errors.surname = "You should add at least one character";
    }

    if (!values.email) {
      errors.email = "You should add at least one character";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 9) {
      errors.password = "Must be 9 characters or more";
    } else if (values.password === "12345678") {
      errors.password = "Cannot be 12345678 !!!";
    }

    if (!values.repassword) {
      errors.repassword = "Required";
    } else if (values.repassword !== values.password) {
      errors.repassword = "Passwords must match";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      birthday: "",
      email: "",
      telephone: "",
      password: "",
      repassword: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="container flex bg">
      <h1>Register:</h1>
      <form className="form flex" onSubmit={formik.handleSubmit}>
        <fieldset className="container flex">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
          <input
            id="surname"
            name="surname"
            type="text"
            placeholder="Surname"
            value={formik.values.surname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.surname && formik.errors.surname ? (
            <div className="error">{formik.errors.surname}</div>
          ) : null}
          <input
            id="birthday"
            name="birthday"
            type="date"
            placeholder="Date of birth"
            value={formik.values.birthday}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.birthday && formik.errors.birthday ? (
            <div className="error">{formik.errors.birthday}</div>
          ) : null}
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
          <input
            id="telephone"
            name="telephone"
            type="telephone"
            placeholder="Telephone"
            value={formik.values.telephone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.telephone && formik.errors.telephone ? (
            <div className="error">{formik.errors.telephone}</div>
          ) : null}
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Choose a password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
          <input
            id="repassword"
            name="repassword"
            type="password"
            placeholder="Repeat password"
            value={formik.values.repassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.repassword && formik.errors.repassword ? (
            <div className="error">{formik.errors.repassword}</div>
          ) : null}
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

RegistrationComponent.propTypes = {};

RegistrationComponent.defaultProps = {};

export default RegistrationComponent;
