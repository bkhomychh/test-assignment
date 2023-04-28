import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Card from 'components/Card';

import classes from './Discounts.module.css';
import goods from 'data/discounts.json';
import sprite from 'images/sprite.svg';

const sliderOptions = {
  slidesPerView: 'auto',
  spaceBetween: 16,
  speed: 750,

  autoplay: {
    delay: 3500,
    pauseOnMouseEnter: true,
  },
  navigation: {
    prevEl: `.${classes.prevBtn}`,
    nextEl: `.${classes.nextBtn}`,
  },
  modules: [Autoplay, Navigation],

  breakpoints: {
    768: {
      spaceBetween: 30,
    },
  },
};

const Discounts = () => {
  return (
    <Swiper {...sliderOptions}>
      {goods.map((item, index) => (
        <SwiperSlide className={classes.slide} key={index}>
          <Card {...item} />
        </SwiperSlide>
      ))}

      <button className={classes.prevBtn} type="button">
        <svg width="20px" height="20px">
          <use href={sprite + '#icon-arrow-left'}></use>
        </svg>
      </button>
      <button className={classes.nextBtn} type="button">
        <svg width="20px" height="20px">
          <use href={sprite + '#icon-arrow-right'}></use>
        </svg>
      </button>
    </Swiper>
  );
};

export default Discounts;
