import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// IMPORT GETINFO FUNCTION
import { getInfo } from "../../store/info/actions";

// IMPORT REDUX
import { useDispatch, useSelector } from "react-redux";

// IMPORT STYLES
import "./InspirationComponent.scss";

// IMPORT FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const InspirationComponent = () => {
  const [accordionState, setAccordionState] = useState({});
  const dispatch = useDispatch();
  const { info, loadingInfo } = useSelector((state) => state.InfoReducer);

  useEffect(() => {
    dispatch(getInfo());
  }, []);

  // TOGGLE FUNCTION
  const toggleAccordion = (id) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  if (loadingInfo) {
    return (
      <div className="container">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <>
      <section className="div__inspiration">
        <ul className="inspiration__ul ul">
          {info &&
            info.inspiration &&
            info.inspiration.map((woman) => {
              return (
                <li className="inspiration__li li" key={woman.id}>
                  <div className="image-container">
                    <img src={woman.image} alt={woman.name} />
                    <div className="overlay">
                      <div className="text">
                        <h3>{woman.name}</h3>
                        <p>
                          <b>Lugar:</b> {woman.city}
                        </p>
                        <p>
                          <b>Año:</b> {woman.date}
                        </p>
                        <p>
                          <b>Estilo:</b> {woman.style_tattoo.join(", ")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="inspiration__details">
                    <div className="button__container">
                      <span className="details__bio span">Leer bio</span>
                      <button
                        onClick={() => toggleAccordion(woman.id)}
                        className="details-button"
                      >
                        {accordionState[woman.id] ? (
                          <FontAwesomeIcon
                            icon={faChevronDown}
                            size="sm"
                            style={{ color: "#f8ca60" }}
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            size="sm"
                            style={{ color: "#f8ca60" }}
                          />
                        )}
                      </button>
                    </div>
                    <hr className="hr" />
                    <div
                      className={`details-content ${
                        accordionState[woman.id] ? "expanded" : "collapsed"
                      }`}
                    >
                      <p>{woman.data}</p>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </section>
      <section className="section__about">
        <h2> {info && info.about && info.about.text}</h2>
      </section>
    </>
  );
};

InspirationComponent.propTypes = {};

InspirationComponent.defaultProps = {};

export default InspirationComponent;
