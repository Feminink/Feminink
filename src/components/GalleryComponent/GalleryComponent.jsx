import React, { useEffect } from "react";
import { getInfo } from "../../store/info/actions";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

const GalleryComponent = () => {
  const dispatch = useDispatch();

  const { info, loadingInfo } = useSelector((state) => state.InfoReducer);

  useEffect(() => {
    dispatch(getInfo());
  }, []);

  console.log(info);

  if (loadingInfo) {
    return (
      <div className="container">
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <section className="container">
      <h2>Gallery</h2>
      <div className="cards-container container">
        {info &&
          info.gallery &&
          info.gallery.map((gallerya) => {
            console.log(gallerya);
            return (
              <div>
                <img src={gallerya.image} alt={gallerya.alt} />
                <div className="card__details">
                  <h4>Title: {gallerya.title}</h4>
                  <h4>Artist: {gallerya.artist}</h4>
                  <h4>Model: {gallerya.model}</h4>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

GalleryComponent.propTypes = {};

GalleryComponent.defaultProps = {};

export default GalleryComponent;
