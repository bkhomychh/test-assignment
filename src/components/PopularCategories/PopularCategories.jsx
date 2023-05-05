import { useMediaQuery } from 'hooks';
import { Link } from 'react-router-dom';

import classes from './PopularCategories.module.css';

const PopularCategories = () => {
  const isDeskVersion = useMediaQuery('1350px');

  return (
    <>
      <ul className={classes.categories}>
        <li className={`${classes.category} ${classes.carriage}`}>
          <Link to="catalog">
            <span>Коляски 2в1</span>
          </Link>
        </li>
        <li className={`${classes.category} ${classes.room}`}>
          <Link to="catalog">
            <span>{isDeskVersion ? 'Ліжечка' : 'Дитячі ліжечка'}</span>
          </Link>
        </li>
        <li className={`${classes.category} ${classes.pot}`}>
          <Link to="catalog">
            <span>Горщики</span>
          </Link>
        </li>
        <li className={`${classes.category} ${classes.puzzles}`}>
          <Link to="catalog">
            <span>Пазли</span>
          </Link>
        </li>
        <li className={`${classes.category} ${classes.bath}`}>
          <Link to="catalog">
            <span>Ванночки</span>
          </Link>
        </li>
        <li className={`${classes.category} ${classes.bed}`}>
          <Link to="catalog">
            <span>{isDeskVersion ? 'Постільна білизна' : 'Дитяча постільна білизна'}</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default PopularCategories;
