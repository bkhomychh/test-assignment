import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import FilterMenu from 'components/FilterMenu';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classes from './Filters.module.css';
import sprite from 'images/sprite.svg';

const swiperOptions = {
  slidesPerView: 'auto',
  spaceBetween: 10,
  speed: 750,

  breakpoints: {
    768: {
      spaceBetween: 20,
    },
  },
};

const Filters = () => {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const showFilterMenu = () => setIsFilterMenuOpen(true);
  const hideFilterMenu = () => setIsFilterMenuOpen(false);

  return (
    <>
      <Swiper {...swiperOptions} className={classes.swiper}>
        <SwiperSlide className={classes.slide}>
          <button className={classes.settings} type="button" onClick={showFilterMenu}>
            <svg width="17px" height="17px" stroke="black">
              <use href={sprite + '#icon-filter'}></use>
            </svg>
            Фільтр
          </button>
        </SwiperSlide>

        <SwiperSlide className={classes.slide}>
          <button className={classes.selection} type="button">
            В наявності
            <svg width="15px" height="15px" stroke="black">
              <use href={sprite + '#icon-cross'}></use>
            </svg>
          </button>
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <button className={classes.selection} type="button">
            Виробник: Anex
            <svg width="15px" height="15px" stroke="black">
              <use href={sprite + '#icon-cross'}></use>
            </svg>
          </button>
        </SwiperSlide>
      </Swiper>

      {isFilterMenuOpen && <FilterMenu closeMenu={hideFilterMenu} />}
    </>
  );
};

export default Filters;
