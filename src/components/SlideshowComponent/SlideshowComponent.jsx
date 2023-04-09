import React from 'react';
import PropTypes from 'prop-types';

/* IMPORT STYLES */
import './SlideshowComponent.scss';

// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const SlideshowComponent = () => {
  return (
    <section className='section__slideshow section'>
      <Swiper style={{"--swiper-navigation-color": "#f8ca60","--swiper-pagination-color": "#f8ca60", "--swiper-scrollbar-drag-bg-color": "#f8ca60"}}
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        autoplay={{delay: 5000, disableOnInteraction: false,}}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><img src='https://images.pexels.com/photos/5533992/pexels-photo-5533992.jpeg'></img></SwiperSlide>
        <SwiperSlide><img src='https://images.pexels.com/photos/5533992/pexels-photo-5533992.jpeg'></img></SwiperSlide>
        <SwiperSlide><img src='https://images.pexels.com/photos/5533992/pexels-photo-5533992.jpeg'></img></SwiperSlide>
        <SwiperSlide><img src='https://images.pexels.com/photos/5533992/pexels-photo-5533992.jpeg'></img></SwiperSlide>
        <SwiperSlide><img src='https://images.pexels.com/photos/5533992/pexels-photo-5533992.jpeg'></img></SwiperSlide>
      </Swiper>
    </section>
  )
}

export default SlideshowComponent