import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';

import FilterMenu from 'components/FilterMenu';

import { getButtonText } from 'utils';

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

const Filters = ({ currentFilters = [], setFilters, removeFilter }) => {
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

        {currentFilters.map((filter, index) => (
          <SwiperSlide className={classes.slide} key={index}>
            <button
              className={classes.selection}
              type="button"
              onClick={() => removeFilter(filter)}
            >
              {getButtonText(filter)}
              <svg width="15px" height="15px" stroke="black">
                <use href={sprite + '#icon-cross'}></use>
              </svg>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {isFilterMenuOpen && (
        <div className={classes.backdrop}>
          <FilterMenu setFilters={setFilters} closeMenu={hideFilterMenu} />
        </div>
      )}
    </>
  );
};

Filters.propTypes = {
  currentFilters: PropTypes.arrayOf(PropTypes.object),
  setFilters: PropTypes.func.isRequired,
  removeFilter: PropTypes.func.isRequired,
};

export default Filters;
