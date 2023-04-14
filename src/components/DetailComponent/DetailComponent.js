import PropTypes from "prop-types";
// IMPORT USE EFFECT
import React, { useEffect } from "react";
// IMPORT USE DISPATCH, USE SELECTOR
import { useDispatch, useSelector } from "react-redux";
// IMPORT LINK, USEPARAMS
import { Link } from "react-router-dom";
// IMPORT STYLES
import "./DetailComponent.scss";
// IMPORT GET DETAIL FROM STORE
import { getDetail } from "../../store/gallery/actions";

const DetailComponent = () => {
  const dispatch = useDispatch();
  const { detail, loadingDetail } = useSelector(
    (state) => state.GalleryReducer
  );

  useEffect(() => {
    dispatch(getDetail());
  }, []);

  if (loadingDetail) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <div className="section__gallery container center">
      <div className="detail__container" key={detail.id}>
        <img src={detail.image} alt={detail.alt} />
        <div className="gallery__details">
          <p>
            <b>Model:</b> <span>{detail.model}</span>
          </p>
          <p>
            <b>Style: </b>
            <span>{detail.style}</span>
          </p>
          <p>
            <b>Artist: </b>
            <span>{detail.artist}</span>
          </p>
          <p>
            <b>Description:</b> <span>{detail.description}</span>
          </p>
        </div>
      </div>
      <Link to="/gallery">
        <button className="button--back">Back to Gallery</button>
      </Link>
    </div>
  );
};

DetailComponent.propTypes = {};

DetailComponent.defaultProps = {};

export default DetailComponent;
