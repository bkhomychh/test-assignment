import PropTypes from 'prop-types';

import classes from './CatalogList.module.css';
import catalogs from 'data/catalogs.json';
import { MENU } from 'utils';
import { Link } from 'react-router-dom';

const CatalogList = ({ setCurrentMenu, closeMenu }) => {
  return (
    <ul className={classes.list}>
      {catalogs.map(({ id, name, shorthand }) => (
        <li key={id}>
          {setCurrentMenu ? (
            <button
              className={classes.link}
              data-catalog={shorthand}
              onClick={() => setCurrentMenu(MENU.category)}
            >
              {name}
            </button>
          ) : (
            <Link
              className={classes.link}
              data-catalog={shorthand}
              onClick={closeMenu}
              to={`/${shorthand}`}
            >
              {name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

CatalogList.propTypes = {
  setCurrentMenu: PropTypes.func,
};

export default CatalogList;
