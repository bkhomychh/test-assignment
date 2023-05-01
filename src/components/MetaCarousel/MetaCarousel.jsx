import { useRef } from 'react';
import { Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import classes from './MetaCarousel.module.css';
import sprite from 'images/sprite.svg';

const thumbsOptions = {
  spaceBetween: 10,
  slidesPerView: 'auto',
  speed: 750,
  loop: true,
  direction: 'vertical',
  slideClass: classes.thumbsSlide,

  modules: [Thumbs],
  watchSlidesProgress: true,
};

const swiperOptions = {
  slidesPerView: 1,
  speed: 750,
  loop: true,
  slideClass: classes.swiperSlide,
  navigation: {
    prevEl: `.${classes.prevBtn}`,
    nextEl: `.${classes.nextBtn}`,
  },

  modules: [Navigation, Thumbs],
};

const MetaCarousel = ({ img, imgL }) => {
  const thumbsSwiper = useRef(null);

  const thumbsSlides = new Array(7).fill(img);
  const swiperSlides = new Array(7).fill(imgL);

  return (
    <div className={classes.images}>
      <Swiper className={classes.thumbsSwiper} ref={thumbsSwiper} {...thumbsOptions}>
        {thumbsSlides.map((img, index) => (
          <SwiperSlide className={classes.thumbsSlide} key={index}>
            <img src={img} alt="Item" data-number={index} />
          </SwiperSlide>
        ))}
      </Swiper>

      {thumbsSwiper.current?.swiper && (
        <Swiper
          className={classes.swiper}
          {...swiperOptions}
          thumbs={{
            swiper: thumbsSwiper.current,
          }}
        >
          {swiperSlides.map((img, index) => (
            <SwiperSlide className={classes.swiperSlide} key={index}>
              <img src={img} alt="Item" data-number={index} />
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
      )}
    </div>
  );
};

export default MetaCarousel;
