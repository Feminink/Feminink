import PropTypes from "prop-types";
// IMPORT USE EFFECT, USE STATE
import React, { useEffect, useState } from "react";
// IMPORT GET GALLERY FUNCTION
import { getGallery } from "../../store/gallery/actions";
// IMPORT USE DISPATCH, USE SELECTOR
import { useDispatch, useSelector } from "react-redux";
// IMPORT LINK
import { Link } from "react-router-dom";
// IMPORT STYLES
// IMPORT STYLES
import "./GalleryComponent.scss";

const GalleryComponent = () => {
  const dispatch = useDispatch();
  const { gallery, loadingGallery } = useSelector(
    (state) => state.GalleryReducer
  );
  const artists = ["Miriam F", "Laura O", "Ignacio E"];
  const [searchByStyle, setSearchByStyle] = useState("");
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    dispatch(getGallery());
  }, []);

  if (loadingGallery) {
    return (
      <div className="container">
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <section className="section__gallery container">
      <div className="flex">
        <section className="filters-container flex">
          <form>
            <fieldset className="form__group container">
              <label>
                <b>Search by style:</b>
              </label>
              <input
                className="form__input"
                type="search"
                placeholder=""
                onChange={(e) => setSearchByStyle(e.target.value)}
              />
            </fieldset>
          </form>
          <form>
            <fieldset className="form__group">
              <label>
                <b>Search by artist name:</b>
              </label>
              <ul>
                {artists.map((artist) => (
                  <li key={artist}>
                    <label>
                      <input
                        id="checkbox"
                        name={artist}
                        type="checkbox"
                        value={artist}
                        onChange={(e) => {
                          setChecked(e.target.value);
                        }}
                      />
                      {artist}
                    </label>
                  </li>
                ))}
              </ul>
            </fieldset>
          </form>
        </section>

        <ul className="gallery__ul ul">
          {gallery
            .filter((gallerya) => {
              return searchByStyle.toLowerCase() === ""
                ? gallery
                : gallerya.style.toLowerCase().startsWith(searchByStyle);
            })
            .filter((gallerya) => {
              return checked.length > 0
                ? gallerya.artist.includes(checked)
                : gallery;
            })
            .map((gallerya) => {
              return (
                <li className="gallery__li li" key={gallerya.id}>
                  <div className="image-container">
                    <Link to={`/gallery/${gallerya.id}`}>
                      <img src={gallerya.image} alt={gallerya.alt} />
                      <div className="overlay">
                        <div className="text">
                          <h3>{gallerya.title}</h3>
                          <p>
                            <b>Artist:</b> {gallerya.artist}
                          </p>
                          <p>
                            <b>Style:</b> {gallerya.style}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="gallery__details">
                    <h5>Model: {gallerya.model}</h5>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};

GalleryComponent.propTypes = {};

GalleryComponent.defaultProps = {};

export default GalleryComponent;
