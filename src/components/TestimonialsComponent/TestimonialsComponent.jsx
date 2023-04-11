import React, { useEffect } from "react";
import { getInfo } from "../../store/info/actions";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";

/* IMPORT STYLES */
import './TestimonialsComponent.scss';

// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// IMPORT FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const TestimonialsComponent = () => {

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
  <section className='section__testimonials section'>
    <div className="testimonials__container container">
      <Swiper style={{"--swiper-navigation-color": "#ffffff","--swiper-pagination-color": "#ffffff", "--swiper-scrollbar-drag-bg-color": "#ffffff"}}
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{delay: 5000, disableOnInteraction: false,}}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {info && info.testimonials && info.testimonials.map((testimonial) => {
          return (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonials__info">
                <img className="testimonials__image img" src={testimonial.image} alt={testimonial.alt}/>
                <p className="testimonials__p p"><FontAwesomeIcon icon={faQuoteLeft} size="lg" /> {testimonial.text} <FontAwesomeIcon icon={faQuoteRight} size="lg" /></p>
                <h3 className="testimonials__h3 h3">{testimonial.name}</h3>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  </section>
  );
};

export default TestimonialsComponent