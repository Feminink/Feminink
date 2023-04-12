import React, { useEffect } from "react";
import { getInfo } from "../../store/info/actions";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

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
    <section className='section__last-work section container'>
      <h2>Last works</h2>
      <Swiper style={{"--swiper-navigation-color": "#f8ca60","--swiper-pagination-color": "#f8ca60", "--swiper-scrollbar-drag-bg-color": "#f8ca60"}}
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={25}
        slidesPerView={5}
        navigation
        autoplay={{delay: 5000, disableOnInteraction: false,}}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      > 
        {info && info.lastWorks && info.lastWorks.map((work) => {
          return (
            <SwiperSlide className="last-works" key={work.id}>
              <div className="image-container">
                <img src={work.image} alt={work.title}/>
                <div className="overlay">
                  <div className="text">
                    <h3>{work.title}</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
};

export default LastWorkComponent