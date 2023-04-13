import PropTypes from "prop-types";
// IMPORT STYLES
import "./RegistrationComponent.scss";
// IMPORTS FROM FORMIK
import { useFormik } from "formik";
// IMPORTS FROM REACT-REDUX
import { useDispatch, useSelector } from "react-redux";
// IMPORT FROM STORE
import { getUsers } from "../../store/gallery/actions";
import { doRegistration} from "../../store/gallery/actions";
import { Link, Navigate } from "react-router-dom";

// IMPORT LOGO
import logo from '../../assets/images/footer-logo.svg';

// IMPORT YUP
// import * as Yup from "yup";

const RegistrationComponent = () => {
  const { user } = useSelector((state) => state.GalleryReducer);
  const dispatch = useDispatch();

  const sendRegistration = () => {
    if (
      formik.values.name &&
      formik.values.surname &&
      formik.values.birthday &&
      formik.values.email &&
      formik.values.password &&
      formik.values.repassword
    ) {
      dispatch(
        doRegistration({
          name: formik.values.name,
          surname: formik.values.surname,
          birthday: formik.values.birthday,
          email: formik.values.email,
          password: formik.values.password,
          repassword: formik.values.repassword,
        })
      );
    }
  };

  const validate = (values) => {
    const errors = {
      name: "",
      surname: "",
      birthday: "",
      email: "",
      password: "",
      repassword: "",
    };

    // ERROR NAME
    if (!values.name) {
      errors.name = "You should add at least one character";
    }
    // ERROR SURNAME
    if (!values.surname) {
      errors.surname = "You should add at least one character";
    }
    // ERROR BIRTHDAY
    if (!values.birthday) {
      errors.birthday = "Please select your date of birth";
    }

    // ERROR EMAIL
    if (!values.email) {
      errors.email = "Please select an email address";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    // ERROR PASSWORD
    if (values.password.length < 9) {
      errors.password = "Must be 9 characters or more";
    } else if (values.password === "12345678") {
      errors.password = "Cannot be 12345678 !!!";
    }

    // ERROR REPEAT-PASSWORD
    if (values.repassword !== values.password) {
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
      password: "",
      repassword: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <section className='section__signup section'>
      <form
        id="registrationForm"
        className="form flex"
        onSubmit={formik.handleSubmit}
        noValidate
      >
        <header className="form__title h2">
          <h2>Register now</h2>
          <img src={logo} className='footer__logo img' alt='logo'/>
        </header>
        <div className='form__container'>
          <div className="form__group">
            <input
              className="form__input"
              id="name"
              name="name"
              type="text"
              placeholder=" "
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
            <label className="form__label">Name</label>
            <span className='form__line'></span>
          </div>
          <div className="form__group">
            <input
              className="form__input"
              id="surname"
              name="surname"
              type="text"
              placeholder=" "
              value={formik.values.surname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.surname && formik.errors.surname ? (
              <div className="error">{formik.errors.surname}</div>
            ) : null}
            <label className="form__label">Surname</label>
            <span className='form__line'></span>
          </div>
          <div className="form__group">
            <input
              className="form__input"
              id="birthday"
              name="birthday"
              type="date"
              placeholder=" "
              value={formik.values.birthday}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.birthday && formik.errors.birthday ? (
              <div className="error">{formik.errors.birthday}</div>
            ) : null}
            <label className="form__label">Date of birth</label>
            <span className='form__line'></span>
          </div>
          <div className="form__group">
            <input
              className="form__input"
              id="email"
              name="email"
              type="email"
              placeholder=" "
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
            <label className="form__label">Email</label>
            <span className='form__line'></span>
          </div>
          <div className="form__group">
            <input
              className="form__input"
              id="password"
              name="password"
              type="password"
              placeholder=" "
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
            <label className="form__label">Password</label>
            <span className='form__line'></span>
          </div>
          <div className="form__group">
            <input
              className="form__input"
              id="repassword"
              name="repassword"
              type="password"
              placeholder=" "
              value={formik.values.repassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.repassword && formik.errors.repassword ? (
              <div className="error">{formik.errors.repassword}</div>
            ) : null}
            <label className="form__label">Repeat password</label>
            <span className="form__line"></span>
          </div>
        </div>
        <p>
          Already have an account? <Link to="/login ">Login here</Link>
        </p>
        <button
          className="form__submit"
          form="registrationForm"
          onClick={sendRegistration}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

RegistrationComponent.propTypes = {};

RegistrationComponent.defaultProps = {};

export default RegistrationComponent;
