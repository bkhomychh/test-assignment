import { useState } from 'react';

import classes from './Sorting.module.css';
import sprite from 'images/sprite.svg';
import { SORTING_OPTIONS } from 'utils/constants';

const Sorting = ({ currentSorting, setCurrentSorting }) => {
  const [isSortingBtnActive, setIsSortingBtnActive] = useState(false);

  const changeSorting = newSorting => {
    const fn = ({ target }) => {
      setCurrentSorting(newSorting);
      target.classList.add(classes.currentSorting);
      setIsSortingBtnActive(false);
    };
    return fn;
  };
  const toggleSortingBtn = () => setIsSortingBtnActive(state => !state);
  const getCurrentClass = sorting => (currentSorting === sorting ? classes.currentSorting : '');

  return (
    <div className={classes.sorting}>
      <button
        className={`${classes.sortingBtn} ${isSortingBtnActive ? classes.active : ''}`}
        type="button"
        onClick={toggleSortingBtn}
      >
        {currentSorting}
        <svg width="11px" height="6px">
          <use href={sprite + '#icon-arrow-down'}></use>
        </svg>
      </button>

      <ul className={classes.options}>
        <li>
          <button
            className={getCurrentClass(SORTING_OPTIONS.default)}
            type="button"
            onClick={changeSorting(SORTING_OPTIONS.default)}
          >
            За замовчуванням
          </button>
        </li>
        <li>
          <button
            className={getCurrentClass(SORTING_OPTIONS.popular)}
            type="button"
            onClick={changeSorting(SORTING_OPTIONS.popular)}
          >
            По популярності
          </button>
        </li>
        <li>
          <button
            className={getCurrentClass(SORTING_OPTIONS.cheap)}
            type="button"
            onClick={changeSorting(SORTING_OPTIONS.cheap)}
          >
            Дешевші
          </button>
        </li>
        <li>
          <button
            className={getCurrentClass(SORTING_OPTIONS.expensive)}
            type="button"
            onClick={changeSorting(SORTING_OPTIONS.expensive)}
          >
            Дорожчі
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sorting;
