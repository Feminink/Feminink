import React, { useEffect } from "react";
// IMPORT GET GALLERY FUNCTION
import { getGallery } from "../../store/gallery/actions";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

// IMPORT LINK
import { Link } from "react-router-dom";

/* IMPORT STYLES */
import './LastWorkComponent.scss';

// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const LastWorkComponent = () => {

  const dispatch = useDispatch();
  const { gallery, loadingGallery } = useSelector((state) => state.GalleryReducer);

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
    <section className='section__last-work section container'>
      <h2>Last works</h2>
      <Swiper style={{"--swiper-navigation-color": "#f8ca60","--swiper-pagination-color": "#f8ca60", "--swiper-scrollbar-drag-bg-color": "#f8ca60"}}
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={25}
        slidesPerView={4}
        navigation
        autoplay={{delay: 5000, disableOnInteraction: false,}}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        breakpoints={{
          1024: {  // desde 1024px de ancho en adelante, 4 slides por vista
            slidesPerView: 4
          },
          768: {   // desde 768px hasta 1023px de ancho, 2 slides por vista
            slidesPerView: 2
          },
          0: {   // hasta 767px de ancho, 1 slide por vista
            slidesPerView: 1
          }
        }}
      > 
        {gallery && gallery.map((work) => {
          return (
            <SwiperSlide className="last-works" key={work.id}>
              <Link to={`/gallery/${work.id}`}>

              
              <div className="image-container">
                <img src={work.image} alt={work.title}/>
                <div className="overlay">
                  <div className="text">
                    <h4>{work.title}</h4>
                  </div>
                </div>
              </div>
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
};

export default LastWorkComponent