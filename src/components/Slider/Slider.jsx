import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.module.css';

import classes from './Slider.module.css';
import sprite from 'images/sprite.svg';
import slideS from 'images/slider/slide-s.jpg';
import slideM from 'images/slider/slide-m.jpg';
import slideL from 'images/slider/slide-l.jpg';

const slide = {
  slideS,
  slideM,
  slideL,
};

const slides = [slide, slide, slide];

const sliderOptions = {
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 750,
  loop: true,

  autoplay: {
    delay: 17500,
    pauseOnMouseEnter: true,
  },
  navigation: {
    prevEl: `.${classes.prevBtn}`,
    nextEl: `.${classes.nextBtn}`,
  },
  pagination: {
    bulletClass: classes.bullet,
    bulletActiveClass: classes.bulletActive,
    clickable: true,
  },
  modules: [Autoplay, Navigation, Pagination],
};

const Slider = () => {
  return (
    <section>
      <Swiper {...sliderOptions}>
        {slides.map(({ slideXS, slideS, slideM, slideL }, index) => {
          return (
            <SwiperSlide key={index}>
              <picture>
                <source srcSet={slideL} media="(min-width: 1000px)" />
                <source srcSet={slideM} media="(min-width: 768px)" />
                <source srcSet={slideS} media="(max-width: 767px)" />
                <img src={slideS} alt="Sleepy child" />
              </picture>
            </SwiperSlide>
          );
        })}
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
    </section>
  );
};

export default Slider;
