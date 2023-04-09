import React, { useEffect } from "react";
import { getInfo } from "../../store/info/actions";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

/* IMPORT STYLES */
import "./GalleryComponent.scss";

const GalleryComponent = () => {

  const dispatch = useDispatch();
  const { info, loadingInfo } = useSelector((state) => state.InfoReducer);

  useEffect(() => {
    dispatch(getInfo());
  }, []);

  if (loadingInfo) {
    return (
      <div className="container">
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <section className="section__gallery container">
      <h2>Gallery</h2>
      <ul className="gallery__ul ul">
        {info && info.gallery && info.gallery.map((gallerya) => {
          return (
            <li className="gallery__li li" key={gallerya.id}>
              <div className="image-container">
                <img src={gallerya.image} alt={gallerya.alt} />
                <div className="overlay">
                  <div className="text">
                    <h3>{gallerya.title}</h3>
                    <p><b>Artist:</b> {gallerya.artist}</p>
                  </div>
                </div>
              </div>
              <div className="gallery__details">
                <h5>Model: {gallerya.model}</h5>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

GalleryComponent.propTypes = {};

GalleryComponent.defaultProps = {};

export default GalleryComponent;
