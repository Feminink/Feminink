import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Contact2Component.scss";
import { getInfo } from "../../store/info/actions";
import  './Contact2Component.scss';

// IMPORT SWEET ALERT LIBRARY
import swal from "sweetalert";

// IMPORT FUNCIÖN DE CONTACTAR
import { doContact2 } from "../../store/Tattoo/actions";

//IMPORT HOOKS
import { useDispatch, useSelector } from "react-redux";

//IMPORT HOOK FORMIK
import { useFormik } from "formik";

// IMPORT LOGO
import logo from '../../assets/images/footer-logo.svg';

const ContactComponent = () => {

    const dispatch = useDispatch();
    const {user} = useSelector((state)=> state.AuthReducer)
    const { info, loadinginfo } = useSelector((state) => state.InfoReducer);

    useEffect(() => {
        dispatch(getInfo());
    }, []);

    const sendForm = () => {
        if (
            formik.values.artist &&
            formik.values.name &&
            formik.values.email &&
            formik.values.date &&
            formik.values.description &&
            formik.values.isUser
        ) {
        dispatch(
            doContact2({
                artist: formik.values.artist,
                name: formik.values.name,
                email: formik.values.email,
                date: formik.values.date,
                description: formik.values.description,
                isUser: formik.values.isUser
            })
        );
        swal("Hurray!", "Message sent successfully", "success");
          formik.resetForm(); // Resetea los valores del formulario
      } else {
        swal("Woops:", "you must complete all the fields", "warning");
      }
    };

    const validate = (values) => {
        const errors = {
            artist: "",
            name: "",
            email: "",
            date: "",
            description: "",
            isUser: true
        };
        // ERROR NAME
        if (!values.name) {
            errors.name = "Required";
        } else if (values.name.length < 3) {
            errors.name = "Nombres de dos letras hay, pero pocos";
        }
        // ERROR EMAIL
        if (!values.email) {
            errors.email = "Please select an email address";
        } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
            errors.email = "Invalid email address";
        }
        // ERROR DESCRIPTION
        if (!values.description) {
            errors.description = "Required";
        } else if (values.description.length > 50) {
            errors.description = "Máximo 50 caracteres";
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            artist: user.artist,
            name: "",
            email: user.email,
            date: "",
            description: "",
            isUser: true
        },
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    if (loadinginfo) {
        return <p>"Loading..."</p>;
    }

    return (
    <section className='section__contact-profile section'>
        <form onSubmit={formik.handleSubmit} className='form' noValidate> 
            <header className='form__title h2'> 
                <h2>Contacta con clientes</h2>
                <img src={logo} className='footer__logo img' alt='logo'/>
            </header>
            <div className='form__container'>
                <div className="form__group">
                    <select className='form__input'
                        name="artist"
                        value={formik.values.artist}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required>
                        {info && info.admins?.map((member) => {
                            return (
                                <option key={member.id} value={member.name}>
                                    {member.name}
                                </option>
                            );
                        })}
                    </select>
                    <label className="form__label">Artist</label>
                    <span className="form__line"></span>
                </div>
                <div className="form__group">
                    <input className='form__input'
                    name="name"
                    type="text"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder= " "
                    required
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className="error">{formik.errors.name}</div>
                    ) : null}
                    <label className='form__label'>Client name </label>
                    <span className='form__line'></span>
                </div>
                <div className="form__group">
                    <input className='form__input'
                        name="email"
                        type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder= " "
                        required
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="error">{formik.errors.email}</div>
                    ) : null}
                    <label className='form__label'>Email </label>
                    <span className='form__line'></span>
                </div>
                <div className="form__group">
                    <input
                    className="form__input"
                    id="date"
                    name="date"
                    type="date"
                    placeholder=" "
                    value={formik.values.date}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                    />
                    {formik.touched.date && formik.errors.date ? (
                    <div className="error">{formik.errors.date}</div>
                    ) : null}
                    <label className="form__label">Appointment date</label>
                    <span className='form__line'></span>
                </div>
                <div className="form__group">
                    <textarea className='form__input'
                        name="description"
                        type="text"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder= " "
                        required>
                    </textarea>
                    {formik.touched.description && formik.errors.description ? (
                    <div className="error">{formik.errors.description}</div>
                    ) : null}
                    <label className='form__label'>Message description</label>
                    <span className='form__line'></span>
                </div>
                <button className="form__submit" form="contactForm" onClick={sendForm}>Send</button>
            </div>
        </form>
    </section>
  );
};

ContactComponent.propTypes = {};

ContactComponent.defaultProps = {};

export default ContactComponent;