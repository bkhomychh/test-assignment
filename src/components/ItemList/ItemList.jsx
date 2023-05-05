import PropTypes from 'prop-types';

import Card from 'components/Card';

import classes from './ItemList.module.css';
import sprite from 'images/sprite.svg';
import Button from 'components/Button';

const ItemList = ({ items }) => {
  return (
    <div className={classes.wrapper}>
      <ul className={classes.list}>
        {items.map(item => (
          <li key={item.id}>
            <Card {...item} />
          </li>
        ))}
      </ul>

      <div className={classes.footer}>
        <Button type="button">Показати ще</Button>
        <ul className={classes.pagination}>
          <li>
            <button className={`${classes.paginationBtn} ${classes.active}`} type="button">
              1
            </button>
          </li>
          <li>
            <button className={classes.paginationBtn} type="button">
              2
            </button>
          </li>
          <li>
            <button className={classes.paginationBtn} type="button">
              3
            </button>
          </li>
          <li>
            <button className={classes.paginationBtn} type="button">
              4
            </button>
          </li>
          <li>
            <button className={classes.paginationBtn} type="button">
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
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ItemList;
