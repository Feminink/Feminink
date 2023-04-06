import React, { useEffect } from "react";
import { getGallery } from "../../store/gallery/actions";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

const GalleryComponent = () => {
  const dispatch = useDispatch();
  const imgUrl = "assets/images/gallery";

  const { gallery, loadingGallery } = useSelector(
    (state) => state.GalleryReducer
  );

  useEffect(() => {
    dispatch(getGallery());
  }, []);

  if (loadingGallery) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <div className="container">
      <p>Gallery</p>
      {gallery.map((gallerya) => {
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
  );
};

GalleryComponent.propTypes = {};

GalleryComponent.defaultProps = {};

export default GalleryComponent;
