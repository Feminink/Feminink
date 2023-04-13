import React, { useEffect, useState } from "react";
import { getGallery } from "../../store/gallery/actions";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

/* IMPORT STYLES */
import "./GalleryComponent.scss";
import { Link } from "react-router-dom";

const GalleryComponent = () => {
  const dispatch = useDispatch();
  const { gallery, loadingGallery } = useSelector(
    (state) => state.GalleryReducer
  );
  const artists = ["Miriam F", "Laura O", "Ignacio E"];
  const [searchByStyle, setSearchByStyle] = useState("");
  const [filterByArtist, setFilterByArtist] = useState([]);

  const filterHandler = (e) => {
    if (e.target.checked) {
      setFilterByArtist((previousSearch) => [
        ...previousSearch,
        e.target.value,
      ]);
    } else {
      setFilterByArtist((previousSearch) => {
        const index = previousSearch.indexOf(e.target.value);
        if (index > -1) {
          return previousSearch.splice(index, 1);
        }
      });
    }
  };

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
      <h2>Gallery</h2>
      <section className="filters-container flex">
        <form>
          <fieldset className="form__group container">
            <label>Search by style:</label>
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
            <label>Search by artist name:</label>
            <ul>
              {artists.map((artist) => (
                <li key={artist}>
                  <label>
                    <input
                      id="checkbox"
                      name={artist}
                      type="checkbox"
                      value={artist}
                      onChange={filterHandler}
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
            return filterByArtist;
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
    </section>
  );
};

GalleryComponent.propTypes = {};

GalleryComponent.defaultProps = {};

export default GalleryComponent;
