import { Link } from 'react-router-dom';

import classes from './PopularCategories.module.css';

const PopularCategories = () => {
  return (
    <>
      <ul className={classes.categories}>
        <li className={`${classes.category} ${classes.carriage}`}>
          <Link to="/">
            <span>Коляски 2в1</span>
          </Link>
        </li>
        <li className={`${classes.category} ${classes.room}`}>
          <Link to="/">
            <span>Дитячі ліжечка</span>
          </Link>
        </li>
        <li className={`${classes.category} ${classes.pot}`}>
          <Link to="/">
            <span>Горщики</span>
          </Link>
        </li>
        <li className={`${classes.category} ${classes.puzzles}`}>
          <Link to="/">
            <span>Пазли</span>
          </Link>
        </li>
        <li className={`${classes.category} ${classes.bath}`}>
          <Link to="/">
            <span>Ванночки</span>
          </Link>
        </li>
        <li className={`${classes.category} ${classes.bed}`}>
          <Link to="/">
            <span>Дитяча постільна білизна</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default PopularCategories;
