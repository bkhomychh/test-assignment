import PropTypes from 'prop-types';

import Card from 'components/Card';

import classes from './ItemList.module.css';
import sprite from 'images/sprite.svg';
import Button from 'components/Button';
import { useState } from 'react';
import { useEffect } from 'react';

const ItemList = ({ items, setCurrentPage, currentPage, limit }) => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const newVisibleItems = items.slice(
      (currentPage - 1) * limit,
      (currentPage - 1) * limit + limit,
    );

    setVisibleItems(newVisibleItems);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, items, limit]);

  const pageNumber = Math.ceil(items.length / limit);

  return (
    <div className={classes.wrapper}>
      {visibleItems.length > 0 ? (
        <>
          <ul className={classes.list}>
            {visibleItems.map(item => (
              <li key={item.id}>
                <Card {...item} />
              </li>
            ))}
          </ul>

          <div className={classes.footer}>
            {pageNumber > currentPage && (
              <Button type="button" onClick={() => setCurrentPage(state => state + 1)}>
                Показати ще
              </Button>
            )}
            <ul className={classes.pagination}>
              <li>
                <button
                  className={`${classes.paginationBtn} ${currentPage === 1 ? classes.active : ''}`}
                  type="button"
                  onClick={() => setCurrentPage(1)}
                >
                  1
                </button>
              </li>
              <li>
                <button
                  className={`${classes.paginationBtn} ${currentPage === 2 ? classes.active : ''}`}
                  type="button"
                  onClick={() => setCurrentPage(2)}
                >
                  2
                </button>
              </li>
              <li>
                <button
                  className={`${classes.paginationBtn} ${currentPage === 3 ? classes.active : ''}`}
                  type="button"
                  onClick={() => setCurrentPage(3)}
                >
                  3
                </button>
              </li>
              <li>
                <button
                  className={`${classes.paginationBtn} ${currentPage === 4 ? classes.active : ''}`}
                  type="button"
                  onClick={() => setCurrentPage(4)}
                >
                  4
                </button>
              </li>
              <li>
                <button
                  className={`${classes.paginationBtn} ${currentPage === 5 ? classes.active : ''}`}
                  type="button"
                  onClick={() => setCurrentPage(5)}
                >
                  5
                </button>
              </li>
              <li>
                <button className={classes.arrow} type="button">
                  <svg width="16px" height="16px">
                    <use href={sprite + '#icon-arrow-right'}></use>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <p className={classes.info}>Список порожній :(</p>
      )}
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
};

export default ItemList;
