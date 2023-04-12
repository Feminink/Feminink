import PropTypes from "prop-types";
// IMPORT USE EFFECT
import React, { useEffect } from "react";
// IMPORT USE DISPATCH, USE SELECTOR
import { useDispatch, useSelector } from "react-redux";
// IMPORT LINK, USEPARAMS
import { Link } from "react-router-dom";
// IMPORT STYLES
import "./DetailComponent.scss";
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
    <div className="container">
      <div key={detail.id}>
        <img src={detail.image} alt={detail.alt} />
        <div>
          <h3> {detail.title}</h3>
          <h3>Model: {detail.model}</h3>
          <h3>Artist: {detail.artist}</h3>
          <h3>Description: {detail.description}</h3>
        </div>
      </div>

      <Link to="/gallery">
        <button>Back to results</button>
      </Link>
    </div>
  );
};

DetailComponent.propTypes = {};

DetailComponent.defaultProps = {};

export default DetailComponent;
