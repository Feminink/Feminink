import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./SingleMessage.scss";

//IMPORT USESELECTOR
import { useDispatch, useSelector } from "react-redux";

//IMPORT FONTAWESEOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faTrash,
  faQuoteLeft,
  faQuoteRight,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

//IMPORT ACTION TO DELETE
import { deleteMessage } from "../../store/Tattoo/actions";

//IMPORT LINK
import { Link } from "react-router-dom";
import mermaidn from "../../assets/images/mermaidn.png";

const SingleMessage = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.TattooReducer);
  const { user } = useSelector((state) => state.AuthReducer);

  const removeMessage = (message) => {
    dispatch(deleteMessage(message.id));
  };

  return (
    <>
      <section className="section__single-message section">
        <div className="single-message__header">
          {user && user.isAdmin ? (
            <div className="container">
              <h2>
                Tus tatuajes molan un montón, {message.artist}, asi que vas a
                hacerle uno muy cool a {message.name}!
              </h2>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="single-message__body container">
          <div className="single-message__text">
            {user && user.isAdmin ? (
              <>
                <h3>From: {message.name}</h3>
                <h4>To: {message.artist}</h4>
                <h4 className="">Email: {message.email}</h4>
                <h4 className="">Message: </h4>
                <p className="">
                  <FontAwesomeIcon icon={faQuoteLeft} size="lg" />{" "}
                  {message.description}{" "}
                  <FontAwesomeIcon icon={faQuoteRight} size="lg" />
                </p>
                <h4 className="">
                  {" "}
                  <FontAwesomeIcon
                    icon={faPalette}
                    style={{ color: message.color }}
                  />{" "}
                  {message.color}{" "}
                </h4>
                <div className="single-message__links">
                  <Link className="link" to="/profile">
                    <FontAwesomeIcon icon={faBackward} /> Go back
                  </Link>
                  <Link className="link" to="/profile">
                    <button
                      onClick={(e) => removeMessage(message)}
                      className="delete"
                    >
                      <FontAwesomeIcon
                        className="delete__icon"
                        icon={faTrash}
                      />{" "}
                      Borrar
                    </button>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <h3>From: {message.artist}</h3>
                <h4>To: {message.name}</h4>
                <h4 className="">Email: {message.email}</h4>
                <h4 className="">Date of appointment: {message.date}</h4>
                <h4 className="">Message: </h4>
                <p className="">
                  <FontAwesomeIcon icon={faQuoteLeft} size="lg" />{" "}
                  {message.description}{" "}
                  <FontAwesomeIcon icon={faQuoteRight} size="lg" />
                </p>
                <div className="single-message__links">
                  <Link className="link" to="/profile">
                    <FontAwesomeIcon icon={faBackward} /> Go back
                  </Link>
                  <Link className="link" to="/profile">
                    <button
                      onClick={(e) => removeMessage(message)}
                      className="delete"
                    >
                      <FontAwesomeIcon
                        className="delete__icon"
                        icon={faTrash}
                      />{" "}
                      Delete
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
          <div className="single-message__image">
            <img src={mermaidn} className="div__img__image" alt="mermaid" />
          </div>
        </div>
        <div className="single-message__contact container">
          {user && user.isAdmin ? (
            <h3>
              Send an email to{" "}
              <Link to="/profile" style={{ color: message.color }}>
                {message.name}
              </Link>
            </h3>
          ) : (
            <h3>
              Send an email to{" "}
              <Link to="/contact" style={{ color: message.color }}>
                {message.artist}
              </Link>
            </h3>
          )}
        </div>
      </section>
    </>
  );
};

SingleMessage.propTypes = {};

SingleMessage.defaultProps = {};

export default SingleMessage;
