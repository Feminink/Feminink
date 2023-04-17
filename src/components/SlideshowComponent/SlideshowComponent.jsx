import React from "react";
import PropTypes from "prop-types";

/* IMPORT STYLES */
import "./SlideshowComponent.scss";

// import Swiper core and required modules
import { Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

const SlideshowComponent = () => {
  return (
    <section className="section__slideshow section">
      <Swiper
        style={{
          "--swiper-navigation-color": "#f8ca60",
          "--swiper-pagination-color": "#f8ca60",
          "--swiper-scrollbar-drag-bg-color": "#f8ca60",
        }}
        // install Swiper modules
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img src="../../assets/images/slideshow/slideshow_01.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../assets/images/slideshow/slideshow_02.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../assets/images/slideshow/slideshow_03.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../assets/images/slideshow/slideshow_04.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../assets/images/slideshow/slideshow_05.webp"></img>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SlideshowComponent;
