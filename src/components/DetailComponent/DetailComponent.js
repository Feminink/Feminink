import PropTypes from "prop-types";
// IMPORT USE EFFECT
import React, { useEffect } from "react";
// IMPORT USE DISPATCH, USE SELECTOR
import { useDispatch, useSelector } from "react-redux";
// IMPORT LINK, USEPARAMS
import { Link, useParams } from "react-router-dom";
// IMPORT FUNCTION GETINFO FROM STORE
import { getInfo } from "../../store/info/actions";

// IMPORT STYLES
import "./DetailComponent.scss";

const DetailComponent = () => {
  const { info, loadingInfo } = useSelector((state) => state.InfoReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfo(info.gallery));
  }, []);

  if (loadingInfo) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <div>
      {/* <div key={info.gallery.id} className="singleCard flex">
        <img src={info.gallery.image} alt={info.gallery.alt} />
        <div>
          <h1>{info.gallery.title}</h1>
          <h2>Model: {info.gallery.model}</h2>
          <h3>Artist:{info.gallery.artist}</h3>
          <h3>Description:{info.gallery.description}</h3>
        </div>
      </div>

      <Link to="/gallery">
        <button>Back to results</button>
      </Link> */}
    </div>
  );
};

DetailComponent.propTypes = {};

DetailComponent.defaultProps = {};

export default DetailComponent;
