import PropTypes from 'prop-types';
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Card from 'components/Card';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classes from './Carousel.module.css';
import sprite from 'images/sprite.svg';

const swiperOptions = {
  slidesPerView: 'auto',
  spaceBetween: 16,
  speed: 750,

  autoplay: {
    delay: 5000,
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

const Carousel = ({ items, navigation }) => {
  return (
    <div className={classes.wrapper}>
      <Swiper {...swiperOptions}>
        {items.map((item, index) => (
          <SwiperSlide className={classes.slide} key={index}>
            <Card {...item} />
          </SwiperSlide>
        ))}

        {navigation && (
          <>
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
          </>
        )}
      </Swiper>
    </div>
  );
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  navigation: PropTypes.bool,
};

export default Carousel;
