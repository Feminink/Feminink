import React from "react";

// IMPORT STYLES
import "./Gallery.scss";

// IMPORT COMPONENTS
import GalleryComponent from "../../components/GalleryComponent/GalleryComponent";
import SearchComponent from "../../components/SearchComponent/SearchComponent";

const Gallery = () => {
  return (
      <>
        <div className="page-title__gallery">
          <div className="container">
            <h1>GALLERY PAGE</h1>
          </div>
        </div>
        <GalleryComponent></GalleryComponent>
      </>
  );
};
export default Gallery;
