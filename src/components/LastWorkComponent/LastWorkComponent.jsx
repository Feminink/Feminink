import React from 'react'
import PropTypes from 'prop-types';

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
            <SwiperSlide><img src='https://img.freepik.com/free-photo/hands-drawing-tattoo-arm-with-needle-machine_23-2147834042.jpg?w=1380&t=st=1680784303~exp=1680784903~hmac=4a6bc35323a4eda2f5e9e2b1ae27efc23441c172736b17c1b232a5d3edad2135'></img></SwiperSlide>
            <SwiperSlide><img src='https://img.freepik.com/free-photo/closeup-photo-shoot-tattoo-making-artist-is-working-with-tattoo-machine-customer-s-hand_613910-17256.jpg?w=1380&t=st=1680784393~exp=1680784993~hmac=debafc80d4ff20d15b22aabbc67271c6d3f2e667876c7c8c125820d304f475bd'></img></SwiperSlide>
            <SwiperSlide><img src='https://img.freepik.com/free-photo/hands-drawing-tattoo-arm-with-needle-machine_23-2147834042.jpg?w=1380&t=st=1680784303~exp=1680784903~hmac=4a6bc35323a4eda2f5e9e2b1ae27efc23441c172736b17c1b232a5d3edad2135'></img></SwiperSlide>
            <SwiperSlide><img src='https://img.freepik.com/free-photo/closeup-photo-shoot-tattoo-making-artist-is-working-with-tattoo-machine-customer-s-hand_613910-17256.jpg?w=1380&t=st=1680784393~exp=1680784993~hmac=debafc80d4ff20d15b22aabbc67271c6d3f2e667876c7c8c125820d304f475bd'></img></SwiperSlide>
            <SwiperSlide><img src='https://img.freepik.com/free-photo/hands-drawing-tattoo-arm-with-needle-machine_23-2147834042.jpg?w=1380&t=st=1680784303~exp=1680784903~hmac=4a6bc35323a4eda2f5e9e2b1ae27efc23441c172736b17c1b232a5d3edad2135'></img></SwiperSlide>
            <SwiperSlide><img src='https://img.freepik.com/free-photo/closeup-photo-shoot-tattoo-making-artist-is-working-with-tattoo-machine-customer-s-hand_613910-17256.jpg?w=1380&t=st=1680784393~exp=1680784993~hmac=debafc80d4ff20d15b22aabbc67271c6d3f2e667876c7c8c125820d304f475bd'></img></SwiperSlide>
            <SwiperSlide><img src='https://img.freepik.com/free-photo/hands-drawing-tattoo-arm-with-needle-machine_23-2147834042.jpg?w=1380&t=st=1680784303~exp=1680784903~hmac=4a6bc35323a4eda2f5e9e2b1ae27efc23441c172736b17c1b232a5d3edad2135'></img></SwiperSlide>
            <SwiperSlide><img src='https://img.freepik.com/free-photo/closeup-photo-shoot-tattoo-making-artist-is-working-with-tattoo-machine-customer-s-hand_613910-17256.jpg?w=1380&t=st=1680784393~exp=1680784993~hmac=debafc80d4ff20d15b22aabbc67271c6d3f2e667876c7c8c125820d304f475bd'></img></SwiperSlide>
            <SwiperSlide><img src='https://img.freepik.com/free-photo/hands-drawing-tattoo-arm-with-needle-machine_23-2147834042.jpg?w=1380&t=st=1680784303~exp=1680784903~hmac=4a6bc35323a4eda2f5e9e2b1ae27efc23441c172736b17c1b232a5d3edad2135'></img></SwiperSlide>
            <SwiperSlide><img src='https://img.freepik.com/free-photo/closeup-photo-shoot-tattoo-making-artist-is-working-with-tattoo-machine-customer-s-hand_613910-17256.jpg?w=1380&t=st=1680784393~exp=1680784993~hmac=debafc80d4ff20d15b22aabbc67271c6d3f2e667876c7c8c125820d304f475bd'></img></SwiperSlide>
          </Swiper>
        </section>
      )
}

export default LastWorkComponent