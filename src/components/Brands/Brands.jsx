import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import classes from './Brands.module.css';

import playDohImg from 'images/brands/play-doh.png';
import huggiesImg from 'images/brands/huggies.png';
import hippImg from 'images/brands/hipp.png';
import pampersImg from 'images/brands/pampers.png';
import anexImg from 'images/brands/anex.png';
import legoImg from 'images/brands/lego.png';
import bebivitaImg from 'images/brands/bebivita.png';

const swiperOptions = {
  slidesPerView: 'auto',
  spaceBetween: 16,
  speed: 750,

  autoplay: {
    delay: 7500,
    pauseOnMouseEnter: true,
  },
  navigation: {
    prevEl: `.${classes.prevBtn}`,
    nextEl: `.${classes.nextBtn}`,
  },
  modules: [Autoplay],

  breakpoints: {
    768: {
      spaceBetween: 30,
    },
  },
};

const Brands = () => {
  return (
    <Swiper {...swiperOptions}>
      <SwiperSlide className={classes.slide}>
        <img src={playDohImg} alt="Play-Doh" />
      </SwiperSlide>
      <SwiperSlide className={classes.slide}>
        <img src={huggiesImg} alt="Huggies" />
      </SwiperSlide>
      <SwiperSlide className={classes.slide}>
        <img src={hippImg} alt="Hipp" />
      </SwiperSlide>
      <SwiperSlide className={classes.slide}>
        <img src={pampersImg} alt="Pampers" />
      </SwiperSlide>
      <SwiperSlide className={classes.slide}>
        <img src={anexImg} alt="Anex" />
      </SwiperSlide>
      <SwiperSlide className={classes.slide}>
        <img src={legoImg} alt="Lego" />
      </SwiperSlide>
      <SwiperSlide className={classes.slide}>
        <img src={bebivitaImg} alt="Bebivita" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Brands;
