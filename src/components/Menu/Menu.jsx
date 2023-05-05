import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { useCloseModal } from 'hooks';
import { MENU } from 'utils';

import classes from './Menu.module.css';
import sprite from 'images/sprite.svg';
import categories from 'data/categories.json';
import NavLinks from 'components/NavLinks';
import CatalogList from 'components/CatalogList';

const Menu = ({ closeMenu }) => {
  const [currentMenu, setCurrentMenu] = useState(MENU.main);

  useCloseModal(closeMenu);

  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        {currentMenu === MENU.main && (
          <div className={classes.mainMenu}>
            <button
              className={classes.catalogBtn}
              type="button"
              onClick={() => setCurrentMenu(MENU.catalog)}
            >
              <svg width="25px" height="16px">
                <use href={sprite + '#icon-burger-menu'}></use>
              </svg>
              Каталог
            </button>

            <NavLinks />
          </div>
        )}

        {currentMenu === MENU.catalog && (
          <div className={classes.catalogMenu}>
            <button className={classes.btn} type="button" onClick={() => setCurrentMenu(MENU.main)}>
              <svg>
                <use href={sprite + '#icon-arrow-down'}></use>
              </svg>
              Меню
            </button>

            <CatalogList setCurrentMenu={setCurrentMenu} />
          </div>
        )}

        {currentMenu === MENU.category && (
          <div className={classes.categoryMenu}>
            <button
              className={classes.btn}
              type="button"
              onClick={() => setCurrentMenu(MENU.catalog)}
            >
              <svg width="7px" height="13px">
                <use href={sprite + '#icon-arrow-down'}></use>
              </svg>
              Каталог
            </button>

            <ul className={classes.list}>
              {categories.map(({ id, name }) => (
                <li key={id}>
                  <Link to="/catalog">{name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button className={classes.closeBtn} type="button" onClick={closeMenu}>
          <svg width="25px" height="25px">
            <use href={sprite + '#icon-close'}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

Menu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default Menu;
